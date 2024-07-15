import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container section login-holder">
        <div className="login-form ">
          <h2 className="m-b-25">Login</h2>
          <form>
            <label>Email</label>
            <input type="text" placeholder="Enter Your Email" />
            <label>Password</label>
            <input type="text" placeholder="Enter Your Password" />
            <span>
              dont have an account <Link to={"/signup"}>signin?</Link>
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

export default Login;
