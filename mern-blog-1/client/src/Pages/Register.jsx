import React, { useState } from "react";

const Register = () => {
  const [formData, SetFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <section className="registration-sec">
        <div className="container">
          <div className="form-details">
            <h2>SignUp here</h2>
            <form>
              <div className="form-link">
                <label>User Name</label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  onChange={handleChange}
                  value={formData.username}
                />
              </div>
              <div className="form-link">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>
              <div className="form-link">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                />
              </div>
              <div>
                <button className="gbl-btn">Sign in</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
