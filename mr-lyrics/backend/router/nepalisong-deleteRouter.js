const express = require('express');
const deleteNepaliSong = require('../controller/nepaliSongDlt-controller');

const router = express.Router();

router.route('/delete/:id').delete(deleteNepaliSong);

module.exports = router;
