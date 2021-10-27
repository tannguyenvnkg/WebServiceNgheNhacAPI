const express = require('express');
const router = express.Router();

const InsertCategoryController = require('../app/controllers/Insert/InsertCategoryController');
const InsertSingerController = require('../app/controllers/Insert/InsertSingerController');
const InsertPlaylistController = require('../app/controllers/Insert/InsertPlaylistController');
const InsertSongController = require('../app/controllers/Insert/InsertSongController');

const {uploadImageSinger} = require('./Upload.multer');
const {uploadImagePlaylist} = require('./Upload.multer');
const {uploadImageSong} = require('./Upload.multer');


// // auto insert and delete 
// const InsertControllerAutomaly = require('../app/controllers/InsertControllerAutomaly');
// router.use('/DeleteCategoryAutomaly',InsertControllerAutomaly.deleteCategoryAutomaly);
// router.use('/DeleteSingerAutomaly',InsertControllerAutomaly.deleteSingerAutomaly);

// router.use('/InsertCategoryAutomaly',InsertControllerAutomaly.insertCategoryAutomaly);
// router.use('/InsertSingerAutomaly',InsertControllerAutomaly.insertSingerAutomaly);
// // ==========================================================================


//insert category 
router.get('/insertCategory',InsertCategoryController.insertCategory);
router.post('/insertCategoryPost',InsertCategoryController.insertCategoryPost);

//insert playlist 
router.get('/insertPlaylist',InsertPlaylistController.insertPlaylist);
router.post('/insertPlaylistPost', uploadImagePlaylist.single('imagePlaylist'),InsertPlaylistController.insertPlaylistPost);

//insert song 
router.get('/insertSong',InsertSongController.insertSong);
router.post('/insertSongPost', uploadImageSong.any(),InsertSongController.insertSongPost);

//insert singer
router.get('/insertSinger',InsertSingerController.insertSinger);
router.post('/insertSingerPost', uploadImageSinger.single('image'),InsertSingerController.insertSingerPost);
//==========================================================================
router.use('/',InsertCategoryController.index);

module.exports = router;