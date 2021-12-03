const Singer = require('../models/Singer');
const Song = require('../models/Song');

const SongModel = 1;
const SingerModel = 2;
//function
async function getModel (ModelName, text) {
    try {
        if (ModelName == SongModel) {
            const songs = await Song.aggregate([
                {
                    '$search': {
                        'index': 'SearchSongTitle',
                        'text': {
                            'query': text.toString(),
                            'path': 'title',
                            'fuzzy': {
                                maxEdits: 2,
                                prefixLength: 3
                            }
                        }
                    }
                },
            ]);
            return songs;
        } else if (ModelName == SingerModel) {
            const singers = await Singer.aggregate([
                {
                    '$search': {
                        'index': 'SearchSingerName',
                        'text': {
                            'query': text.toString(),
                            'path': 'singername',
                            'fuzzy': {
                                maxEdits: 2,
                                prefixLength: 3
                            }
                        }
                    }
                },
            ]);
            return singers;
        }
    } catch (error) {
        console.log(error);
        res.json({ error: true, message: error.message});
    }
}

class TestController {

    // [GET] /test?q='values'
    async index(req, res) {
        try {
            if(!req.query.q) {
                res.json({ error:true, message: 'Không có tham số truyền vào' });
            }else{
                const text = req.query.q;
                const singerIds = await Singer.find({$text: {$search: text}}, '_id');
                if(singerIds.length != 0){ // found singer
                    const singers = await getModel(SingerModel,text); // list singer
                    const listsong1 = await getModel(SongModel,text); // this listsong is found from req.query.q
                    // const listsong2 = await Song.find({'singer._id': {$in: singerIds}}); // this listsong is found from singerID
                    // const listSong = listsong1.concat(listsong2);
                    res.json({
                        error: false,  
                        message: '',
                        singer: singers,
                        listSong: listsong1
                    });
                }else{
                    const listSong = await getModel(SongModel,text)
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
            console.log(error)
            res.send(error.message)
        }
    }

    async TestArrayWithSingerID(req, res){
        try {
            console.log(req.body);
            const singer = await Singer.find({_id: {$in: req.body.listid}});
            
            console.log(singer);
            if(singer.length !== 0){
                res.json({ error:false, singer });
            }
            else{
                res.json({ error:true, message: 'không tìm thấy singer' });
            }
        } catch (error) {
            res.json({ error:true, message: error.message, note: 'ID ca sĩ có thể không hợp lệ' });
        }
    }
}

module.exports = new TestController;