import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaAddressBook, FaRegListAlt, FaHome } from "react-icons/fa";
export const AdminLayout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <ul>
              <li>
                <NavLink to="/admin/users">
                  <FaUser />
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/contacts">
                  <FaAddressBook />
                  Contacts
                </NavLink>
              </li>
              <li>
                <NavLink to="/admin/service">
                  <FaRegListAlt />
                  Services
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
