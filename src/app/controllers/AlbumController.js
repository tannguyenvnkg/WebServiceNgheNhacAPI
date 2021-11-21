const Album = require('../models/Album');

class AlbumController {

    // [GET] /album/getAllAlbum
    async getAllAlbum(req, res) { // get all album
        try {
            const albums = await Album.find({});
            if(albums){
                res.json({ error: false, message: '', albums });
                
            }else{
                res.json({ 
                    error: true, message: 'lỗi không thể lấy được bài hát'
                })
            }
        } catch (error) {
            res.json({ error: true, message: err.message });
        }
        
    }

    // [GET] /album/getSingerAlbum
    async getSingerAlbum(req, res){
        try {
            if(req.query.idSinger){
                const albums = await Album.find({ 'singer._id': req.query.idSinger});

                if(albums) {
                    res.json({ error: false, message: '', albums });
                }
                else {
                    res.json({ error: true, message: 'Không tìm thấy ca sĩ' });
                }
            }else{
                res.json({ error: true, message: 'Vui lòng điền ID ca sĩ' });
            }
        } catch (error) {
            res.json({ error: true, message: error.message, note: 'ID ca sĩ có thể không tồn tại' });
        }
    }
}

module.exports = new AlbumController;