const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Playlist = require('./PlaylistSchema');

const User = new Schema({
    _id: String,
    username: String,
    password: String,
    name: String,
    sex: Boolean,
    email: String,
    followPlaylist: [Playlist]
 }, 
    {
        versionKey: false
    }
);
 

module.exports = User;