import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { login } from "../../utils/APIRoutes";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  signInStart,
  signInSuccess,
  signInFailure,
  resetError,
} from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const { loading, error: globalError } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!navigator.onLine) {
      return dispatch(
        signInFailure("No internet connection. Please check your network.")
      );
    }

    if (!userData.email || !userData.password) {
      return dispatch(signInFailure("All fields are required"));
    }

    try {
      dispatch(signInStart());
      const res = await fetch(login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      const data = await res.json();
      if (data.status === true) {
        dispatch(signInSuccess(data));
        navigate("/");
      } else {
        dispatch(signInFailure(data.errorMessage));
      }
    } catch (error) {
      console.error("Login error:", error);
      dispatch(signInFailure(error.message));
    }
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
      <div className="container section login-holder">
        <div className="login-form">
          <h2 className="m-b-25">Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              name="email"
              value={userData.email}
            />
            <label>Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
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
              Don't have an account? <Link to={"/signup"}>Sign Up</Link>
            </span>
            <button className="song-button" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
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

export default Login;
