const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/MusicDatabase',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('connect successfully!!!');
    } catch (error) {
        console.log('failure!!!');
    }
}

module.exports = { connect };