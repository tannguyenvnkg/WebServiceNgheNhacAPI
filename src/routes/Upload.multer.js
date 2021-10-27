const multer = require('multer');
const path = require('path');

// upload image singer
var storageImageSinger = multer.diskStorage({
    destination: function (req, file, cb) {
    const pathSingerImage = path.join(__dirname, '../','public','image','singer','/');
      cb(null, pathSingerImage)
    },
    filename: function (req, file, cb) {
      cb(null,  Date.now() + file.originalname )
    }
  })
   
var uploadImageSinger = multer({ storage: storageImageSinger })
//===============================================================================
//upload image playlist
var storageImagePlaylist = multer.diskStorage({
  destination: function (req, file, cb) {
  const pathPlaylistImage = path.join(__dirname, '../','public','image','playlist','/');
    cb(null, pathPlaylistImage)
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + file.originalname )
  }
})
 
var uploadImagePlaylist = multer({ storage: storageImagePlaylist })
//=====================================================================

//upload image song
var storageImageSong = multer.diskStorage({
  destination: function (req, file, cb) {
    const pathSongImage = path.join(__dirname, '../','public','image','song','/');
    const pathSong = path.join(__dirname, '../','public', 'song','/');

    if(file.fieldname === 'imageSong'){
      cb(null,pathSongImage);
    }else if(file.fieldname=== 'song'){
      cb(null, pathSong)
    }
  },
  filename: function (req, file, cb) {
    cb(null,  Date.now() + file.originalname )
  }
})
 
var uploadImageSong = multer({ storage: storageImageSong })
//=====================================================================

module.exports = {
    uploadImageSinger,
    uploadImagePlaylist,
    uploadImageSong
}