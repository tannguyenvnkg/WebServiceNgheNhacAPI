const User = require('../../models/User');
const Playlist = require('../../models/Playlist');
const {removeNewObjectID} = require('../../../util/RemoveNewObjectID');
class UpdateUserController{

    //[PUT] /updateuser?email="value"&name="value"&sex="value"
    index(req,res) {
        const email = req.query.email;
        const name = req.query.name;
        const sex = req.query.sex;
        User.findOne({ email : email}, function(err, user) {
            if(!err) {
                if(user === undefined) {
                    res.json({
                        error: true,
                        message : "Email này chưa tồn tại"
                    })
                }
                else {
                    user.name = name;
                    user.sex = sex;
                    user.save(function(err1) {
                        if(!err1) {
                            res.json({
                                error: false,
                                message : "Thay đổi thành công",
                                user
                            })
                        }
                        else{
                            console.log(err);
                        }
                    })
                }
            }
            else {
                console.log(err);
            }
        })
    } 

    //[PUT] /updateuser/AddLovePlaylist?userId='?'&playlistId='?'status='boolean'
    addLovePlaylist(req, res){
        const playlistId = req.query.playlistId;
        const userId = req.query.userId;
        const status = req.query.status.toLowerCase() === 'true';
        Playlist.findById(playlistId).exec(function(err, playlist){
            if(playlist === null || playlist === undefined){
                res.json({error: true, message: 'Playlist không tồn tại'});
            }
            else {
                if(status){ // add playlist to favorites list
                    var isAlreadyExistPlaylist = false; // if user has already added a playlist to their favorites playlist
                    User.findOne({_id: userId}).exec(function(err, user){
                        if(!user) res.json({error: true, message: 'User không tồn tại'});
                        else{
                            user.followPlaylist.forEach(function(playlist){ 
                                if(removeNewObjectID(playlist._id.toString()) === playlistId){
                                    isAlreadyExistPlaylist = true;
                                }
                            });

                            if(isAlreadyExistPlaylist){
                                res.json({error: true, message: 'Playlist này đã có trong mục ưa thích '});
                            }else{
                                User.findOneAndUpdate({ _id: userId }, {$push: {followPlaylist: playlist}}).exec(function(err, user){
                                    if(err) res.json({ error: true, message: err.message });
                                    // else if(user === undefined || user === null){
                                    //     res.json({ error: true, message: 'Người dùng không tồn tại' });
                                    // }
                                    else {
                                        User.findOne({ _id: userId }).exec(function(err, user){
                                            res.json({ error: false, message: 'Đã thêm vào playlist ưa thích', user});
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
                else{ // remove favorite playlist
                    User.findOneAndUpdate({ _id: userId }, {$pull: {followPlaylist: {_id: playlist._id}}}).exec(function(err, user){
                        if(err) res.json({ error: true, message: err.message });
                        else if(user === undefined || user === null){
                            res.json({ error: true, message: 'Người dùng không tồn tại' });
                        }else {
                            User.findOne({ _id: userId }).exec(function(err, user){
                                res.json({ error: false, message: 'Đã xóa khỏi playlist ưa thích', user});
                            });
                        }
                    });
                }
            }
        });
    }
}

module.exports = new UpdateUserController;