const Playlist = require('../models/Playlist');
const Song = require('../models/Playlist');

class LoadPlayListController {
    
    // [GET] /PlayList
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

    // [GET] /PlayList/getPlaylistByCategoryId?CategoryId='value'
    async getPlayListByIDCategory (req,res) {
        try{
            const playlist = await Playlist.find({});
            if (playlist) {
                res.json({ error: false, message: '', playlist});
            }
            else {
                res.json({ error: true, message: 'Lỗi không thể lấy được danh sách Playlist'});
            }
        }
        catch (error) {
            res.json({ error: true, message: err.message });
        }
    }
    
}

module.exports = new LoadPlayListController;