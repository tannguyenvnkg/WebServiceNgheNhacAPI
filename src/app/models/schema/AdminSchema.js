const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Admin = new Schema({
    // _id: String,
    username: String,
    password: String,
    name : String
 }, 
    {
        versionKey: false
    }
 );
 

module.exports = Admin;