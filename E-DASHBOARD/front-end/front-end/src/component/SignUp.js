import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const collectData = async () => {
    console.warn(name, email, password);
    let result = await fetch("http://localhost:3000/register", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("user", JSON.stringify(result));
    if (result) {
      navigate("/");
    }
  };
  return (
    <div className="register">
      <h1>Register</h1>
      <input
        type="text"
        placeholder="Enter Name"
        className="inputBox"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Enter email"
        className="inputBox"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter password"
        className="inputBox"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button type="button" className="appButton" onClick={collectData}>
        Sign up
      </button>
    </div>
  );
};

export default SignUp;
