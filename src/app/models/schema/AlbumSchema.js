const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Singer = require('./SingerSchema');
const ListSong = require('./SongSchema');

const Album = new Schema({
    // _id: String,
    albumname: String,
    singer: [Singer],
    listsong: [ListSong]
}, 
    {
        versionKey: false
    }
);
 

module.exports = Album;