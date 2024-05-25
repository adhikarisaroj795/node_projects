import React, { useState } from "react";
import { registerRoute } from "../utils/APIRoutes";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear errors on field change
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password } = userData;

    // Validate inputs
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) newErrors.email = "Email is required";
    if (!password) newErrors.password = "Password is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await axios.post(
        registerRoute,
        {
          email,
          password,
          username,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (data.success === true) {
        toast.success(data.message);
      }
    } catch (error) {
      if (error.response) {
        const errMessage = error.response.data.errorMessage;
        toast.error(errMessage);
      }
    }
  };

  return (
    <>
      <form className="register" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <input
          type="text"
          placeholder="Username"
          value={userData.username}
          onChange={handleChange}
          name="username"
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          type="text"
          placeholder="Email"
          value={userData.email}
          onChange={handleChange}
          name="email"
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleChange}
          name="password"
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button>Register</button>
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
        bodyClassName="toastBody"
      />
    </>
  );
};

export default Register;
