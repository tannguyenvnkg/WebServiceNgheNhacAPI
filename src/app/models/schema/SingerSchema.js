const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Singer = new Schema({
    singername: { type: String, text: true } ,
    image: String 
 }, 
    {
        versionKey: false
    }
);
Singer.index({singername: 'text'}); // create index for searching
module.exports = Singer;