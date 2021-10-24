const express = require('express');
const router = express.Router();

const InsertController = require('../app/controllers/InsertController');

router.use('/DeleteCategory',InsertController.deleteCategory);
router.use('/DeleteSinger',InsertController.deleteSinger);

router.use('/InsertCategory',InsertController.insertCategory);
router.use('/InsertSinger',InsertController.insertSinger);

router.use('/',InsertController.index);

module.exports = router;