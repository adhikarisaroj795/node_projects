import React from "react";
import datas from "../Home/dataa";

import LatestSongs from "../../components/LatestSongs/LatestSongs";

const HindiLyrics = () => {
  return (
    <div>
      <div className="container">
        <div className="section">
          <h2 className="m-b-25">Hindi Lyrics</h2>
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

export default HindiLyrics;
