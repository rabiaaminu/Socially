import React from "react";
import MainBg from "../components/MainBg";
import Button from "../components/Button";
import "./CreateAccount.css";
import googleIcon from "../assets/google-icon.png";
import appleIcon from "../assets/apple-icon.png";

const CreateAccount = () => {
  return (
    <div className="main-create-accont">
      <div className="create-account-container .create-account-page">
        {/* Left Part: Reusable MainBg Component */}
        <div className="create-account-left">
          <MainBg className="main-bg" />
        </div>

        {/* Right Part: Account Creation Form */}
        <div className="create-account-right">
          <h1>Create Your Account</h1>
          <p>Fill in your details to get started</p>
          <div className="social-login-buttons">
            <button className="social-btn google-btn">
              <img src={googleIcon} alt="Google Icon" />
              Continue with Google
            </button>
            <button className="social-btn apple-btn">
              <img src={appleIcon} alt="Apple Icon" />
              Continue with Apple
            </button>
          </div>
          <div className="divider">
            <span>Or</span>
          </div>
          <form className="create-account-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="User Name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="useraddress@gmail.com"
                required
              />
            </div>
            <div className="password-section">
              <div className="form-group password-group">
                <label htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input
                    type="password"
                    id="password"
                    placeholder="Minimum of 8 Characters"
                    required
                  />
                  <i className="fas fa-eye-slash icon" aria-hidden="true"></i>
                </div>
              </div>
              <div className="form-group password-group">
                <label htmlFor="repeat-password">Repeat Password</label>
                <div className="password-input-container">
                  <input
                    type="password"
                    id="repeat-password"
                    placeholder="Minimum of 8 Characters"
                    required
                  />
                  <i className="fas fa-eye-slash icon" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <div className="terms-checkbox">
              <input type="checkbox" id="terms" required />
              <label htmlFor="terms">I agree to the Terms and Conditions</label>
            </div>
            <Button type="regular" className="create-account-button">
              Sign Up
            </Button>
          </form>
          <p className="login-link">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
