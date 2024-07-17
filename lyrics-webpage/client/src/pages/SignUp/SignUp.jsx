import React, { useState } from "react";
import "../Login/Login";
import "./signUp.css";
import { signUpRoutes } from "../../utils/APIRoutes";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import icons from react-icons library

const SignUp = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      toast.error("No internet connection. Please check your network.");
      return;
    }
    if (!userData.fullname || !userData.email || !userData.password) {
      toast.error("Please fill all the input fields");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(signUpRoutes, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();

      if (data.status === true) {
        toast.success(data.msg);
        navigate("/login");
      } else {
        toast.error(
          data.errorMessage || "Failed to sign up. Please try again."
        );
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred while signing up. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="container section login-holder row-rev">
        <div className="login-form ">
          <h2 className="m-b-25">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <label>Full name</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChange}
              id="fullname"
              value={userData.fullname}
            />
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              id="email"
              value={userData.email}
            />
            <label>Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                onChange={handleChange}
                id="password"
                value={userData.password}
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <span>
              Already have an account? <Link to="/login">Login</Link>
            </span>

            <button className="song-button" type="submit" disabled={loading}>
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
        <div className="login-form bg-logo">
          {/* Additional content or form can be added here */}
        </div>
      </div>
    </>
  );
};

export default SignUp;
