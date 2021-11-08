const path = require('path');
const pathSongMusic = path.join(__dirname, '../','public','song','/');
const pathSongImage = path.join(__dirname, '../','public','image','song','/');
const pathSingerImage = path.join(__dirname, '../','public','image','singer','/');
const pathPlaylistImage = path.join(__dirname, '../','public','image','playlist','/');

module.exports = {
    pathSongMusic,
    pathSongImage,
    pathSingerImage,
    pathPlaylistImage
}