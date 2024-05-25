import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoutRoute, profileRoute } from "../../utils/APIRoutes";

const NavBar = () => {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch(profileRoute, {
      withCredentials: true,
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      });
    });
  }, []);
  // const logOut = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.post(
  //       logoutRoute,
  //       {},
  //       {
  //         withCredentials: true,
  //       }
  //     );
  //   } catch (error) {
  //     console.error("error", error);
  //   }
  // };

  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username ? (
          <>
            <Link to="/create">Create new post</Link>
            {/* <Link to="#" onClick={logOut}>
              Logout
            </Link> */}
          </>
        ) : (
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
