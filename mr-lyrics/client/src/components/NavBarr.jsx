import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBarr.css";

const NavBarr = () => {
  const [clicked, setClicked] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  const toggleSearch = () => {
    setSearchVisible((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <div className="logo-brand">
          <NavLink to="/">
            <img className="imglogo" src="images/logo.png" alt="" />
          </NavLink>
        </div>
        <nav>
          <ul id="navbar" className={clicked ? "#navbar active" : "#navbar"}>
            {isSearchVisible ? (
              <li>
                <input
                  type="text"
                  placeholder="Search"
                  className="input-field input-visible"
                />
              </li>
            ) : (
              <>
                <li>
                  <NavLink className="active" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/nepalisongs">Nepali Lyrics</NavLink>
                </li>
                <li>
                  <NavLink to="/englishsongs">English Lyrics</NavLink>
                </li>
                <li>
                  <NavLink to="/hindisongs">Hindi Lyrics</NavLink>
                </li>
              </>
            )}

            <li>
              <a href="#" onClick={toggleSearch}>
                <i
                  className={isSearchVisible ? "fas fa-times" : "fas fa-search"}
                ></i>
              </a>
            </li>
          </ul>
        </nav>
        <div className="mobile" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </header>
    </>
  );
};

export default NavBarr;
