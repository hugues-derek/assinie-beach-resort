import React from 'react'
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { Link } from 'react-router-dom';
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() { 
    return(
        <>
            <Hero>
                <Banner title="Chambres Présidentielles" subtitle="Chambres luxueuses à partir de 100.000 FCFA">
                    <Link to="/rooms" className="btn-primary">
                        Nos Chambres
                    </Link>
                </Banner>
            </Hero>
            <Services/>
            <FeaturedRooms/>
        </>
    ) 

}
