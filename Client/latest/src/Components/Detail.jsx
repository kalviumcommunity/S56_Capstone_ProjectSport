import React from "react";
import logo from "../images/MITlogo.png"; // Import the logo image

function Detail(){
    return(
        <div className="Main">
         <nav>
            <div className="logo">
               <a href="#"><img src={logo} alt="MITlogo"/></a>
            </div>
               <ul className="nav-links">
                 <li><a href="#">Home</a></li>
                 <li><a href="#">Detail</a></li> 
                 <li><a href="#">Contact</a></li>
               </ul>
         </nav>
       </div> 
    )
}
export default Detail;
