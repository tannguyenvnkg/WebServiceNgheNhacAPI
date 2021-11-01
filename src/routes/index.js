const searchSongRouter = require('./SearchSong.route');
const ListSongRouter = require('./ListSong.route');


const logInRouter = require('./LogIn.route');
const signUpRouter = require('./SignUp.route');
const loadPlayList = require('./LoadPlayList.route');

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
   
    app.use('/LogIn',logInRouter);
    app.use('/SignUp',signUpRouter);
    app.use('/getPlayList',loadPlayList);

    app.use('/StreamSong',StreamSongRouter);
    app.use('/Insert',InsertRouter); 
    app.use('/Image',ImageRouter); 
}

module.exports = route;