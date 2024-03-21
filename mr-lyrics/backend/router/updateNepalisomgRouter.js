const express = require('express');
const router = express.Router();
const {
  uploadSingle,
  updateNepaliSong,
} = require('../controller/updateNepaliSongs');

router.route('/nepali-song/:id').put(uploadSingle, updateNepaliSong);

module.exports = router;
