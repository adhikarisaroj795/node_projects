import "./Navbar.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../utils/APIRoutes";
import { toast } from "react-toastify";

import {
  signOutFailure,
  signOutStart,
  signOutSuccess,
  resetError,
} from "../../redux/user/userSlice";

const Navbar = () => {
  const { loading, error: globalError } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      dispatch(signOutStart());
      const res = await fetch(logOut, {
        method: "POST",
      });
      const data = await res.json();
      if (data.status === false) {
        console.log(data.errorMessage);
      } else {
        dispatch(signOutSuccess());
        navigate("/login");
      }
    } catch (error) {
      dispatch(signOutFailure(error.message));
      console.log(error);
    }
  };
  useEffect(() => {
    if (globalError) {
      toast.error(globalError);
      // Reset the global error state after showing the toast notification
      dispatch(resetError());
    }
  }, [globalError, dispatch]);
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
                      {currentUser.user.fullname ? (
                        <>
                          <span>@{currentUser.user.fullname}</span>
                          <span>{currentUser.user.email}</span>
                        </>
                      ) : (
                        <span>anomonous user</span>
                      )}
                    </div>
                    <div className="slot-1">
                      <Link>
                        <span>Profile</span>
                      </Link>
                    </div>
                    <div className="slot-1">
                      <Link onClick={handleSignOut}>
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
