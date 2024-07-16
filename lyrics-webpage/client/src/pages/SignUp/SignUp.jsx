import React, { useState } from "react";
import "../Login/Login";
import "./signUp.css";
import { signUpRoutes } from "../../utils/APIRoutes";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const [errMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.id]: e.target.value.trim(),
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userData.fullname || !userData.email || !userData.password) {
      return setErrorMessage("Please fill all the input");
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res = await fetch(signUpRoutes, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      if (data.status === true) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
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
            />
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={handleChange}
              id="email"
            />
            <label>Password</label>
            <input
              type="text"
              placeholder="Enter Your Password"
              onChange={handleChange}
              id="password"
            />
            <span>
              already have an account <Link to="/login">login?</Link>
            </span>
            <button className="song-button" type="submit">
              Login
            </button>
          </form>
        </div>
        <div className="login-form bg-logo">
          {/* <form>
          <label>Email</label>
          <input type="text" placeholder="Enter Your Email" />
          <label>Password</label>
          <input type="text" placeholder="Enter Your Password" />
          <button className="song-button">Login</button>
        </form> */}
          {/* <div className="">
          <img src="images/logo.png" alt="" />
        </div> */}
        </div>
      </div>
    </>
  );
};

export default SignUp;
