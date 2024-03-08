import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import main from "./component/main";
import signup from "./component/signUp";
import login from "./c";

function App() {
  const user = localStorage.getitem("token");
  return (
    <Routes>
      {user && <Route path="/" exact element={<main />} />}
      <Route path="/signup" exact element={<signup />} />
      <Route path="/login" exact element={<login />} />
      <Route path="/" exact element={<Navigate replace to="/login" />} />
    </Routes>
  );
}

export default App;
