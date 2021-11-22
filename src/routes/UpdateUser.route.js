const express = require('express');
const router = express.Router();

const updateUserController = require('../app/controllers/UpdateUser/UpdateUserController');
const updateUserPasswordController = require('../app/controllers/UpdateUser/UpdateUserPasswordController');
const playlistUserController = require('../app/controllers/UpdateUser/PlaylistUserController');


router.get('/LoadPlaylistUser',playlistUserController.loadPlaylistUser);
router.delete('/RemovePlaylistUser',playlistUserController.removePlaylistUser);
router.delete('/RemoveSongFromPlaylistUser',playlistUserController.removeSongFromPlaylistUser);
router.post('/AddNewSongToPlaylistUser',playlistUserController.addNewSongToPlaylistUser);
router.post('/CreatePlaylistUser',playlistUserController.createPlaylistUser);
router.get('/ShowSongFromPlaylistUser',playlistUserController.showSongFromPlaylistUser);
router.put('/UpdateNameFromPlaylistUser',playlistUserController.updateNameFromPlaylistUser)

router.put('/UpdatePassword',updateUserPasswordController.index);

router.put('/AddLoveOrRemovePlaylist',updateUserController.addLovePlaylist);
router.put('/',updateUserController.index);

module.exports = router;