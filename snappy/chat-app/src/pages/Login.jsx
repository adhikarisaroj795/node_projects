import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { loginRoute } from "../utils/APIRoutes";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",

    password: "",
  });
  useEffect(() => {
    if (localStorage.getItem("chat-app-user")) {
      navigate("/");
    }
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (handleValidation()) {
        const { password, username } = values;
        const response = await axios.post(
          loginRoute,
          {
            username,

            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response) {
          localStorage.setItem(
            "chat-app-user",
            JSON.stringify(response.data.user)
          );
          toast.success(response.data.msg);
        }
      }
    } catch (error) {
      if (error.response) {
        const errorMessage = error.response.data.error.message;
        toast.error(errorMessage);
        console.log("error", errorMessage);
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    }
  };
  const handleValidation = () => {
    const { password, username } = values;
    if (!username || !password) {
      toast.error("Please fill the form");
      return false;
    } else if (username.length === "") {
      toast.error("Username is required");
      return false;
    } else if (password.length === "") {
      toast.error("Password is required");
      return false;
    }
    return true;
  };
  const handleChange = (event) => {
    event.preventDefault();
    let name = event.target.name;
    let value = event.target.value;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src="/assets/logo.svg" alt="Logo" />
            <h1>snappy</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            autoComplete="false"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
            autoComplete="false"
          />
          <button type="submit">Login In</button>
          <span>
            Don't have an account ? <Link to="/login">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"
      />
    </>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    & img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
    & input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: white;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }

    button {
      background-color: #997af0;
      color: white;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0%.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
    & span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;
export default Login;
