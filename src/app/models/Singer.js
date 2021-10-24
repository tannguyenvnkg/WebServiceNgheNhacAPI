const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SingerSchema = require('../models/schema/SingerSchema')

module.exports = mongoose.model('Singer', SingerSchema);
