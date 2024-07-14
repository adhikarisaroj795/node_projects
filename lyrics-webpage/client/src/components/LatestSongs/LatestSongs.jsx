import React from "react";
import "../LatestSongs/latestSongs.css";
import { Link } from "react-router-dom";

const LatestSongs = () => {
  return (
    <div className="latest-songs-solo-card">
      <figure className="lt-sng-img">
        <img src="images/2.png" alt="" />
      </figure>
      <div className="songs-details">
        <span className="song-category">English</span>
        <h5 className="song-title">Song name: Tere bin</h5>
        <span className="singer-name">Singer name:Justin Bieber</span>

        <Link className="song-button">Read Lyrics</Link>
      </div>
    </div>
  );
};

export default LatestSongs;
