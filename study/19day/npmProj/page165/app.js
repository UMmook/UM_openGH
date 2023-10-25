// page165_app.js p281

const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

// nunjucks
const nunjucks = require('nunjucks');
app.set('view engine', 'html');
nunjucks.configure('views', 
    {
        express: app,
        watch: true
    }
);

const indexRouter = require('./routes/home');
const userRouter = require('./routes/user');

app.use('/', indexRouter);       // ~:3000/
app.use('/user', userRouter);    // ~:3000/user

app.use((req, res, next) => {
    res.status(404).send("NOT FOUND!");
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log("Nunjucks 적용 서버가 시작 됨.");
});