const Song = require('../models/Song');

class ListSongByIDController {

    // [GET] /listsong/playlist?playlistId='value'
    index(req,res) {
        const id = req.query.playlistId
        Song.find({ playlistid : id}, function(err, listSong) {
            if(!err) {
                if(listSong[0] !== undefined) {
                    res.json( {
                        error: false,
                        message: '',
                        listSong
                    })
                }
                else {
                    res.json( {
                        error: true,
                        message: 'Không có dữ liệu'
                    })
                }
            }
            else res.json( {
                error: true,
                message: err.message
            });
        })
    }

    // [GET] /listsong/album?albumId='value'
    getListSongByAlbumId(req,res) {
        const id = req.query.albumId
        Song.find({ albumid : id}, function(err, listSong) {
            if(!err) {
                if(listSong[0] !== undefined) {
                    res.json( {
                        error: false,
                        message: '',
                        listSong
                    })
                }
                else {
                    res.json( {
                        error: true,
                        message: 'Không có dữ liệu'
                    })
                }
            }
            else res.json( {
                error: true,
                message: err.message
            });
        })
    }
}

module.exports = new ListSongByIDController;