const express = require("express");
const router = express.Router();
const videoCompressor = require("../controller/videoCompressor");
const videoUploader = require("../middlewares/videoUploader.middleware");

router
  .route("/compressed/video")
  .post(videoUploader.single("video"), videoCompressor.vidCompressor);

module.exports = router;
