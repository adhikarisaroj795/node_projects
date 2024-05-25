import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { loginRoute } from "../utils/APIRoutes";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [redirect, setRedirect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = userData;
    if (!email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post(
        loginRoute,
        { email, password }, // Request body
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true, // Include credentials for cross-site requests
        }
      );
      const data = response.data;
      if (data.success === true) {
        toast.success(data.message);
        setRedirect(true);
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      if (error.response) {
        const errMessage =
          error.response.data.errorMessage || "An error occurred during login.";
        toast.error(errMessage);
      } else {
        toast.error("Network error. Please try again.");
      }
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <form className="login" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          value={userData.email}
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          value={userData.password}
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
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
      />
    </>
  );
};

export default Login;
