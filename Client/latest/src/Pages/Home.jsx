import React from "react";
import "./Home.css";
import image from "../images/skate.webp";
import Nav from "../Components/Nav";

function Home() {
    return (
        <div>
            <Nav />
            <div className="Main">
                <div className="search">
                    <input type="search" id="search-input" placeholder="search" />
                </div>
                <div className="background">
                    <img height={500} src={image} alt="background" />
                </div>

                <div className="text1">
                    <h2>"Fuel your passion for sports and ignite your journey to greatness with ALLMITSPORT - where every athlete finds their winning edge!"</h2>
                </div>

                <div className="button">
                    <button className="explore-button">Explore</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
