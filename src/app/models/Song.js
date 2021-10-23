const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Category = new Schema({
   _id: String,
   categoryname: String 
});


const Song = new Schema({
    _id: Schema.Types.ObjectId,
    image: String,
    link: String,
    title: String,
    category: {type: [Category], index: true},
    description: String
});

module.exports = mongoose.model('Song', Song);
