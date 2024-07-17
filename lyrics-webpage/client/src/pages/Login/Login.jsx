import { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { login } from "../../utils/APIRoutes";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!navigator.onLine) {
      toast.error("No internet connection. Please check your network.");
      return;
    }
    if (!userData.email || !userData.password) {
      toast.error("All fields are required");
      return;
    }
    try {
      setLoading(true);
      const res = await fetch(login, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();
      if (data.status === true) {
        toast.success(data.msg);
        navigate("/");
      } else {
        toast.error(data.errorMessage);
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("An error occurred while logging in. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container section login-holder">
        <div className="login-form">
          <h2 className="m-b-25">Login</h2>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              name="email"
              value={userData.email}
            />
            <label>Password</label>
            <div className="password-input-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                name="password"
                value={userData.password}
                onChange={handleChange}
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
              Don't have an account? <Link to={"/signup"}>Sign Up</Link>
            </span>
            <button className="song-button" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
        <div className="login-form bg-logo">
          {/* Additional content or form can be added here */}
        </div>
      </div>
    </>
  );
};

export default Login;
