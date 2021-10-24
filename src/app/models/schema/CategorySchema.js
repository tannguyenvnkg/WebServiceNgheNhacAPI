const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    _id: String,
    categoryname: { type: String, unique: true } 
 }, 
    {
        versionKey: false
    }
 );
 

module.exports = Category;