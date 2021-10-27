const searchSongRouter = require('./SearchSong.route');
const ListSongRouter = require('./ListSong.route');

// sau này sẽ xóa
const signInRouter = require('./SignIn.route');

// sau này sẽ xóa
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
   
    app.use('/signIn',signInRouter);
    app.use('/StreamSong',StreamSongRouter);
    app.use('/Insert',InsertRouter); 
    app.use('/Image',ImageRouter); 
}

module.exports = route;