const Song = require('../models/Song');
class SearchSongController{

    // [GET] /searchSong?q='values'
    index(req, res, next) {
        if(Object.keys(req.query).length === 0) {
            res.json({ 
                error: true,
                message: 'Không có tham số truyền vảo'
            });
        }
        const title = req.query.q; // get q
        if(title == '' || title === undefined) { // empty query
            res.json({error: true,  message: 'Không có giá trị được truyền vào'});
        }
        else { 
            Song.find({
                $or:[
                    {title: new RegExp(title, 'i')},
                    {'category.categoryname': new RegExp(title, 'i')},
                    {'singer.singername': new RegExp(title, 'i')}
                ]
            }).exec( function (err, listsong) {
                if(err){
                    res.json(err.message);
                    return;
                }    
                else if(listsong[0] === undefined){
                    res.json({error: true,  message: 'không tìm thấy kết quả'});
                }            
                else if(listsong[0].title === undefined){
                    res.json({error: true,  message: 'không tìm thấy kết quả'});
                }
                else {
                    res.json({
                        error: false,
                        message: '',
                        listsong
                    });
                }
            })
        }
    }

}

module.exports = new SearchSongController;