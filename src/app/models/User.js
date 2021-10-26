const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = require('../models/schema/UserSchema')

module.exports = mongoose.model('User', UserSchema);