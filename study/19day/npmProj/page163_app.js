// page163_app.js p249

const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

// morgan
app.use(morgan('dev'));
// static
app.use('/', express.static(path.join(__dirname, 'public')));
// body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// dotenv, cookieParser
app.use(cookieParser(process.env.COOKIE_SECRET));
// express-session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false
    },
    name: 'session-cookie'
}));