import React, { useState } from "react";
import MainBg from "../components/MainBg";
import Button from "../components/Button";
import "./VerifyCode.css";

const ConfirmCode = (index, e) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const handleCodeChange = (index, value) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newCode = [...code];
      newCode[index] = value;

      setCode(newCode);

      if (value && index < 5) {
        document.getElementById(`code-input-${index + 1}`).focus();
      } else {
        e.target.value = "";
        e.preventDefault(); // Prevent the default behavior
      }
    }
  };

  return (
    <div className="main-verify-code">
      <div className="verify-code-container verify-code-page">
        <div className="verify-code-left">
          <MainBg />
        </div>

        <div className="verify-code-right">
          <h1>Reset your Password</h1>
          <p>Please input the six digit code that was sent to your email</p>
          <div className="code-inputs">
            {[...Array(6)].map((digit, index) => (
              <input
                value={digit}
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength="1"
                className="code-input"
                placeholder=""
                onChange={(e) => handleCodeChange(index, e.target.value)}
              />
            ))}
          </div>
          <Button type="regular" className="reset-password">
            Reset Password
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmCode;
