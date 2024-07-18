import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="header-navbar">
      <header>
        <div className="nav-details">
          <div className="nav-logo">
            <img src="images/main-logo.png" alt="" />
          </div>

          <div className="nav-none-mb">
            <div className="search-input">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
              />
              <i className="bx bx-search-alt search-icon"></i>
            </div>

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/nepali-lyrics">Nepali Lyrics</Link>
                </li>
                <li>
                  <Link to="/english-lyrics">English Lyrics</Link>
                </li>
                <li>
                  <Link to="/hindi-lyrics">Hindi Lyrics</Link>
                </li>
              </ul>
            </nav>
            <div className="nav-btn">
              {currentUser ? (
                <div className="profile-details">
                  <div className="profile-pic">
                    <img src="images/2.png" alt="" />
                  </div>
                  <div className="profile-dropdown">
                    <div className="slot-1">
                      <span>@{currentUser.user.fullname}</span>
                      <span>{currentUser.user.email}</span>
                    </div>
                    <div className="slot-1">
                      <Link>
                        <span>Profile</span>
                      </Link>
                    </div>
                    <div className="slot-1">
                      <Link>
                        <span>Sign out</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link to={"/login"}>
                  <button className="gbl-btn">Sign In</button>
                </Link>
              )}
            </div>
          </div>
        </div>

        <div className="mobile-hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
