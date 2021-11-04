const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');

router.post('/loginPost',adminController.loginPost);
router.get('/login',adminController.login);
router.use('/logout',adminController.logout);
router.use('/',adminController.login);

module.exports = router;