const http = require('http');
http.createServer(
    (req, res) => {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.write('<h1>Title test</h1>')
        res.write('<p>내용 문단 1</p>')
        res.write('<p>내용 문단 2</p>')
        res.end()
}).listen(8080, () => { console.log('서버 로그: 포트 8080에서 대기 중이다.'); });
// http://127.0.0.1:8080/

http.createServer(
    (req, res) => {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.write('<h1>Title test</h1>')
        res.write('<p>내용 문단 1</p>')
        res.write('<p>내용 문단 2</p>')
        res.end()
}).listen(8081, () => { console.log('서버 로그: 포트 8081에서 대기 중이다.'); });
// http://127.0.0.1:8081/