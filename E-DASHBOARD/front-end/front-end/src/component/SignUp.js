import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = () => {
    console.warn(name, email, password);
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
