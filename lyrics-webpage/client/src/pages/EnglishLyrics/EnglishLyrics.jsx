import React from "react";
import "./englishLyrics.css";

import LatestSongs from "../../components/LatestSongs/LatestSongs";
import datas from "../Home/dataa";

const EnglishLyrics = () => {
  return (
    <div>
      <div className="container">
        <div className="section">
          <h2 className="m-b-25">English Lyrics</h2>
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

export default EnglishLyrics;
