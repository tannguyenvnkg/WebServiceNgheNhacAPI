const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Singer = new Schema({
    // _id: String,
    singername: { type: String, unique: false } ,
    image: String 
 }, 
    {
        versionKey: false
    }
);
 

module.exports = Singer;