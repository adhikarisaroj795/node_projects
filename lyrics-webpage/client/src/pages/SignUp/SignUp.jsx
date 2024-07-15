import React from "react";
import "../Login/Login";
import "./signUp.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="container section login-holder row-rev">
        <div className="login-form ">
          <h2 className="m-b-25">Sign Up</h2>
          <form>
            <label>Full name</label>
            <input type="text" placeholder="Enter Your Name" />
            <label>Email</label>
            <input type="text" placeholder="Enter Your Email" />
            <label>Password</label>
            <input type="text" placeholder="Enter Your Password" />
            <span>
              already have an account <Link to="/login">login?</Link>
            </span>
            <button className="song-button">Login</button>
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
