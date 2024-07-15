import React from "react";
import "../LatestSongs/latestSongs.css";
import { Link } from "react-router-dom";

const LatestSongs = ({ result }) => {
  console.log(result);

  console.log(result.name);
  return (
    <div className="latest-songs-solo-card">
      <figure className="lt-sng-img">
        <img src={result.imageLink} alt="" />
      </figure>
      <div className="songs-details">
        <span className="song-category">{result.category}</span>
        <h5 className="song-title">Song name: {result.title}</h5>
        <span className="singer-name">Singer name:{result.name}</span>

        <Link className="song-button">Read Lyrics</Link>
      </div>
    </div>
  );
};

export default LatestSongs;
