import React, { useState } from "react";
import "./Register.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { registerRoute } from "../../utils/APIRoutes";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    e.preventDefault();

    let name = e.target.name;
    let value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { username, email, password, confirmpassword } = userData;
      const response = await axios.post(
        registerRoute,
        {
          username,
          email,
          password,
          confirmpassword,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);
      if (data.sucess === true) {
        setUserData({
          username: "",
          email: "",
          password: "",
          confirmpassword: "",
        });

        toast.success(data.message);
      }
    } catch (error) {
      if (error.response) {
        const errMessage = error.response.data.error.message;
        toast.error(errMessage);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="registration-form">
          <div className="registration-page">
            <h2>Registration</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={userData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                  value={userData.confirmpassword}
                  onChange={handleChange}
                />
              </div>
              <div className="already-account">
                <span>
                  Already have an account? <NavLink to="/login">Login</NavLink>{" "}
                  here
                </span>
              </div>
              <div className="reg-btn">
                <button type="submit">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"
      />
    </>
  );
};

export default Register;
