const Song = require('../models/Song');
class SearchSongController{

    // [GET] /searchSong?q='values'
    index(req, res, next) {
        const title = req.query.q;
        console.log(title);
        if(title == ''){ // empty query
            res.json({error: true,  message: 'Không có giá trị được truyền vào'});
        }
        else { 
            Song.find({
                $or:[
                    {title: new RegExp(title, 'i')},
                    {description: new RegExp(title, 'i')},
                    {'category.categoryname': new RegExp(title, 'i')}
                ]
            }).exec( function (err, listsong) {
                if(err){
                    res.json(err.message);
                    return;
                }                
                if(listsong[0].title === undefined){
                    res.json({error: true,  message: 'không tìm thấy kết quả'});
                }
                else {
                    res.json({
                        error: false,
                        message: '',
                        listsong
                    });
                }
            });
        }
    }

}

module.exports = new SearchSongController;