const express = require('express');
const router = express.Router();

const listSongController = require('../app/controllers/ListSongController');
const listSongByIDController = require('../app/controllers/ListSongByIDController');

router.use('/playlist',listSongByIDController.index);
router.use('/',listSongController.index);

module.exports = router;