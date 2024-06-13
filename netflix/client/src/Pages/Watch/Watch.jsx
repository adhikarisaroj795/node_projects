import React from "react";
import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://media.istockphoto.com/id/1316537948/video/speedboat-cruising-in-the-sea.mp4?s=mp4-640x640-is&k=20&c=pFrJz-MbWo9XT0Q-yjitKRzNa-uV0EADu1oncjWJz8Y="
      />
    </div>
  );
};

export default Watch;
