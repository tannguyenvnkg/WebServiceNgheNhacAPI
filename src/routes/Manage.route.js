const express = require('express');
const router = express.Router();

const manageController = require('../app/controllers/ManageController');

router.put('/edit/editSong',manageController.editSong);
router.get('/edit/:idSong',manageController.edit);
router.get('/Song',manageController.index);
router.get('/',manageController.index);

module.exports = router;