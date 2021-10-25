const searchSongRouter = require('./SearchSong.route');
const ListSongRouter = require('./ListSong.route');
const StreamSongRouter = require('./StreamSong.route');
const InsertRouter = require('./Insert.route');
const ImageRouter = require('./Image.route');

function route(app){
    
    // web
    app.get('/', (req, res) => {
        res.render('home');
    });

    //json 
    app.use('/searchSong',searchSongRouter);
    app.use('/ListSong',ListSongRouter);
    app.use('/StreamSong',StreamSongRouter);
    app.use('/Insert',InsertRouter); 
    app.use('/Image',ImageRouter); 
}

module.exports = route;