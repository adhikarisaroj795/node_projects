import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { setAvtarRoute } from "../utils/APIRoutes";

const SetAvtar = () => {
  const api = "https://api.multiavatar.com/4567894";
  const navigate = useNavigate();
  const [avtars, setAvtars] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [selectedAvtar, setSelectedAvtar] = useState(undefined);

  useEffect(() => {
    if (!localStorage.getItem("chat-app-user")) {
      navigate("/login");
    }
  }, []);
  const setProfilePicture = async () => {
    try {
      if (selectedAvtar === undefined) {
        toast.error("Please select an avtar");
      } else {
        const user = await JSON.parse(localStorage.getItem("chat-app-user"));

        const response = await axios.post(
          `${setAvtarRoute}/${user._id}`,
          {
            image: avtars[selectedAvtar],
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data;
        if (data.isSet) {
          user.isAvatarImageSet = true;
          user.avatarImage = data.image;
          localStorage.setItem("chat-app-user", JSON.stringify(user));
          navigate("/");
        } else {
          toast.error("Error setting avatar please try again");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchAvtars = async () => {
      try {
        const data = [];
        for (let i = 0; i < 4; i++) {
          const response = await axios.get(
            `${api}/${Math.round(Math.random() * 1000)}`
          );
          const base64String = btoa(response.data);
          data.push(base64String);
        }
        setAvtars(data);
        setIsloading(false);
      } catch (error) {
        if (error.response && error.response.status === 429) {
          // Retry after a delay
          setTimeout(() => {
            fetchAvtars();
          }, 5000); // Retry after 5 seconds
        } else {
          console.error("Error fetching avatars:", error);
          // Display error message to user
          toast.error("Error fetching avatars. Please try again later.");
          setIsloading(false);
        }
      }
    };

    fetchAvtars();
  }, []); // empty dependency array to run the effect only once

  return (
    <>
      {isLoading ? (
        <Container>
          <img src="/assets/loader.gif" alt="loader" className="loader" />
        </Container>
      ) : (
        <Container>
          {" "}
          {/* Corrected to use the styled component */}
          <div className="title-container">
            <h1>Pick an avatar as your profile picture</h1>
          </div>
          <div className="avatars">
            {avtars.map((avatar, index) => (
              <div
                key={index}
                className={`avatar ${
                  selectedAvtar === index ? "selected" : ""
                }`}
                onClick={() => setSelectedAvtar(index)}
              >
                <img
                  src={`data:image/svg+xml;base64,${avatar}`} // Corrected MIME type
                  alt="avatar"
                />
              </div>
            ))}
          </div>
          <button className="submit-btn" onClick={setProfilePicture}>
            Set as Profile Picture
          </button>
        </Container>
      )}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        bodyClassName="toastBody"
      />
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  background-color: #131324;
  height: 100vh;
  width: 100vw;

  .title-container {
    h1 {
      color: white;
    }
  }

  .avatars {
    display: flex;
    gap: 2rem;

    .avatar {
      background-color: red;
      border: 0.4rem solid transparent;
      padding: 0.4rem;
      border-radius: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s ease-in-out;

      & img {
        background-color: red;
        height: 6rem;
      }
    }

    .selected {
      border: 0.4rem solid #4e0eff;
    }
  }
  .submit-btn {
    background-color: #997af0;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0%.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
    &:hover {
      background-color: #4e0eff;
    }
  }
`;

export default SetAvtar;
