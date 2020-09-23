import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

//get all unique value
const getUnique = (items, value) => {
	return [...new Set(items.map((item) => item[value]))];
};
export default function RoomFilter({ rooms }) {
	const context = useContext(RoomContext);
	const {
		type,
		capacity,
		price,
		minPrice,
		maxPrice,
		minSize,
		maxSize,
		breakfast,
		pets,
		handleChange,
	} = context;

	let types = getUnique(rooms, "type");
	types = ["all", ...types];
	types = types.map((item, index) => {
		return (
			<option value={item} key={index}>
				{item}
			</option>
		);
	});

	let people = getUnique(rooms, "capacity");
	people = people.map((item, index) => {
		return (
			<option key={index} value={item}>
				{item}
			</option>
		);
	});

	return (
		<section className="filter-container">
			<Title title="recherche" />
			<form className="filter-form">
				{/*type de chambre*/}
				<div className="form-group">
					<label htmlFor="type">type chambre</label>
					<select
						name="type"
						id="type"
						value={type}
						className="form-control"
						onChange={handleChange}
					>
						{types}
					</select>
				</div>
				{/*fin de type de chambre */}
				{/*Capacite*/}
				<div className="form-group">
					<label htmlFor="capacity">capacité</label>
					<select
						name="capacity"
						id="capacity"
						value={capacity}
						className="form-control"
						onChange={handleChange}
					>
						{people}
					</select>
				</div>
				{/*fin Capacite */}
				{/*room price*/}
				<div className="form-group">
					<label htmlFor="price">prix:{price}000fcfa</label>
					<input
						type="range"
						name="price"
						min={minPrice}
						max={maxPrice}
						id="price"
						value={price}
						onChange={handleChange}
						className="form-control"
					/>
				</div>
				{/*end room price */}
				{/* surface */}
				<div className="form-group">
					<label htmlFor="size">surface</label>
					<div className="size-inputs">
						<input
							type="number"
							name="minSize"
							id="size"
							value={minSize}
							onChange={handleChange}
							className="size-input"
						/>
						<input
							type="number"
							name="maxSize"
							id="size"
							value={maxSize}
							onChange={handleChange}
							className="size-input"
						/>
					</div>
				</div>
				{/* fin surface */}
				{/* extras */}
				<div className="form-group">
					<div className="single-extra">
						<input
							type="checkbox"
							name="pets"
							id="pets"
							checked={pets}
							onChange={handleChange}
						/>
						<label htmlFor="pets">animal</label>
					</div>
					<div className="single-extra">
						<input
							type="checkbox"
							name="breakfast"
							id="breakfast"
							checked={breakfast}
							onChange={handleChange}
						/>
						<label htmlFor="breakfast">petit-déjeuné</label>
					</div>
				</div>
				{/* fin extras */}
			</form>
		</section>
	);
}
