const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    categoryname: { type: String, unique: false , require: true},
    imageCategory : String
 }, 
    {
        versionKey: false
    }
 );
module.exports = Category;