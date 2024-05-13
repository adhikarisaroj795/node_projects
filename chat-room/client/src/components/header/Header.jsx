import React, { useState, useEffect } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [Toggle, ShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("/home");

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY >= 80) header.classList.add("scroll-header");
      else header.classList.remove("scroll-header");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActiveNav = (navId) => {
    ShowMenu(!Toggle);
    setActiveNav(navId);
    ShowMenu(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <NavLink to="/" className="nav__logo">
          𝓡𝓸𝓸𝓶𝓲𝓮
        </NavLink>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__item grid">
              <NavLink
                to="/home"
                onClick={() => handleSetActiveNav("/home")}
                className={
                  activeNav === "/home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>
                Home
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/myrooms"
                onClick={() => handleSetActiveNav("/myrooms")}
                className={
                  activeNav === "/myrooms"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-bed-double nav__icon"></i>
                My Rooms
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/directmessage"
                onClick={() => handleSetActiveNav("/directmessage")}
                className={
                  activeNav === "/directmessage"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-envelope-check nav__icon"></i>
                Direct Message
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink
                to="/random"
                onClick={() => handleSetActiveNav("/random")}
                className={
                  activeNav === "/random"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-arrow-random nav__icon"></i>
                Random
              </NavLink>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => ShowMenu(!Toggle)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => ShowMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
