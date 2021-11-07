const express = require('express');
const router = express.Router();

const manageController = require('../app/controllers/ManageController');

//===========================    Song    ======================================
router.put('/Song/editSong',manageController.editSong);
router.get('/Song/:idSong',manageController.detailSong);
router.get('/Song',manageController.listSong);
router.get('/',manageController.listSong);
//=============================================================================

//===========================   SINGER  =======================================
router.put('/Singer/editSinger',manageController.editSinger);
router.get('/Singer/:idSinger',manageController.detailSinger);
router.get('/Singer',manageController.listSinger);
//=============================================================================

//===========================   PLAYLIST  =====================================
router.put('/Playlist/editPlaylist',manageController.editPlaylist);
router.get('/Playlist/:idPlaylist',manageController.detailPlaylist);
router.get('/Playlist',manageController.listPlaylist);
//=============================================================================

//===========================   CATEGORY  =====================================
router.put('/Category/editCategory',manageController.editCategory);
router.get('/Category/:idCategory',manageController.detailCategory);
router.get('/Category',manageController.listCategory);
//=============================================================================
module.exports = router;