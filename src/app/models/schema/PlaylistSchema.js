const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = require('./CategorySchema');

const Playlist = new Schema({
    // _id: String,
    playlistname: String,
    image: String,
    category: Category // object
 }, 
    {
        versionKey: false,
        timestamps: true
    }
);
 

module.exports = Playlist;