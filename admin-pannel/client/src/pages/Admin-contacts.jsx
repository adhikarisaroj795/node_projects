import { useEffect, useState } from "react";
import { useAuth } from "../store/Auth";
import { Link } from "react-router-dom";
export const AdminContacts = () => {
  const { authorizationToken } = useAuth();
  const [contact, setContact] = useState([]);

  const getAllContacts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const contacts = await response.json();
      console.log("from contact", contacts);

      setContact(contacts);
    } catch (error) {
      console.log("error:", error.message);
    }
  };
  //delete
  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/contacts/delete/${id}`,
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
        getAllContacts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts(); // Call the async function here
  }, []); // Empty dependency array for running effect only once

  useEffect(() => {
    console.log("from effect", contact);
  }, [contact]);
  return (
    <>
      <section className="admin-users-section">
        <div className="containner">
          <h1>Admin Contact Data</h1>
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
              {contact.map((curUsr, index) => {
                return (
                  <tr key={index}>
                    <td>{curUsr.username}</td>
                    <td>{curUsr.email}</td>
                    <td>{curUsr.message}</td>

                    <td>
                      <button onClick={() => deleteContact(curUsr._id)}>
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
