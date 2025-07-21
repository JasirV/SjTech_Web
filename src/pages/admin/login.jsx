import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import api from "../../api/axiosInstance";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";
const sitekey = import.meta.env.VITE_SITE_KEY;
// Utility function to sanitize input
const sanitizeInput = (input) => {
  return input.replace(/[^a-zA-Z0-9@._-]/g, ""); // Allow only safe characters
};

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
      setErrorMessage("");
    } else {
      setCaptchaVerified(false);
    }
  };

  const handleFormSubmit = async (e) => {
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

    try {
      setLoading(true);
      const userCredential = await signInWithEmailAndPassword(
        auth,
        sanitizedUsername,
        sanitizedPassword
      );
      setLoading(false);
      // Get the token
      const token = await userCredential.user.getIdToken();

      // Optional: Save the token
      localStorage.setItem("token", token);

      toast.success("Login successfully");
      navigate("/home");
    } catch (error) {
      setLoading(false);
      console.error("Login error:", error);

      // Firebase-specific error messages
      let errorMessage = "Login failed. Please try again.";
      if (error.code === "auth/user-not-found") {
        errorMessage = "No user found with this email.";
      } else if (error.code === "auth/wrong-password") {
        errorMessage = "Incorrect password.";
      } else if (error.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      }

      toast.error(errorMessage);
    }
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
              type="email"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your Email"
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
              sitekey={sitekey} // Replace with your Google reCAPTCHA site key
              onChange={handleCaptchaChange}
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button
            type="submit"
            className="btn-login"
            disabled={!captchaVerified || loading}
          >
            {loading ? "Loading..." : "Continue"}
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
