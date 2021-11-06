const Song = require('../models/Song');
const Category = require('../models/Category');
const Singer = require('../models/Singer');
const Playlist = require('../models/Playlist');
const {mutipleMongooseToObject} = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');
const {removeNewObjectID} = require('../../util/RemoveNewObjectID');

class ManageController {
    // [GET] /manage/
    index(req, res) {
        if(req.session && (req.session.username == undefined)) res.redirect('/admin/login'); // if admin still not login
        else { 
            Song.find({}).exec(function(err, songs) {
                res.render('manage/ManageSong/manageSong', {
                    isLogin: true,
                    songs: mutipleMongooseToObject(songs),
                }); 
            });
        }
    }
    //[GET] /manage/edit/:idSong
    edit(req, res){
        var message = '';
        if(req.session.messageUpdateSong !== undefined)
            message = req.session.messageUpdateSong 
        if(req.session && (req.session.username == undefined)) res.redirect('/admin/login'); // if admin still not login
        Song.findOne({_id: req.params.idSong}).exec(function(err, song) { // get id song to edit
            if(song === undefined) res.redirect('/manage') // reload current website if song is undefined
            else{
                Category.find({}, function(err, categories) {
                    Singer.find({}, function(err, singers) {
                        Playlist.find({}, function(err, playlists) {
                            const songCategories = song.category
                            const singerInSong = song.singer
                            res.render('manage/ManageSong/editSong',{
                                isLogin: true,
                                categories: mutipleMongooseToObject(categories),
                                singers: mutipleMongooseToObject(singers), 
                                playlists: mutipleMongooseToObject(playlists),
                                song: mongooseToObject(song),
                                message,
                                helpers: {
                                    checkSong: function(id){ // set checked for checkbox
                                        const idCategorySong = removeNewObjectID(id.toString());
                                        if(songCategories.filter(s => s._id == idCategorySong).length > 0){ // true if category's id  is in this song
                                            return 'checked';
                                        }
                                        else return '';
                                    },
                                    checkSinger: function(id){ // set checked for checkbox
                                        const idSinger = removeNewObjectID(id.toString());
                                        if(singerInSong.filter(s => s._id == idSinger).length > 0){ // true if singer's id  is in this song
                                            return 'checked';
                                        }
                                        else return '';
                                    },
                                    checkPlaylist: function(id){
                                        return song.playlistid.indexOf(id) !== -1 ? 'checked' : '';
                                    }
                                }
                            });
                        });
                    });
                });
            }
        });
    }

    //[PUT] /manage/edit/editSong
    editSong(req, res){
        Category.find({_id: {$in: req.body.categoryId}}, function(err, categories){
            Singer.find({_id: {$in: req.body.singerId}}, function(err, singers){
                Playlist.find({_id: {$in: req.body.playlistId}},'_id', function(err, playlists){
                    if(!err)
                    {
                        req.body.category = categories;
                        req.body.singer = singers;
                        req.body.playlistid = req.body.playlistId;

                        Song.updateOne({_id: req.body.idSong}, req.body)
                            .then(function(){
                                req.session.messageUpdateSong = 'Sửa bài hát thành công';
                                res.redirect('/manage/edit/'+ req.body.idSong);
                            })
                            .catch(function(err){
                                req.session.messageUpdateSong = 'Sửa bài hát Thất bại';
                                res.redirect('/manage/edit/'+ req.body.idSong);
                            });       
                    }else{
                        res.json({error: true, message: 'Sửa thất bại', error_message: err.message});
                    }
                });
            });
        });
    }
}

module.exports = new ManageController;