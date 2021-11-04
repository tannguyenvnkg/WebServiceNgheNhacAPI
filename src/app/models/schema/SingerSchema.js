const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Singer = new Schema({
    singername: { type: String, unique: false } ,
    image: String 
 }, 
    {
        versionKey: false
    }
);
 
module.exports = Singer;