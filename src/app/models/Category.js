const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CategorySchema = require('../models/schema/CategorySchema')

module.exports = mongoose.model('Category', CategorySchema);
