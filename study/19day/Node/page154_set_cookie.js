const http = require('http');

http.createServer(
    (req, res) => {
        console.log(req.url, req.headers.cookie);
        res.writeHead(200, {'Set-Cookie':'mycookie=test'});
        res.end("let's use cookie ");
    }
).listen(8080, () => { console.log('서버가 시작 되었어요'); });