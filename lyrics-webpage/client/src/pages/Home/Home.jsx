import React from "react";
import LatestSongs from "../../components/LatestSongs/LatestSongs";
import results from "../Home/dataa";
import "./home.css";
conso;

const Home = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="latest-song-holder">
          {results.map((data) => (
            <LatestSongs key={data.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
