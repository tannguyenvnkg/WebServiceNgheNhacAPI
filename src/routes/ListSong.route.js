const express = require('express');
const router = express.Router();

const listSongController = require('../app/controllers/ListSongController');

router.use('/',listSongController.index);

module.exports = router;