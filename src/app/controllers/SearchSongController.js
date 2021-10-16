const Song = require('../models/Song');

class SearchSongController{

    // [GET] /searchSong
    index(req, res) {
        res.render('searchSong');
    }

    // [GET] /searchSong/:id
    getSong(req, res) {
        Song.find({_id: '61696168cd1b023c9f3dff3f'}, function (err, listSong) {
            res.json(listSong);
          });
    }

}

module.exports = new SearchSongController;