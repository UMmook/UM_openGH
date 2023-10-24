const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    // res.send('<p>Hello, Express^^zz!</p>');
    res.sendFile(path.join(__dirname, 'page161.html'));
});

app.listen(app.get('port'), () => {
    console.log("Express 서버 시작");
});