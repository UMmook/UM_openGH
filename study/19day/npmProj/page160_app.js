const express = require('express');

const app = express();
app.set('port', process.env.PORT || 3000);

app.get('/', (req, res) => {
    res.send('<p>Hello, Express^^zz!</p>');
});

app.listen(app.get('port'), () => {
    console.log("Welcome, Express");
});