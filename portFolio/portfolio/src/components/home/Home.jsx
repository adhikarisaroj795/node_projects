import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import ScrolltoDown from "./ScrolltoDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid ">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>
          <Data />
        </div>
        <ScrolltoDown />
      </div>
    </section>
  );
};

export default Home;
