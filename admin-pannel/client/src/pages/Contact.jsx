import React, { useState } from "react";
import { useAuth } from "../store/Auth";
import { toast } from "react-toastify";

const defaultContactFormdata = {
  username: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [msg, setMsg] = useState(defaultContactFormdata);
  const [userData, setUserDAta] = useState(true);

  const { user } = useAuth();

  if (userData && user) {
    setMsg({
      username: user.username,
      email: user.email,
      message: "",
    });

    setUserDAta(false);
  }

  const handleInput = (e) => {
    e.preventDefault();
    console.log(msg);
    let name = e.target.name;
    let value = e.target.value;
    // setMsg({
    //   ...msg,
    //   [name]: value,
    // });

    setMsg((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3030/api/form/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(msg),
      });
      const data = await response.json();
      if (response.ok) {
        setMsg(defaultContactFormdata);
        console.log(data);
        toast.success(data.extraDetails ? data.extraDetails : data.message);
      } else {
        toast.error(data.extraDetails ? data.extraDetails : data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Contact us</h1>
        </div>
        {/* contact page main */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/support.png"
              alt="we are always ready to help"
              height="400"
              width="400"
            />
          </div>

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
                  value={msg.username}
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
                  value={msg.email}
                  onChange={handleInput}
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  value={msg.message}
                  onChange={handleInput}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </section>
        </div>
        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1913640974494!2d85.32348537492317!3d27.71137722531472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1908d2cc8a4d%3A0xfc95c3c01d2da695!2sKamalpokhari%20Boys%20Hostel!5e0!3m2!1sen!2snp!4v1710313999338!5m2!1sen!2snp"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};

export default Contact;

//32 sakeyo
