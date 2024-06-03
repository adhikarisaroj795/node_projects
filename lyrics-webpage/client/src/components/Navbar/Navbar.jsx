import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="header-navbar">
      <header>
        <div className="nav-logo">
          <img src="images/main-logo.png" alt="" />
        </div>

        <div className="search-input">
          <input type="text" placeholder="Search" className="search-input" />
          <i className="bx bx-search-alt search-icon"></i>
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Nepali Lyrics</a>
            </li>
            <li>
              <a href="#">English Lyrics</a>
            </li>
            <li>
              <a href="#">Hindi Lyrics</a>
            </li>
          </ul>
        </nav>
        <div className="nav-btn">
          <button className="gbl-btn">Sign In</button>
          <button className="gbl-btn">Sign Up</button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
