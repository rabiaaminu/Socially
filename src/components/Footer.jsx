import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import Button from "./Button";
import logo from "../assets/logo.png";
import copyRight from "../assets/copyright.png";
import lknd from "../assets/linkedin.png";
import fb from "../assets/facebook.png";
import ig from "../assets/instagram.png";
import youTube from "../assets/youtube.png";
import line from "../assets/line.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-main-section">
          <h1>CONNECT WITH PEOPLE</h1>
          <h2>Request More Information</h2>
          <p>
            Socially is a website that helps people make connection and attend
            events with people near you
          </p>
          <Button className="footer-btn">Contact Us</Button>

          <span className="footer-copyright ">
            {" "}
            <img src={copyRight} alt="check" />
            2025 Socially
          </span>
        </div>
        <div className="footer-last">
          <img src={line} alt="Logo" className="ft-line" />

          <div className="footer-icons">
            <div className="footer-logo">
              <NavLink to="/">
                <img src={logo} alt="Logo" className="logo" />
              </NavLink>
            </div>
            <div className="footer-navlinks">
              <NavLink to="/app">Team</NavLink>
              <NavLink>Discover events </NavLink>
              <NavLink>About</NavLink>
            </div>
            <div className="footer-si">
              <img src={lknd} alt="Logo" className="ft-icon" />
              <img src={fb} alt="Logo" className="ft-icon" />
              <img src={ig} alt="Logo" className="ft-icon" />
              <img src={youTube} alt="Logo" className="ft-icon" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
