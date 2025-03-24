import React, { useState } from "react";
import avatar from "../assets/avatar.png";
import cameraIcon from "../assets/camera.png";
import "./UserInfo.css";
import Button from "./Button";

const UserForm = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "9120000000",
    status: "",
    hobby1: "",
    hobby2: "",
    hobby3: "",
    location: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form className="user-form">
      <div className="avatar-section">
        <div className="avatar-container">
          <img src={avatar} alt="User Avatar" className="avatar" />
          <button className="camera-btn">
            {" "}
            <img src={cameraIcon} alt="Camera Icon" />
          </button>
        </div>
        <div className="avatar-actions">
          <Button className="upload-btn">UPLOAD NEW</Button>
          <Button className="delete-btn">DELETE AVATAR</Button>
        </div>
      </div>
      <div className="form-row">
        <div className="user-info-form">
          <div className="form-group ">
            <label>FIRST NAME</label>
            <input
              type="text"
              name="firstName"
              value={userData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="user-info-fn"
            />
          </div>
          <div className="form-group">
            <label>LAST NAME</label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="user-info-fn"
            />
          </div>
        </div>
        <div className="form-group">
          <label>EMAIL</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Enter Value"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>PHONE NUMBER</label>
          <div className="phone-input">
            <select
              name="countryCode"
              defaultValue="+234"
              onChange={handleInputChange}
            >
              <option value="+234">+234</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              type="text"
              name="phoneNumber"
              value={userData.phoneNumber}
              onChange={handleInputChange}
              placeholder="9120000000"
            />
          </div>
        </div>
        <div className="form-group">
          <label>STATUS</label>
          <select
            name="status"
            value={userData.status}
            onChange={handleInputChange}
          >
            <option value="">Enter Value</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>HOBBY 1</label>
          <input
            type="text"
            name="hobby1"
            value={userData.hobby1}
            onChange={handleInputChange}
            placeholder="Enter Value"
          />
        </div>
        <div className="form-group">
          <label>HOBBY 2</label>
          <input
            type="text"
            name="hobby2"
            value={userData.hobby2}
            onChange={handleInputChange}
            placeholder="Enter Value"
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>HOBBY 3</label>
          <input
            type="text"
            name="hobby3"
            value={userData.hobby3}
            onChange={handleInputChange}
            placeholder="Enter Value"
          />
        </div>
        <div className="form-group">
          <label>LOCATION</label>
          <input
            type="text"
            name="location"
            value={userData.location}
            onChange={handleInputChange}
            placeholder="Enter Value"
          />
        </div>
      </div>

      <Button type="submit" className="edit-btn">
        EDIT
      </Button>
    </form>
  );
};

export default UserForm;
