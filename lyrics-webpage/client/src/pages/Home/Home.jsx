import React from "react";
import LatestSongs from "../../components/LatestSongs/LatestSongs";
import results from "../Home/dataa";
import "./home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="section">
        <span>
          Welcome back <span className="user-name">saroj</span>
        </span>

        <h2 className="m-b-25">Latest Songs</h2>
        <div className="latest-song-holder">
          {results.map((data) => (
            <LatestSongs key={data.id} result={data} />
          ))}
        </div>
      </div>
      <div className="section">
        <h2 className="m-b-25">English Songs</h2>
        <div className="latest-song-holder">
          {results.map((data) => (
            <LatestSongs key={data.id} result={data} />
          ))}
        </div>
      </div>
      <div className="section">
        <h2 className="m-b-25">Hindi Songs</h2>
        <div className="latest-song-holder">
          {results.map((data) => (
            <LatestSongs key={data.id} result={data} />
          ))}
        </div>
      </div>
      <div className="section">
        <h2 className="m-b-25">Nepali Songs</h2>
        <div className="latest-song-holder">
          {results.map((data) => (
            <LatestSongs key={data.id} result={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
