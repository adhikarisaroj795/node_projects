const express = require('express');
const nepaliSongs = require('../controller/getNeplaiSng-controller');

const router = express.Router();

router.route('/songs').get(nepaliSongs);

module.exports = router;
