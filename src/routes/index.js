const searchSongRouter = require('./SearchSong.route');
const ListSongRouter = require('./ListSong.route');

// sau này sẽ xóa
const InsertRouter = require('./Insert.route');


function route(app){
    
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/searchSong',searchSongRouter);
    app.use('/ListSong',ListSongRouter);
    app.use('/Insert',InsertRouter); // xóa dòng này
}

module.exports = route;