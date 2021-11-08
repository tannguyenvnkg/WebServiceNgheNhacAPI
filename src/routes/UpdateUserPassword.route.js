const express = require('express');
const router = express.Router();

const updateUserPassowordController = require('../app/controllers/UpdateUserPassowordController');

router.put('/',updateUserPassowordController.index);

module.exports = router;