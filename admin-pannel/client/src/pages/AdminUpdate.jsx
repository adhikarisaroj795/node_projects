import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken } = useAuth();

  const getSingleUSerData = async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`user single data :${data}`);

      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUSerData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // to update the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8080/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("Update Sucessfull");
      } else {
        toast.error("Update Error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Update User Data</h1>
      </div>
      {/* contact page main */}
      <div className="container grid grid-two-cols">
        {/* contact form actual content */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                required
                value={data.username}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                required
                value={data.email}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="phone">Mobile</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="off"
                required
                value={data.phone}
                onChange={handleInput}
              />
            </div>
            <div>
              <button type="submit">update</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
