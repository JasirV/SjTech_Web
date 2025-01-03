import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

// Utility function to sanitize input
const sanitizeInput = (input) => {
  return input.replace(/[^a-zA-Z0-9@._-]/g, ""); // Allow only safe characters
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
      setErrorMessage("");
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Sanitize inputs
    const sanitizedUsername = sanitizeInput(username);
    const sanitizedPassword = sanitizeInput(password);

    if (!sanitizedUsername || !sanitizedPassword) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!captchaVerified) {
      setErrorMessage("Please complete the CAPTCHA.");
      return;
    }

    setErrorMessage("");
    console.log("Sanitized Data Submitted:", { sanitizedUsername, sanitizedPassword });
    alert("Form submitted securely!");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <h1>SJ Tech</h1>
          <p>Trading and Contracting Team - Qatar</p>
        </div>
        <form className="login-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="form-group">
            <ReCAPTCHA
              sitekey="6LcISpAqAAAAAAMzuztMu7oWkum46eURNRQ_Fgae" // Replace with your Google reCAPTCHA site key
              onChange={handleCaptchaChange}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="btn-login" disabled={!captchaVerified}>
            Continue
          </button>
        </form>
        <div className="login-footer">
          <p>&copy; 2024 SJ Tech. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
