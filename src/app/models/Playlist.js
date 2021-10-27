const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlaylistSchema = require('./schema/PlaylistSchema')

module.exports = mongoose.model('Playlist', PlaylistSchema);
