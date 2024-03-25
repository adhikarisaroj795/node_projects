import { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { Link } from "react-router-dom";
export const AdminUsers = () => {
  const { authorizationToken } = useAuth();
  const [users, setUsers] = useState([]);

  const getAllUserData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      const userss = data.users;

      setUsers(userss);
    } catch (error) {
      console.log("error:", error.message);
    }
  };
  //delete
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users  after delete${data}`);
      if (response.ok) {
        getAllUserData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUserData(); // Call the async function here
  }, []); // Empty dependency array for running effect only once

  useEffect(() => {
    console.log("from effect", users);
  }, [users]);
  return (
    <>
      <section className="admin-users-section">
        <div className="containner">
          <h1>Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUsr, index) => {
                return (
                  <tr key={index}>
                    <td>{curUsr.username}</td>
                    <td>{curUsr.email}</td>
                    <td>{curUsr.phone}</td>
                    <td>
                      <Link to={`/admin/users/${curUsr._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(curUsr._id)}>
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
