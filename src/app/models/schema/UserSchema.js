const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Playlist = require('./PlaylistSchema');

const User = new Schema({
    username: String,
    password: String,
    name: String,
    sex: Boolean,
    email: String,
    resetCode: String,
    followPlaylist: [Playlist]
 }, 
    {
        versionKey: false
    }
);

module.exports = User;
