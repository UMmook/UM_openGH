// page164_app.js p265

const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

const indexRouter = require('./routes/home');
const userRouter = require('./routes/user');

app.use('/', indexRouter);       // ~:3000/
app.use('/user', userRouter);    // ~:3000/user

app.use((req, res, next) => {
    res.status(404).send("NOT FOUND!");
});

app.listen(app.get('port'), () => {
    console.log("Router 적용 서버가 시작 됨.");
});