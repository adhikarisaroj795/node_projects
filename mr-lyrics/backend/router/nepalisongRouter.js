const express = require('express');

const {
  uploadSingle,
  addNepaliSongs,
} = require('../controller/nepalisong-controller');

const router = express.Router();

router.route('/nepali-songs').post(uploadSingle, addNepaliSongs);

module.exports = router;
