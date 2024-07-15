import React from "react";
import "./NepaliLyrics.css";
import datas from "../Home/dataa";
import LatestSongs from "../../components/LatestSongs/LatestSongs";

const NepaliLyrics = () => {
  return (
    <div>
      <div className="container">
        <div className="section">
          <h2 className="m-b-25">Nepali Songs</h2>
          <div className="latest-song-holder">
            {datas.map((data) => (
              <LatestSongs key={data.id} result={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NepaliLyrics;
