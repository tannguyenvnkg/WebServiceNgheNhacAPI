const path = require('path');
const pathSongMusic = path.join(__dirname, '../','public','song','/');
const pathSongImage = path.join(__dirname, '../','public','image','song','/');
const pathSingerImage = path.join(__dirname, '../','public','image','singer','/');
const pathPlaylistImage = path.join(__dirname, '../','public','image','playlist','/');
const pathAlbumImage = path.join(__dirname, '../','public','image','album','/');

module.exports = {
    pathSongMusic,
    pathSongImage,
    pathSingerImage,
    pathPlaylistImage,
    pathAlbumImage
}