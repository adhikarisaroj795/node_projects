import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="registration-form">
          <div className="registration-page">
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>

              <div className="already-account">
                <span>
                  Don't have an account?{" "}
                  <NavLink to="/register">Register</NavLink> here
                </span>
              </div>

              <div className="reg-btn">
                <button>Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
