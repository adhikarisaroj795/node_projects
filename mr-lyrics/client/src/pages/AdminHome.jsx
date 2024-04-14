import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaAddressBook, FaRegListAlt, FaHome } from "react-icons/fa";

const AdminHome = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/adminnepalisong">
                  <FaUser />
                  Nepali Songs
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/adminhindisong">
                  <FaAddressBook />
                  Hindi Songs
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/adminenglishsong">
                  <FaRegListAlt />
                  English Songs
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <FaHome />
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default AdminHome;
