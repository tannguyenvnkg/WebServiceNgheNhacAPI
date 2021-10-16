const Song = require('../models/Song');

class ListSongController {

    // [GET] /listsong
    index(req, res) {

        Song.find({}, function (err, listSong) {
            if(!err) res.json( {
                error: false,
                message: '',
                listSong
            });
            else res.json( {
                error: true,
                message: err.message
            });
          });
        
    }

}

module.exports = new ListSongController;