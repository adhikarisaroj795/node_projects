import React, { useState } from "react";
import { registerRoute } from "../utils/APIRoutes";

const Register = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { username, password } = userData;
      const response = await fetch(registerRoute, {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
          headers: {
            "Content-Type": "application/json",
          },
        }),
      });

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="register" onSubmit={handleSubmit}>
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Username"
        value={userData.username}
        onChange={handleChange}
        name="username"
      />
      <input
        type="password"
        placeholder="Password"
        value={userData.password}
        onChange={handleChange}
        name="password"
      />
      <button>Register</button>
    </form>
  );
};

export default Register;
