const Song = require('../models/Song');

class ListSongController {

    // [GET] /listsong
    index(req, res) {
        if(Object.keys(req.query).length === 0) console.log('không có tham số truyền vào');
        Song.find({}, function (err, listSong) {
            console.log(listSong)
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