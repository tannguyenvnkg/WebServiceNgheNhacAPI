const express = require('express');
const router = express.Router();

const imageSingerController = require('../app/controllers/Image/ImageSingerController');


router.use('/imagesinger/:imageName',imageSingerController.display);
router.use('/',imageSingerController.index);

module.exports = router;