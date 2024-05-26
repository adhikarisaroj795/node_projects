import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profileRoute } from "../../utils/APIRoutes";

const NavBar = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch(profileRoute, {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.user.username);
      });
    });
  }, []);
  {
    console.log(username);
  }
  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/">Create new Post</Link>
            <a href="">Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
