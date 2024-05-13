import React from "react";
import "./Register.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="registration-form">
          <div className="registration-page">
            <h2>Registration</h2>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>

              <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmpassword"
                  name="confirmpassword"
                />
              </div>
              <div className="already-account">
                <span>
                  Already have an account? <NavLink to="login">Login</NavLink>
                  here
                </span>
              </div>
              <div className="reg-btn">
                <button>Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
