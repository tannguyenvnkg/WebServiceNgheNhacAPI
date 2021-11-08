const express = require('express');
const router = express.Router();

const updateUserController = require('../app/controllers/UpdateUserController');

router.put('/',updateUserController.index);

module.exports = router;