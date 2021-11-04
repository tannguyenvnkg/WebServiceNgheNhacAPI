const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Singer = require('./SingerSchema');
const ListSong = require('./SongSchema');

const Album = new Schema({
    albumname: String,
    singer: [Singer],
    listsong: [ListSong]
}, 
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = Album;