
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
                    
                    req.body.category = categories;
                    req.body.singer = singers;
                    req.body.playlistid = playlists;
                    req.body.image = req.headers.host + '/image/imageSong/' + req.files[0].filename;
                    req.body.link = req.headers.host + '/streamsong/' + req.files[1].filename;

                    const song = new Song(req.body);
                    song.save()
                        .then(function(){
                            res.json( {status : 'Thêm bài hát thành công!!!'})
                        })
                        .catch(function(err){
                            res.json({ status: 'Thêm Song thất bại\n ', error_message: err.message })
                        })       
                });
            });
        });
        // console.log('req.body.categoryId : ' + req.body.categoryId);
        // req.body.image = req.headers.host + '/image/imageSong/' + req.file.filename;
        // Category.findOne({_id: req.body.categoryId}, function (err, category) {
        //     req.body.category = category; 
        //     const Song = new Song(req.body);
        //     Song.save()
        //         .then(function(){
        //             res.json( {status : 'Thêm Song thành công!!!'})
        //         })
        //         .catch(function(err){
        //             res.json({ status: 'Thêm Song thất bại\n ', error_message: err.message })
        //         })       
        // })
    }
}

module.exports = new InsertSongController;