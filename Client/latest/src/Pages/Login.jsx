import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../images/geound.jpg";
import football from "../images/OIP.jpeg";
import mitImage from "../images/Mit.jpeg";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username.trim() === '' && formData.password.trim() === '') {
      alert('Username and password are required');
    } else if (formData.username.trim() === '') {
      alert('Username is required');
    } else if (formData.password.trim() === '') {
      alert('Password is required');
    } else {
      console.log("Login submitted:", formData);
      document.cookie = `username=${formData.username};expires=${new Date(2030, 0, 1).toUTCString()}`;
      setFormData({
        username: "",
        password: ""
      });
      navigate("/home");  
    }
  };

  const handleLogout = () => {
    document.cookie = `username=;expires=${new Date(2000, 0, 1).toUTCString()}`;
  };

  return (
    <div>
      <div className="backgroundimg1">
        <img height={660} width={1260} src={photo} alt="Background" />
      </div>
      <div className="mit">
        <img className="mitimg" src={mitImage} alt="MIT Logo" />
      </div>

      <Link to="/signup">
        <input type="submit" className="btnn" value="Signup" />
      </Link>
      
      <div className="login">
        <h1 className="text0">Login</h1>
      </div>
      <div className="login-container">
        <img className="football-img" src={football} alt="Football" />
        <div className="login-box">
          <h2 className="center-text">"Step onto the field of champions with every login."</h2>
          <form onSubmit={handleSubmit}>
            <div className="textbox">
              <input 
                type="text" 
                placeholder="Username" 
                name="username" 
                value={formData.username} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <div className="textbox">
              <input 
                type="password" 
                placeholder="Password" 
                name="password" 
                value={formData.password} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            <button type="submit" className="btn">Login</button>
          </form>
        </div>
      </div>
      <div className="logout-container" id="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Login;
