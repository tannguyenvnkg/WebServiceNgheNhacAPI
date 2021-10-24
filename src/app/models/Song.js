const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SongSchema = require('../models/schema/SongSchema')

module.exports = mongoose.model('Song', SongSchema);
