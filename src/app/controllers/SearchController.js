const Song = require('../models/Song');
const Singer = require('../models/Singer');
class SearchController{

    // [GET] /Search?q='values'
    async index(req, res){
        try {
            if(!req.query.q){
                res.json({ error: true,  message: 'Không có ký tự để tìm kiếm !!!', note: ''});
            }else{
                const singerIds = await Singer.find({$text: {$search: req.query.q}}, '_id');
                if(singerIds.length != 0){ // found singer
                    const singers = await Singer.find({$text: {$search: req.query.q}}); // list singer
                    const listsong1 = await Song.find({$text: {$search: req.query.q}}); // this listsong is found from req.query.q
                    const listsong2 = await Song.find({'singer._id': {$in: singerIds}}); // this listsong is found from singerID
                    const listSong = listsong2.concat(listsong1);

                    res.json({
                        error: false,  
                        message: '',
                        singer: singers,
                        listSong
                    });
                }else{ // if q is not singer
                    const listSong = await Song.find({$text: {$search: req.query.q}});
                    if(listSong.length != 0){
                        res.json({
                            error: false,  
                            message: '',
                            listSong
                        });
                    }else{
                        res.json({error: true,  message: 'Không tìm thấy bài hát', note: ''});
                    }
                }
            }
        } catch (error) {
            console.log(error);
            res.json({ error: true,  message: error.message, note: ''});
        }
    }

}

module.exports = new SearchController;