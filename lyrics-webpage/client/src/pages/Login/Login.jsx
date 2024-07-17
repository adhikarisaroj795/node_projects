import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className="container section login-holder">
        <div className="login-form ">
          <h2 className="m-b-25">Login</h2>
          <form>
            <label>Email</label>
            <input type="email" placeholder="Enter Your Email" />
            <label>Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                id="password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <span>
              dont have an account <Link to={"/signup"}>signUp?</Link>
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
