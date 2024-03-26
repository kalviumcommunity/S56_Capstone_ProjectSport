import React from "react";
import photo from "../images/geound.jpg";
import football from "../images/OIP.jpeg";
import mit from "../images/Mit.jpeg"
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <div className="backgroundimg1">
        <img height={660} width={1260} src={photo} alt="backgroundimg" />
      </div>
      <div className="mit">
        <img className="mitimg" src={mit} alt="mit"/>
      </div>
      <div className="login">
        <h1 className="text0">Login</h1>
      </div>
      <div className="login-container">
        <img className="football-img" src={football} alt="football" />
        <div className="login-box">
          <h2 className="center-text">"Step onto the field of champions with every login."</h2>
          <form>
            <div className="textbox">
              <input type="text" placeholder="Username" name="username" required />
            </div>
            <div className="textbox">
              <input type="password" placeholder="Password" name="password" required />
            </div>
            <Link to="/Home">
            <input type="submit" className="btn" value="Login" />
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
