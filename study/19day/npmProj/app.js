// page162.js

const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

// app.use(
//     (req, res, next) => {
//         console.log('모든 요청에 대응');
//         next();
//     }
// );

app.get('/', (req, res) => {
    (req, res) => {
        console.log('get 요청에 대응');
        res.send('<p>/를 요청 했네요</p>');
        // next();
    }
});

app.listen(app.get('port'), () => {
    console.log("Express 서버 시작");
});