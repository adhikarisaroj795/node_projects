import React, { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <section className="registration-sec">
        <div className="container">
          <div className="form-details">
            <h2>Login here</h2>
            <form>
              <div className="form-link">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-link">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <div>
                <button className="gbl-btn">Log in</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
