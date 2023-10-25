// page162.js

const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
    console.log('모든 요청에 대응');
    next();
});

app.use('/', (req, res, next) => {
    console.log('모든 요청에 대응');
    next();
});

app.get('/', (req, res, next) => {
    console.log('get /요청에 대응');
    res.send('<p>home get</p>');
    next();
});

app.get('/about', (req, res, next) => {
    console.log('get /about 요청에 대응');
    res.send('<p>about</p>');
    next();
}, (req, res) => { throw new Error('에러가 발생해서 에러 처리 부분으로 넘어갑니다.'); });

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log("Express 서버 시작 p162");
});