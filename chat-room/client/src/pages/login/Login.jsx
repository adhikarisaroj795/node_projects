import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { loginRoute } from "../../utils/APIRoutes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { email, password } = userData;
      const response = await axios.post(
        loginRoute,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);
      if (data.success === true) {
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
      <div>
        <div className="container">
          <div className="registration-form">
            <div className="registration-page">
              <h2>Login</h2>
              <form onSubmit={handleSubmit}>
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
                    onChange={handleChange}
                    value={userData.password}
                  />
                </div>

                <div className="already-account">
                  <span>
                    Don't have an account?{" "}
                    <NavLink to="/register">Register</NavLink> here
                  </span>
                </div>

                <div className="reg-btn">
                  <button type="submit">Login</button>
                </div>
              </form>
            </div>
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

export default Login;
