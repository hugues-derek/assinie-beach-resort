import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../components/styledHero";

export default class SingleRooms extends Component {
	constructor(props) {
		super(props);

		this.state = {
			slug: this.props.match.params.Slug,
			defaultBcg,
		};
	}
	static contextType = RoomContext;
	render() {
		const { getRoom } = this.context;
		const room = getRoom(this.state.slug);
		if (!room) {
			return (
				<div className="error">
					<h3>chambre introuvable...</h3>
					<Link to="/rooms" className="btn-primary">
						retour
					</Link>
				</div>
			);
		}
		const {
			name,
			description,
			capacity,
			size,
			price,
			extras,
			breakfast,
			pets,
			images,
		} = room;
		const [mainImg, ...defaultImg] = images;
		return (
			<>
				<StyledHero img={mainImg || this.state.defaultBcg}>
					<Banner title={`${name}`}>
						<Link to="/rooms" className="btn-primary">
							retour
						</Link>
					</Banner>
				</StyledHero>
				<section className="single-room">
					<div className="single-room-images">
						{defaultImg.map((item, index) => {
							return <img key={index} src={item} alt={`${name}`} />;
						})}
					</div>
					<div className="single-room-info">
						<article className="desc">
							<h3>détails</h3>
							<p>{description}</p>
						</article>
						<article className="info">
							<h3>info</h3>
							<h6>prix : {price}000 FCFA</h6>
							<h6>taille : {size}m²</h6>
							<h6>
								capacité maximale :{" "}
								{capacity > 1
									? `${capacity} personnes`
									: `${capacity} personne`}
							</h6>
							<h6>
								animaux de compagnie : {pets ? "autorisé." : "non autorisé."}
							</h6>
							<h6>{breakfast && "petit-déjeuné inclu"}</h6>
						</article>
					</div>
				</section>
				<section className="room-extras">
					<h6>extras</h6>
					<ul className="extras">
						{extras.map((item, index) => {
							return <li key={index}>-{item}</li>;
						})}
					</ul>
				</section>
			</>
		);
	}
}
