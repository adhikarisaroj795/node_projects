import React from "react";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
