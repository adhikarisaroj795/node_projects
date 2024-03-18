const express = require('express');

const addNepaliSongs = require('../controller/nepalisong-controller');

const router = express.Router();

router.route('/nepali-songs').post(addNepaliSongs);

module.exports = router;
