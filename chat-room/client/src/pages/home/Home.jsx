import React from "react";
import "./home.css";

const Home = () => {
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="home__container">
            <div className="create-room">
              <button>Create Room</button>
            </div>
            <div className="enter-room">
              <button>Enter Room</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
