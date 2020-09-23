import React, { Component } from "react";
// import items from "./data";
import Client from "./contentfull";
const RoomContext = React.createContext();

class RoomProvider extends Component {
	state = {
		rooms: [],
		sortedRooms: [],
		featuredRooms: [],
		loading: true,
		type: "all",
		capacity: 1,
		price: 0,
		minPrice: 0,
		maxPrice: 0,
		minSize: 0,
		maxSize: 0,
		breakfast: false,
		pets: false,
	};

	//getData
	getData = async () => {
		try {
			let response = await Client.getEntries({
				content_type: "assinieBeach",
				order: "sys.createdAt",
			});
			let rooms = this.formatData(response.items);
			let featuredRooms = rooms.filter((room) => room.featured === true);
			let maxPrice = Math.max(...rooms.map((item) => item.price));
			let maxSize = Math.max(...rooms.map((item) => item.size));

			this.setState({
				rooms,
				featuredRooms,
				sortedRooms: rooms,
				loading: false,
				price: maxPrice,
				size: maxSize,
				maxPrice,
				maxSize,
			});
		} catch (err) {
			console.log(err);
		}
	};
	componentDidMount() {
		this.getData();
	}

	formatData(items) {
		let tempItems = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => image.fields.file.url);
			let room = { ...item.fields, images, id };
			return room;
		});
		return tempItems;
	}
	getRoom = (slug) => {
		let tempRooms = [...this.state.rooms];
		const room = tempRooms.find((room) => room.slug === slug);
		return room;
	};

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		this.setState(
			{
				[name]: value,
			},
			this.filterRooms
		);
	};

	filterRooms = () => {
		let {
			rooms,
			type,
			capacity,
			price,
			minSize,
			maxSize,
			breakfast,
			pets,
		} = this.state;
		let tempRooms = [...rooms];

		// TODO: filtrer avec type
		if (type !== "all") {
			tempRooms = [...tempRooms];
			tempRooms = tempRooms.filter((room) => room.type === type);
		}
		// transform value
		capacity = parseInt(capacity);
		price = parseInt(price);

		// filtrer avec capacity
		if (capacity !== 1) {
			tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
		}
		//filtrer avec le prix
		tempRooms = tempRooms.filter((room) => room.price <= price);

		//filtrer avec la surface
		tempRooms = tempRooms.filter(
			(room) => room.size >= minSize && room.size <= maxSize
		);

		// filtrer avec le petit-déjeuné
		if (breakfast) {
			tempRooms = tempRooms.filter((room) => room.breakfast === true);
		}
		//filtrer avec l'animal
		if (pets) {
			tempRooms = tempRooms.filter((room) => room.pets === true);
		}

		// changer le state
		this.setState({
			sortedRooms: tempRooms,
		});
	};

	render() {
		return (
			<RoomContext.Provider
				value={{
					...this.state,
					getRoom: this.getRoom,
					handleChange: this.handleChange,
					filterRooms: this.filterRooms,
				}}
			>
				{this.props.children}
			</RoomContext.Provider>
		);
	}
}
const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component) {
	return function ConsumerWrapper(props) {
		return (
			<RoomConsumer>
				{(value) => <Component {...props} context={value} />}
			</RoomConsumer>
		);
	};
}

export { RoomProvider, RoomConsumer, RoomContext };
