const Song = require('../models/Song');
const Singer = require('../models/Singer');
class SearchController{

    // [GET] /Search?q='values'
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
            Singer.find({singername: new RegExp(title, 'i')}).exec(function(err, singer) {
                if(err){
                    res.json({error: true,  message: err.message});
                    return;
                }    
                else if((singer.length !== 0) && (singer[0].singername !== undefined)){ // if q is singers and array singers is not empty => find singer and return singer's listsong
                    Song.find({'singer.singername': new RegExp(title, 'i')}).exec(function(err,songs){
                        if(err){
                            res.json(err.message);
                            return;
                        }else {
                            res.json({
                                error: false,  
                                message: '',
                                singer,
                                listsong: songs
                            });
                        }
                    });
                }
                else { // if q is not singer => find song
                    Song.find({title: new RegExp(title, 'i')}).exec(function(err,songs){
                        if(err){
                            res.json(err.message);
                            return;
                        }else if((songs.length !== 0) && (songs[0].title !== undefined)){
                            res.json({
                                error: false,  
                                message: '',
                                singer,
                                listsong: songs
                            });
                        }else{
                            res.json({
                                error: true,
                                message: 'Không tìm thấy bài hát'
                            });
                        }    
                    });
                }          
            });
        }
    }
}

module.exports = new SearchController;