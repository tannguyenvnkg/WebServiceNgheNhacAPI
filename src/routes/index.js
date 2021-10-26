const searchSongRouter = require('./SearchSong.route');
const ListSongRouter = require('./ListSong.route');
const signInRouter = require('./SignIn.route');

// sau này sẽ xóa
const InsertRouter = require('./Insert.route');


function route(app){
    
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/searchSong',searchSongRouter);
    app.use('/ListSong',ListSongRouter);
    //app.use('/Insert',InsertRouter); // xóa dòng này
    app.use('/signIn',signInRouter);
}

module.exports = route;