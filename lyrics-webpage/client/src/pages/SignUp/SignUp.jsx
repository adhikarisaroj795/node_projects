import React, { useState, useEffect } from "react";
import "../Login/Login";
import "./signUp.css";
import { signUpRoutes } from "../../utils/APIRoutes";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import icons from react-icons library
import { useDispatch, useSelector } from "react-redux";
import {
  signUpFailure,
  signUpStart,
  signUpSuccess,
  resetError,
  signInFailure,
} from "../../redux/user/userSlice";

const SignUp = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const { loading, error: globalError } = useSelector((state) => state.user);

  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      return dispatch(
        signUpFailure("No internet connection. Please check your network.")
      );
    }
    if (!userData.fullname || !userData.email || !userData.password) {
      return dispatch(signUpFailure("All fields are required"));
    }
    try {
      dispatch(signUpStart());
      const res = await fetch(signUpRoutes, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();

      if (data.status === true) {
        dispatch(signUpSuccess(data.msg));
        navigate("/login");
      } else {
        toast.error(
          data.errorMessage || "Failed to sign up. Please try again."
        );
        dispatch(signUpFailure(data.errorMessage));
      }
    } catch (error) {
      console.error("Signup error:", error);
      dispatch(signInFailure(error.message));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    if (globalError) {
      toast.error(globalError);
      // Reset the global error state after showing the toast notification
      dispatch(resetError());
    }
  }, [globalError, dispatch]);

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
