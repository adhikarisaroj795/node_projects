import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <Router>
      <Login />
      <Register />
    </Router>
  );
};

export default App;
