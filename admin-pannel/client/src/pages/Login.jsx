import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const URL = "http://localhost:3030/api/auth/login";

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInput = (e) => {
    e.preventDefault();
    console.log(e);

    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log("loginform:", response);
      if (response.ok) {
        alert("login sucessfull");
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        alert("invalid credential");
        console.log("invalid credential");
      }
    } catch (error) {
      console.log("register :", error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/register.png"
                  alt="let's fill the form"
                  height="500"
                />
              </div>
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      required
                      placeholder="email"
                      id="email"
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="email">Password</label>
                    <input
                      type="password"
                      name="password"
                      required
                      placeholder="password"
                      id="password"
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Login;
