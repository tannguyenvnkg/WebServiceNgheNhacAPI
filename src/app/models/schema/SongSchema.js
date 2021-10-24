const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = require('./CategorySchema');
const Singer = require('./SingerSchema');

const Song = new Schema({
    _id: Schema.Types.ObjectId,
    image: String,
    link: String,
    title: String,
    category: [Category],
    singer: [Singer],
    playlistid: [String]
}, 
    {
        versionKey: false
    }
);

module.exports = Song;