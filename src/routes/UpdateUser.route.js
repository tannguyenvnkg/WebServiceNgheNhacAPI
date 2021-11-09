const express = require('express');
const router = express.Router();

const updateUserController = require('../app/controllers/UpdateUser/UpdateUserController');
const updateUserPasswordController = require('../app/controllers/UpdateUser/UpdateUserPasswordController');

router.put('/AddLovePlaylist',updateUserController.addLovePlaylist);
router.put('/UpdatePassword',updateUserPasswordController.index);
router.put('/',updateUserController.index);

module.exports = router;