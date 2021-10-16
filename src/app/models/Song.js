const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Song = new Schema({
    _id: Schema.Types.ObjectId,
    image: String,
    link: String,
    title: String 
});

module.exports = mongoose.model('Song', Song);
