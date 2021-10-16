const searchSongRouter = require('./SearchSong.route');
const ListSongRouter = require('./ListSong.route');

function route(app){
    
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/searchSong',searchSongRouter);
    app.use('/ListSong',ListSongRouter);
}

module.exports = route;