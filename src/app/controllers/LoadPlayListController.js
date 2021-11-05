const Playlist = require('../models/Playlist');
const Song = require('../models/Playlist');

class LoadPlayListController {
    
    // [GET] /PlayListAll
    index(req,res,next) {
        Playlist.find({}, {}, function(err, listPlayList) {
            if(err) {
                res.json({
                    error : true,
                    message: err.message
                })
            }
            else {
                res.json({
                    error: false,
                    message: '',
                    listPlayList
                })
            }
        })
    }

    
}

module.exports = new LoadPlayListController;