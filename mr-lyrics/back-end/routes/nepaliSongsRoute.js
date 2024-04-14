const express = require("express");

const NepaliSongsController = require("../App/controllers/nepaliSongs.controller");
const uploader = require("../App/middleware/uploader.middleware");
const nepSong_ctrl = new NepaliSongsController();

const router = express.Router();

router
  .route("/")
  .get(nepSong_ctrl.getAllNepaliSongs)
  .post(uploader.single("nepalisongimage"), nepSong_ctrl.addNewNepaliSongs);

router
  .route("/:id")
  .get(nepSong_ctrl.getNepaliSongById)
  .put(uploader.single("nepalisongimage"), nepSong_ctrl.updateNepaliSongById)
  .delete(nepSong_ctrl.deleteNepaliSongByid);

module.exports = router;
