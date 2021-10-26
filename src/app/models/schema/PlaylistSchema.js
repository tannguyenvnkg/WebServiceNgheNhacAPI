const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const Singer = require('./SingerSchema');
const Category = require('./CategorySchema');

const Playlist = new Schema({
    // _id: String,
    playlistname: String,
    // singer: Singer, // object
    image: String,
    category: Category // object
 }, 
    {
        versionKey: false
    }
);
 

module.exports = Playlist;