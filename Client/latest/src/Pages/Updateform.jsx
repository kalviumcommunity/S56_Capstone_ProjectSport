// UpdateForm.js
import React, { useState } from "react";
import "./UpdateForm.css";
import pic from "../images/vector.jpg";

function UpdateForm() {
  const [name, setName] = useState("");
  const [batch, setBatch] = useState("");
  const [sport, setSport] = useState("");
  const [timing, setTiming] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBatchChange = (e) => {
    setBatch(e.target.value);
  };

  const handleSportChange = (e) => {
    setSport(e.target.value);
  };

  const handleTimingChange = (e) => {
    setTiming(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === "" ||
      batch.trim() === "" ||
      sport.trim() === "" ||
      timing.trim() === ""
    ) {
      alert("All fields are required");
    } else {
      console.log("Update submitted:", { name, batch, sport, timing });
      alert("Update successfully done!");
      // You can add your update logic here, like sending the data to the server
    }
  };

  return (
    <div className="updatemain">
      <div className="update-form-background">
        <img
          src={pic}
          width={1240}
          height={670}
          alt="background image for update form"
        />
      </div>
      <div className="update-form-container">
        <h1 className="update-form-header">Update Form</h1>
        <form onSubmit={handleSubmit} className="update-form">
          <div className="form-group">
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              required
              className="update-input"
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={batch}
              onChange={handleBatchChange}
              required
              className="update-input"
              placeholder="Enter your batch"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={sport}
              onChange={handleSportChange}
              required
              className="update-input"
              placeholder="Enter your sport"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              value={timing}
              onChange={handleTimingChange}
              required
              className="update-input"
              placeholder="Enter your timing"
            />
          </div>
          <button type="submit" className="update-button">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateForm;
