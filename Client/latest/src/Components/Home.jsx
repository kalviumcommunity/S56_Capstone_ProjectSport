import React from "react";
import "./Home.css"

function Home(){
    return(
        <div className="Main">
         <nav>
            <div className="logo">
               <a href="#"><img src="MITlogo.png" alt="MITlogo"/></a>
            </div>
               <ul className="nav-links">
                 <li><a href="#">Home</a></li>
                 <li><a href="#">Details</a></li>
                 <li><a href="#">Contact</a></li>
               </ul>
         </nav>
         <div className="search">
            <input type="search" id="search-input" placeholder="search"/>
         </div>
         <div className="background">
            <img height={500} src="skate.webp" alt="background"/>
         </div>

         <div className="text1">
            <h2>"Fuel your passion for sports and ignite your journey to greatness with ALLMITSPORT - where every athlete finds their winning edge!"</h2>
         </div>

         <div className="button">
           <button className="explore-button">Explore</button>
         </div>



        </div>
    )
}
export default Home;