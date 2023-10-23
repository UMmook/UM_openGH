// const http = require('http');
// http.createServer(
//     (req, res) => {
//         res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
//         res.write('<h1>Title test</h1>')
//         res.write('<p>내용 문단 1</p>')
//         res.write('<p>내용 문단 2</p>')
//         res.end()
// }).listen(
//     8080, () => {
//         console.log('서버 로그: 포트 8080에서 대기 중이다.');
//         // http://127.0.0.1:8080/
//     }
// );

//-----------------------------------------------------------------------------

// const http = require('http');
// const server = http.createServer(
//     (req, res) => {
//         res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
//         res.write('<h1>Title test</h1>')
//         res.write('<p>내용 문단 1</p>')
//         res.write('<p>내용 문단 2</p>')
//         res.end()
//     });
// server.listen(8080);
// server.on('listening',
//     () => { console.log('서버 로그: 포트 8080에서 대기 중이다.'); }
// )
// server.on('error',
//     (error) => { console.log(`서버 로그: ${error}`); }
// )

//-----------------------------------------------------------------------------

const mes1 = '<p>message 1</p>';
const mes2 = '<p>message 2</p>';
let control = false;

const http = require('http');
const server = http.createServer(
    (req, res) => {
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.write('<h1>Title test</h1>')
        res.write('<p>내용 문단 1</p>')
        res.write('<p>내용 문단 2</p>')
        if (control) { res.write(mes1); } else { res.write(mes2); }
        res.end()
    });
server.listen(8080);
server.on('listening',
    () => { console.log('서버 로그: 포트 8080에서 대기 중이다.'); }
)
server.on('error',
    (error) => { console.log(`서버 로그: ${error}`); }
)
