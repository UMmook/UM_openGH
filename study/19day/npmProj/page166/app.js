const express = require('express');
const {sequelize} = require('./models');

const path = require('path');
const nunjucks = require('nunjucks');
const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const commentsRouter = require('./routes/comments');
const exp = require('constants');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {express: app, watch: true});
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/comments', commentsRouter);

sequelize.sync({force: false}).then(
    () => { console.log("DB 연결 성공"); }
).catch(
    (err) => { console.log(err); }
);

app.listen(app.get('port'),
    () => { console.log("DB 접속을 하는 서버가 시작 되었습니다."); }
);