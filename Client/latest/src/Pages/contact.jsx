import React from "react";
import Nav from "../Components/Nav";
import "./contact.css"
import badminton from "../images/badminton.avif";
import basketball from "../images/basketball.jpeg";
import football from "../images/football.jpeg";
import cricket from "../images/cricket.jpeg";
import chess from "../images/chess.jpeg";
import swim from "../images/swim.jpeg";
import gym from "../images/gym.jpeg";
import volly from "../images/volly.jpeg";
import tennis from "../images/tennis.jpg";
import rowing from "../images/rowing.jpeg";
import kho from "../images/kho.jpeg";
import kabaddi from "../images/kabaddi.jpeg";
import arc from "../images/arc.jpeg";
import boxing from "../images/boxing.jpg";

function Contact(){
    return(
        <div>
            <Nav/>
            <div className="main-container">
                <div>
                    <h1 className="main-heading">Contact Us...</h1>
                </div>
                <div className="contact-card">
                    <div className="card">
                        <img className="contact-img" src={badminton} alt="badminton" />
                        <h2 className="contact-title">Badminton</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                        <img className="contact-img" src={football} alt="football" />
                        <h2 className="contact-title">Football</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                        <img className="contact-img" src={basketball} alt="basketball" />
                        <h2 className="contact-title">BasketBall</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                        <img className="contact-img" src={cricket} alt="cricket" />
                        <h2 className="contact-title">Cricket</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                        <img className="contact-img" src={swim} alt="swim" />
                        <h2 className="contact-title">Swimming</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                        <img className="contact-img" src={gym} alt="gym" />
                        <h2 className="contact-title">Gym</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                        <img className="contact-img" src={kho} alt="kho-kho" />
                        <h2 className="contact-title">Kho-kho</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                        <img className="contact-img" src={kabaddi} alt="kabaddi" />
                        <h2 className="contact-title">Kabaddi</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                        <img className="contact-img" src={tennis} alt="tennis" />
                        <h2 className="contact-title">Tennis</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                        <img className="contact-img" src={volly} alt="volly" />
                        <h2 className="contact-title">VolleyBall</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                    <img className="contact-img" src={chess} alt="chess" />
                        <h2 className="contact-title">Chess</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                    <img className="contact-img" src={rowing} alt="rowing" />
                        <h2 className="contact-title">Rowing</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                    <img className="contact-img" src={boxing} alt="boxing" />
                        <h2 className="contact-title">Boxing</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                    <div className="card">
                    <img className="contact-img" src={arc} alt="archery" />
                        <h2 className="contact-title">Archery</h2>
                        <h3 className="contact-name">Name : </h3>
                        <h3 className="contact-no">Phone : </h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Contact