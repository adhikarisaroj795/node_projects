import React, { useState } from "react";
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
          <a href="#">
            <img src="images/logo.png" alt="" />
          </a>
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
                  <a className="active" href="#">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">Nepali Lyrics</a>
                </li>
                <li>
                  <a href="#">English Lyrics</a>
                </li>
                <li>
                  <a href="#">Hindi Lyrics</a>
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
