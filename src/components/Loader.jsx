import "./Loader.css";
import Logo from "../assets/logo.png";
import React from "react";

function Loader() {
  return (
    <div className="loader-container">
      <img src={Logo} alt="Logo" className="loader" />
    </div>
  );
}

export default Loader;
