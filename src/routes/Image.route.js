const express = require('express');
const router = express.Router();

const imageSingerController = require('../app/controllers/Image/ImageSingerController');
const imagePlaylistController = require('../app/controllers/Image/ImagePlaylistController');

router.use('/imageplaylist/:imageName',imagePlaylistController.display);
router.use('/imagesinger/:imageName',imageSingerController.display);
router.use('/',imageSingerController.index);

module.exports = router;