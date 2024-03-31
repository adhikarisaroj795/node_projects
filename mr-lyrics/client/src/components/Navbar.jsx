import { useState } from "react";
import { BsSearchHeart, BsX } from "react-icons/bs"; // Import the cross icon
// import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleSearch = () => {
    setSearchVisible((prevState) => !prevState);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <a href="/">
              <img src="/images/logo.png" alt="logo of mr-lyrics" />
            </a>
          </div>
          <nav>
            <ul className="navbar">
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
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/nepaliLyrics">Nepali Lyrics</a>
                  </li>
                  <li>
                    <a href="/hindiLyrics">Hindi Lyrics</a>
                  </li>
                  <li>
                    <a href="/englishLyrics">English Lyrics</a>
                  </li>
                </>
              )}
              <li>
                <a href="#" onClick={toggleSearch}>
                  {isSearchVisible ? <BsX /> : <BsSearchHeart />}
                </a>
              </li>
            </ul>
            <div className="icon menu-btn">
              <GiHamburgerMenu />
            </div>
            <div className="icon menu-btn">
              <BsX />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
