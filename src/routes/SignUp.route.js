const express = require('express');
const router = express.Router();

const signUpController = require('../app/controllers/SignUpController');

router.post('/',signUpController.index);

module.exports = router;