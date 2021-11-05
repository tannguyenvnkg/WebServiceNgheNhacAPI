const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const sessions = require('express-session');

const db = require('./config/db/index');
// connect database
db.connect();
const route = require('./routes');

const app = express();
const port = 3000;

//session
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "teamusicsecretkey",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false 
}));
//=========================================

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public'))); // check public directory

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

//template engine
app.engine('hbs', handlebars({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(path.join(__dirname, 'resources','views')));

// route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

