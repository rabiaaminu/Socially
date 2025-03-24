import React, { useState, useEffect } from "react";
import UserInfo from "../components/UserInfo";
import CreatedEvents from "../components/CreatedEvents";
import RSVPeEvents from "../components/RSVPeEvents";
import SavedEvents from "../components/SavedEvents";
import "./UserDashboard.css";
import Header from "../components/Header";
import userI from "../assets/user-info-i.png";
import circleCheck from "../assets/circle-check.png";
import saved from "../assets/saved-i.png";
import userRsvp from "../assets/rsvp-i.png";
import logOutBtn from "../assets/logout.png";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import LoaderFullPage from "../components/LoaderFullPage";

const UserDashboard = () => {
  const [activeComponent, setActiveComponent] = useState("userInfo");
  const [isLoading, setIsLoading] = useState(true);
  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // simulate a 2-second loading delay
    return () => clearTimeout(timer);
  }, []);

  const renderComponent = () => {
    switch (activeComponent) {
      case "userInfo":
        return <UserInfo />;
      case "createdEvents":
        return <CreatedEvents />;
      case "rsvpEvents":
        return <RSVPeEvents />;
      case "savedEvents":
        return <SavedEvents />;
      default:
        return <UserInfo />;
    }
  };

  if (isLoading) {
    return (
      <div>
        <Header className="user-head" />
        <div className="user-dashboard">
          <div className="ud-container">
            <LoaderFullPage />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header className="user-head" />
      <div className="user-dashboard">
        <div className="ud-container">
          <h1>Account Settings</h1>
        </div>
        <div className=" user-dashboard-section">
          <div className=" user-dashboard-container">
            <div className="user-section">
              <div className="sidebar">
                <ul className="sidebar-nav">
                  <li>
                    <button
                      className={activeComponent === "userInfo" ? "active" : ""}
                      onClick={() => handleNavClick("userInfo")}
                    >
                      <span className="icon">
                        <img src={userI} alt="User Information" />
                      </span>
                      USER INFORMATION
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        activeComponent === "createdEvents" ? "active" : ""
                      }
                      onClick={() => handleNavClick("createdEvents")}
                    >
                      <span className="icon">
                        {" "}
                        <img src={circleCheck} alt="check" />
                      </span>
                      CREATED EVENTS
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        activeComponent === "rsvpEvents" ? "active" : ""
                      }
                      onClick={() => handleNavClick("rsvpEvents")}
                    >
                      <span className="icon">
                        {" "}
                        <img src={userRsvp} alt="User RSVP " />
                      </span>
                      RSVP’d EVENTS
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        activeComponent === "savedEvents" ? "active" : ""
                      }
                      onClick={() => handleNavClick("savedEvents")}
                    >
                      <span className="icon">
                        {" "}
                        <img src={saved} alt="saved " />
                      </span>
                      SAVED EVENTS
                    </button>
                  </li>
                </ul>
                <button className="logout-btn">
                  <span className="icon">
                    {" "}
                    <img src={logOutBtn} alt="log out button" />
                  </span>{" "}
                  LOGOUT
                </button>
              </div>
              <div className="main-content">{renderComponent()}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserDashboard;

// import React, { useState } from "react";
// import UserInfo from "../components/UserInfo";
// import CreatedEvents from "../components/CreatedEvents";
// import RSVPeEvents from "../components/RSVPeEvents";
// import SavedEvents from "../components/SavedEvents";
// import "./UserDashboard.css";

// import Header from "../components/Header";
// import userI from "../assets/user-info-i.png";
// import circleCheck from "../assets/circle-check.png";
// import saved from "../assets/saved-i.png";
// import userRsvp from "../assets/rsvp-i.png";
// import logOutBtn from "../assets/logout.png";
// import Footer from "../components/Footer";

// const UserDashboard = () => {
//   const [activeComponent, setActiveComponent] = useState("userInfo");

//   const handleNavClick = (component) => {
//     setActiveComponent(component);
//   };

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case "userInfo":
//         return <UserInfo />;
//       case "createdEvents":
//         return <CreatedEvents />;
//       case "rsvpEvents":
//         return <RSVPeEvents />;
//       case "savedEvents":
//         return <SavedEvents />;
//       default:
//         return <UserInfo />;
//     }
//   };

//   return (
//     <div>
//       <Header className="user-head" />

//       <div className="user-dashboard">
//         <div className="ud-container">
//           <h1>Account Settings</h1>
//         </div>

//         <div className=" user-dashboard-section">
//           <div className=" user-dashboard-container">
//             <div className="user-section">
//               <div className="sidebar">
//                 <ul className="sidebar-nav">
//                   <li>
//                     <button
//                       className={activeComponent === "userInfo" ? "active" : ""}
//                       onClick={() => handleNavClick("userInfo")}
//                     >
//                       <span className="icon">
//                         <img src={userI} alt="User Information" />
//                       </span>
//                       USER INFORMATION
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className={
//                         activeComponent === "createdEvents" ? "active" : ""
//                       }
//                       onClick={() => handleNavClick("createdEvents")}
//                     >
//                       <span className="icon">
//                         {" "}
//                         <img src={circleCheck} alt="check" />
//                       </span>
//                       CREATED EVENTS
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className={
//                         activeComponent === "rsvpEvents" ? "active" : ""
//                       }
//                       onClick={() => handleNavClick("rsvpEvents")}
//                     >
//                       <span className="icon">
//                         {" "}
//                         <img src={userRsvp} alt="User RSVP " />
//                       </span>
//                       RSVP’d EVENTS
//                     </button>
//                   </li>
//                   <li>
//                     <button
//                       className={
//                         activeComponent === "savedEvents" ? "active" : ""
//                       }
//                       onClick={() => handleNavClick("savedEvents")}
//                     >
//                       <span className="icon">
//                         {" "}
//                         <img src={saved} alt="saved " />
//                       </span>
//                       SAVED EVENTS
//                     </button>
//                   </li>
//                 </ul>
//                 <button className="logout-btn">
//                   <span className="icon">
//                     {" "}
//                     <img src={logOutBtn} alt="log out button" />
//                   </span>{" "}
//                   LOGOUT
//                 </button>
//               </div>
//               <div className="main-content">{renderComponent()}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };
// export default UserDashboard;
