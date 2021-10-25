const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    categoryname: { type: String, unique: true , require: true} 
 }, 
    {
        versionKey: false
    }
 );
 

module.exports = Category;