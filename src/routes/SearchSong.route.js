const express = require('express');
const router = express.Router();

const searchSongController = require('../app/controllers/SearchSongController');

router.use('/:id',searchSongController.getSong);
router.use('/',searchSongController.index);

module.exports = router;