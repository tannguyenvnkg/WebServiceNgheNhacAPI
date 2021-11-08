
const {mutipleMongooseToObject} = require('../../../util/mongoose');

const Song = require('../../models/Song');
const Category = require('../../models/Category');
const Singer = require('../../models/Singer');
const Playlist = require('../../models/Playlist');

class InsertSongController {

    // [GET] / 
    index(req, res) {
       res.json({error: true, message: 'Notthing Happened hihihi!!!!'});
    }

    // [GET] /insertSong 
    insertSong(req, res) {
        if(req.session && (req.session.username == undefined)) res.redirect('/admin/login'); // if admin still not login
        Category.find({}, function(err, categories) {
            Singer.find({}, function(err, singers) {
                Playlist.find({}, function(err, playlists) {
                    res.render('insertlayouts/InsertSong',{
                        categories: mutipleMongooseToObject(categories),
                        singers: mutipleMongooseToObject(singers),
                        playlists: mutipleMongooseToObject(playlists)
                    })
                });
            });
        });
    }

    // [POST] /insertSongPost 
    insertSongPost(req, res){
        console.log('path: ' + req.files[0].filename);
        Category.find({_id: {$in: req.body.categoryId}}, function(err, categories){
            Singer.find({_id: {$in: req.body.singerId}}, function(err, singers){
                Playlist.find({_id: {$in: req.body.playlistId}},'_id', function(err, playlists){
                    if(!err)
                    {
                        req.body.category = categories;
                        req.body.singer = singers;
                        req.body.playlistid = req.body.playlistId;
                        req.body.image = req.protocol + '://' + req.headers.host + '/image/imageSong/' + req.files[0].filename;
                        req.body.link = req.protocol + '://' + req.headers.host + '/streamsong/' + req.files[1].filename;

                        const song = new Song(req.body);
                        song.save()
                            .then(function(){
                                res.json( {status : 'Thêm bài hát thành công!!!'})
                            })
                            .catch(function(err){
                                res.json({ status: 'Thêm Song thất bại\n ', error_message: err.message })
                            });       
                    }else{
                        res.json({error: true, message: 'thêm thất bại', error_message: err.message});
                    }
                });
            });
        });
    }
}

module.exports = new InsertSongController;