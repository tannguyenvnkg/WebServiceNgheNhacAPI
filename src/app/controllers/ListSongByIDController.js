const Song = require('../models/Song');

class ListSongByIDController {

    // [GET] /listsong/playlist?id='value'
    index(req,res) {
        const id = req.query.id
        Song.find({ playlistid : id}, function(err, listSong) {
            console.log(listSong)
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