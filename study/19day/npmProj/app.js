const express = require('express');
const path = require('path');

const nunjucks = require('nunjucks');

const connect = require('./schemas');

const app = express();
app.set('port', process.env.PORT || 3002);
app.set('view engine', 'html');
nunjucks.configure('views', { express: app, watch: true });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);
const commentsRouter = require('./routes/comments');
app.use('/comments', commentsRouter);

app.use(express.static(path.join(__dirname, 'public')));

connect();

app.listen(app.get('port'), () => { 
    console.log('3002번에서 서버 대기 중'); 
});