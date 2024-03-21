const express = require('express');
const searchNepaliSong = require('../controller/searchNepaliSong-controller');
const router = express.Router();

router.route('/search/:songname').get(searchNepaliSong);

module.exports = router;
