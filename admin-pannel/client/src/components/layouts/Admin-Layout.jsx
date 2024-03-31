import { NavLink, Navigate, Outlet } from "react-router-dom";
import { FaUser, FaAddressBook, FaRegListAlt, FaHome } from "react-icons/fa";
import { useAuth } from "../../store/Auth";
export const AdminLayout = () => {
  const { user, isLoading } = useAuth();
  console.log("admin", user);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  if (!user.isAdmin) {
    return <Navigate to="/" />;
  }
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
