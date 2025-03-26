// src/components/UserProfile.jsx
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Userinfo.css";

// Placeholder for the avatar image (you can replace this with your actual image)
import avatar from "../assets/avatar.png";
import Header from "../components/Header";
import userI from "../assets/user-info-i.png";

const UserProfile = () => {
  const navigate = useNavigate();
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
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear auth token)
    navigate("/login");
  };

  const handleUploadAvatar = () => {
    // Add logic for uploading a new avatar (e.g., open file picker)
    console.log("Upload new avatar");
  };

  const handleDeleteAvatar = () => {
    // Add logic for deleting the avatar
    console.log("Delete avatar");
  };

  return (
    <div className="user-info-page">
      <Header />
      <div className="user-section">
        <div className="user-info-container">
          <h1>Account Settings</h1>

          <div className="user-profile-section">
            <div className="sidebar">
              <ul className="sidebar-nav">
                <li>
                  <NavLink
                    to="/user-info"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <span className="icon">
                      <img src={userI} alt="User Information" />
                    </span>
                    USER INFORMATION
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/created-events">
                    <span className="icon">🗓️</span> CREATED EVENTS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/rsvp-events">
                    <span className="icon">📧</span> RSVP’d EVENTS
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/saved-events">
                    <span className="icon">📌</span> SAVED EVENTS
                  </NavLink>
                </li>
              </ul>
              <button className="logout-btn" onClick={handleLogout}>
                <span className="icon">↩</span> LOGOUT
              </button>
            </div>
            {/* Main Content */}
            <div className="main-content">
              <div className="avatar-section">
                <div className="avatar-container">
                  <img src={avatar} alt="User Avatar" className="avatar" />
                  <button className="camera-btn">📷</button>
                </div>
                <div className="avatar-actions">
                  <button className="upload-btn" onClick={handleUploadAvatar}>
                    UPLOAD NEW
                  </button>
                  <button className="delete-btn" onClick={handleDeleteAvatar}>
                    DELETE AVATAR
                  </button>
                </div>
              </div>

              <form className="user-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>FIRST NAME</label>
                    <input
                      type="text"
                      name="firstName"
                      value={userData.firstName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <label>LAST NAME</label>
                    <input
                      type="text"
                      name="lastName"
                      value={userData.lastName}
                      onChange={handleInputChange}
                      placeholder="First Name"
                    />
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
                      <select name="countryCode" defaultValue="+234">
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

                <button type="submit" className="edit-btn">
                  EDIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

// import React from "react";
// import "./UserInfo.css";
// import userInfoIcon from "../assets/user-info-i.png";
// import createdEventsIcon from "../assets/circle-check.png";
// import rsvpEventIcon from "../assets/rsvp-i.png";
// import savedEventsIcon from "../assets/saved-i.png";
// import avatar from "../assets/avatar.png";
// import camera from "../assets/camera.png";
// import logoutImg from "../assets/logout.png";
// import Header from "../components/Header";

// export default function UserInfo() {
//   return (
//     <div className="userinfo-page">
//       {/* Header */}
//       <Header />
//       {/* Middle Section */}
//       <div className="middle-section">
//         {/* Title */}
//         <p className="title">Account Settings</p>
//         <div className="userinfo-section">
//           {/* Side Menu */}
//           <div className="sideMenu">
//             <div className="userInfo-tab">
//               <div className="blueLine"></div>
//               <img className="userInfoIcon" src={userInfoIcon} alt="" />
//               <h1>User Information</h1>
//             </div>
//             <div className="createdEvents-tab">
//               <img
//                 className="createdEventsIcon"
//                 src={createdEventsIcon}
//                 alt=""
//               />
//               <h1>Created Events</h1>
//             </div>
//             <div className="rsvp-tab">
//               <img className="rsvpEventIcon" src={rsvpEventIcon} alt="" />
//               <h1>RSVP'd Events</h1>
//             </div>
//             <div className="savedEvents-tab">
//               <img className="savedEventsIcon" src={savedEventsIcon} alt="" />
//               <h1>Saved Events</h1>
//             </div>
//             {/* Log out */}
//             <div className="logoutContainer">
//               <img className="logoutImg" src={logoutImg} alt="" />
//               <h1>Logout</h1>
//             </div>
//           </div>
//           {/* User Info Section */}
//           <div className="user-info">
//             {/* upper section */}
//             <div className="firstSection">
//               <div className="avatarContainer">
//                 <img className="avatar" src={avatar} alt="" />
//                 <div className="cameraContainer">
//                   <img className="camera" src={camera} alt="" />
//                 </div>
//               </div>
//               <div className="btnContainer">
//                 <button className="uploadBtn">Upload new</button>
//                 <button className="deleteAvatarBtn">Delete Avatar</button>
//               </div>
//             </div>
//             {/* User Input Section */}
//             <div className="userInputContainer">
//               <div className="firstInputGrp">
//                 <div className="userNames">
//                   <div className="inputGrp">
//                     <h1>First Name</h1>
//                     <input type="text" placeholder="First Name" />
//                   </div>
//                   <div className="inputGrp">
//                     <h1>Last Name</h1>
//                     <input type="text" placeholder="Last Name" />
//                   </div>
//                 </div>
//                 <div className="inputGrp">
//                   <h1>Phone Number</h1>
//                   <input type="text" placeholder="9120000000" />
//                 </div>
//                 <div className="inputGrp">
//                   <h1>Hobby 1</h1>
//                   <input type="text" placeholder="Enter Value" />
//                 </div>
//                 <div className="inputGrp">
//                   <h1>Hobby 2</h1>
//                   <input type="text" placeholder="Enter Value" />
//                 </div>
//               </div>
//               <div className="secondInputGrp">
//                 <div className="inputGrp2">
//                   <h1>Email</h1>
//                   <input type="text" placeholder="Enter Value" />
//                 </div>
//                 <div className="inputGrp2">
//                   <h1>Status</h1>
//                   <input type="text" placeholder="Enter Value" />
//                 </div>
//                 <div className="inputGrp2">
//                   <h1>Hobby 2</h1>
//                   <input type="text" placeholder="Enter Value" />
//                 </div>
//                 <div className="inputGrp2">
//                   <h1>Location</h1>
//                   <input type="text" placeholder="Enter Value" />
//                 </div>
//               </div>
//             </div>
//             {/* Edit Button */}
//             <button className="editBtn">Edit</button>
//           </div>
//         </div>
//       </div>
//       {/* Footer */}
//       <footer></footer>
//     </div>
//   );
// }
