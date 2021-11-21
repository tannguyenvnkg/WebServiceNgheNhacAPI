const express = require('express');
const router = express.Router();

const manageController = require('../app/controllers/ManageController');

//===========================    Song    ======================================
router.put('/Song/editSong',manageController.editSong);
router.delete('/Song/:idSong',manageController.deleteSong);
router.get('/Song/:idSong',manageController.detailSong);
router.get('/Song',manageController.listSong);
router.get('/',manageController.listSong);
//=============================================================================

//===========================   SINGER  =======================================
router.put('/Singer/editSinger',manageController.editSinger);
router.delete('/Singer/:idSinger',manageController.deleteSinger);
router.get('/Singer/:idSinger',manageController.detailSinger);
router.get('/Singer',manageController.listSinger);
//=============================================================================

//===========================   PLAYLIST  =====================================
router.put('/Playlist/editPlaylist',manageController.editPlaylist);
router.delete('/Playlist/:idPlaylist',manageController.deletePlaylist);
router.get('/Playlist/:idPlaylist',manageController.detailPlaylist);
router.get('/Playlist',manageController.listPlaylist);
//=============================================================================

//===========================   CATEGORY  =====================================
router.put('/Category/editCategory',manageController.editCategory);
router.delete('/Category/:idCategory',manageController.deleteCategory);
router.get('/Category/:idCategory',manageController.detailCategory);
router.get('/Category',manageController.listCategory);

//===========================   ALBUM  ========================================
router.put('/Album/editAlbum',manageController.editAlbum);
router.delete('/Album/:idAlbum',manageController.deleteAlbum);
router.get('/Album/:idAlbum',manageController.detailAlbum);
router.get('/Album',manageController.listAlbum);
//=============================================================================

module.exports = router;