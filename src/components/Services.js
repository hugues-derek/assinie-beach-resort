import React, { Component } from 'react';
import Title from "./Title";
import {FaCocktail, FaHiking, FaShuttleVan,FaBeer} from "react-icons/fa";


export default class Services extends Component {
state={
    services: [
        {
            icon:<FaCocktail/>,
            title:"cocktails gratuits",
            info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, soluta!"
        },
        {
            icon:<FaHiking/>,
            title:"Randonnées sans fin ",
            info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, soluta!"
        },
        {
            icon:<FaShuttleVan/>,
            title:"navette gratuite",
            info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, soluta!"
        },
        {
            icon:<FaBeer/>,
            title:" la bière la plus forte",
            info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, soluta!"
        },
    ]
}
    render() {
        return (
            <section className="services" >
             <Title title="services"/>
             <div className="services-center">
                 {this.state.services.map((item, index) => {
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                    </article>
                 })}
             </div>
            </section>
        )
    }
}
