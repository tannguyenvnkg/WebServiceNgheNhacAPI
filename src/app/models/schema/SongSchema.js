const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = require('./CategorySchema');
const Singer = require('./SingerSchema');

const Song = new Schema({
    image: String,
    link: String,
    title: String,
    category: [Category],
    singer: [Singer],
    playlistid: [String],
    albumid: [String]
}, 
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = Song;