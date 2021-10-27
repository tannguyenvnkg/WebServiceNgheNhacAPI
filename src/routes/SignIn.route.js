const express = require('express');
const router = express.Router();

const signinController = require('../app/controllers/SignInController');

router.use('/',signinController.index);

module.exports = router;