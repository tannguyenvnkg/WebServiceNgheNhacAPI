const mongoose = require('mongoose');
const Song = require('../models/Song');
const Category = require('../models/Category');
const Singer = require('../models/Singer');
const Playlist = require('../models/Playlist');
const {mutipleMongooseToObject} = require('../../util/mongoose');
const {mongooseToObject} = require('../../util/mongoose');
const {removeNewObjectID} = require('../../util/RemoveNewObjectID');
const {getFileName} = require('../../util/getFileNameFromLink');

// delete file
const {deleteSong} = require('../../util/deleteFile');
const {deleteSongImage} = require('../../util/deleteFile');
const {deleteSingerImage} = require('../../util/deleteFile');
const {deletePlaylistImage} = require('../../util/deleteFile');

class ManageController {
    //===================================================SONG==================================================
    // [GET] /manage/
    listSong(req, res) {
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
    //[GET] /manage/Song/:idSong
    detailSong(req, res){
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

    //[PUT] /manage/Song/editSong
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
                                res.redirect('/manage/Song/'+ req.body.idSong);
                            })
                            .catch(function(err){
                                req.session.messageUpdateSong = 'Sửa bài hát Thất bại';
                                res.redirect('/manage/Song/'+ req.body.idSong);
                            });       
                    }else{
                        res.json({error: true, message: 'Sửa thất bại', error_message: err.message});
                    }
                });
            });
        });
    }

    // [DELETE] /Song/:idSong
    deleteSong(req,res){
        Song.findOneAndDelete({_id: req.params.idSong}, function(err, song){
            if(err) return err.message;
            else{
                const fileSongMusic = getFileName(song.link);
                const fileSongImage = getFileName(song.image);
                deleteSong(fileSongMusic);
                deleteSongImage(fileSongImage);
                res.redirect('/manage/Song/');
            }
        });
    }
    //===========================================================================================================

    //===================================================SINGER==================================================
    // [GET] /manage/Singer
    listSinger(req, res) {
        if(req.session && (req.session.username == undefined)) res.redirect('/admin/login'); // if admin still not login
        else { 
            Singer.find({}).exec(function(err, singers) {
                res.render('manage/ManageSinger/manageSinger', {
                    isLogin: true,
                    singers: mutipleMongooseToObject(singers),
                }); 
            });
        }
    }
    //[GET] /manage/Singer/:idSinger
    detailSinger(req, res){
        var message = '';
        if(req.session.messageUpdateSinger !== undefined)
            message = req.session.messageUpdateSinger 
        if(req.session && (req.session.username == undefined)) res.redirect('/admin/login'); // if admin still not login
        Singer.findOne({_id: req.params.idSinger}).exec(function(err, singer) { // get id singer to edit
            if(singer === undefined) res.redirect('/manage/singer') // reload current website if singer is undefined
            else{
                res.render('manage/ManageSinger/editSinger',{
                    isLogin: true,
                    singer: mongooseToObject(singer),
                    message
                });
            }
        });
    }

    //[PUT] /Manage/Singer/editSinger
    editSinger(req, res){
        Singer.updateOne({_id: req.body.idSinger}, req.body)
            .then(function(){
                req.session.messageUpdateSinger = 'Sửa ca sĩ thành công';
                res.redirect('/manage/Singer/'+ req.body.idSinger);
            })
            .catch(function(err){
                req.session.messageUpdateSinger = 'Sửa ca sĩ Thất bại';
                res.redirect('/manage/Singer/'+ req.body.idSinger);
            });    
    }
    // [DELETE]  /manage/Singer/:idSinger
    deleteSinger(req,res){
        Singer.findOneAndDelete({_id: req.params.idSinger}, function(err, singer){
            if(err) return err.message;
            else{
                const fileSingerImage = getFileName(singer.image);
                deleteSingerImage(fileSingerImage);

                // delete singer in song
                Song.updateMany({'singer._id': singer._id}, {$pull: {singer: {_id: singer._id}}},{multi:true},function(err,songs){
                    res.redirect('/manage/Singer/');
                }); 
            }
        });
    }
    //================================================================================================================

    //=============================================     Playlist    ==================================================
    // [GET] /manage/Playlist
    listPlaylist(req, res) {
        if(req.session && (req.session.username == undefined)) res.redirect('/admin/login'); // if admin still not login
        else { 
            Playlist.find({}).exec(function(err, playlists) {
                res.render('manage/ManagePlaylist/managePlaylist', {
                    isLogin: true,
                    playlists: mutipleMongooseToObject(playlists),
                }); 
            });
        }
    }

    //[GET] /manage/Playlist/:idPlaylist
    detailPlaylist(req, res){
        var message = '';
        if(req.session.messageUpdatePlaylist !== undefined)
            message = req.session.messageUpdatePlaylist 
        if(req.session && (req.session.username == undefined)) res.redirect('/admin/login'); // if admin still not login
        Playlist.findOne({_id: req.params.idPlaylist}).exec(function(err, playlist) { // get id singer to edit
            if(playlist === undefined) res.redirect('/manage/playlist') // reload current website if singer is undefined
            else{
                res.render('manage/ManagePlaylist/editPlaylist',{
                    isLogin: true,
                    playlist: mongooseToObject(playlist),
                    message
                });
            }
        });
    }

    //[PUT] /manage/Playlist/editPlaylist
    editPlaylist(req, res){
        Playlist.updateOne({_id: req.body.idPlaylist}, req.body)
            .then(function(){
                req.session.messageUpdatePlaylist = 'Sửa playlist thành công';
                res.redirect('/manage/Playlist/'+ req.body.idPlaylist);
            })
            .catch(function(err){
                req.session.messageUpdatePlaylist = 'Sửa playlist Thất bại';
                res.redirect('/manage/Playlist/'+ req.body.idPlaylist);
            });    
    }
    
    // [DELETE]  /manage/Playlist/:idPlaylist
    deletePlaylist(req,res){
        Playlist.findOneAndDelete({_id: req.params.idPlaylist}, function(err, playlist){
            if(err) return err.message;
            else{
                const filePlaylistImage = getFileName(playlist.image);
                deletePlaylistImage(filePlaylistImage);

                // delete singer in song
                Song.updateMany({playlistid: playlist._id}, {$pull: {playlistid: playlist._id}},{multi:true},function(err,songs){
                    res.redirect('/manage/Playlist/');
                }); 
            }
        });
    }
    
    //================================================================================================================

    //=============================================     CATEGORY    ==================================================
    // [GET] /manage/Category
    listCategory(req, res) {
        if(req.session && (req.session.username == undefined)) res.redirect('/admin/login'); // if admin still not login
        else { 
            Category.find({}).exec(function(err, categories) {
                res.render('manage/ManageCategory/manageCategory', {
                    isLogin: true,
                    categories: mutipleMongooseToObject(categories),
                }); 
            });
        }
    }

    //[GET] /manage/Category/:idCategory
    detailCategory(req, res){
        var message = '';
        if(req.session.messageUpdateCategory !== undefined)
            message = req.session.messageUpdateCategory 
        if(req.session && (req.session.username == undefined)) res.redirect('/admin/login'); // if admin still not login
        Category.findOne({_id: req.params.idCategory}).exec(function(err, category) { // get id singer to edit
            if(category === undefined) res.redirect('/manage/category') // reload current website if singer is undefined
            else{
                res.render('manage/ManageCategory/editCategory',{
                    isLogin: true,
                    category: mongooseToObject(category),
                    message
                });
            }
        });
    }

    //[PUT] /manage/Category/editCategory
    editCategory(req, res){
        Category.updateOne({_id: req.body.idCategory}, req.body)
            .then(function(){
                req.session.messageUpdateCategory = 'Sửa thể loại thành công';
                res.redirect('/manage/Category/'+ req.body.idCategory);
            })
            .catch(function(err){
                req.session.messageUpdateCategory = 'Sửa thể loại Thất bại';
                res.redirect('/manage/Category/'+ req.body.idCategory);
            });    
    }

    // [DELETE]  /manage/Category/:idCategory
    deleteCategory(req,res){
        Category.findOneAndDelete({_id: req.params.idCategory}, function(err, category){
            if(err) return err.message;
            else{
                // delete category in song
                Song.updateMany({'category._id': category._id}, {$pull: {category: {_id: category._id}}},{multi:true},function(err,songs){
                    res.redirect('/manage/Category/');
                }); 
            }
        });
    }
    //================================================================================================================
}

module.exports = new ManageController;