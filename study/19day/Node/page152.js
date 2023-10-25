const http = require('http');
const fs = require('fs').promises;

http.createServer(
    async (req, res) => {
        try{
            const data = await fs.readFile('./page152.html');
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.end(data);
        } catch(e) {
            console.log(`서버 로그: ${e}`);
            res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
            res.end(e.message);
        }
}).listen(8080, () => { console.log('서버 로그: 포트 8080에서 대기 중이다.'); });
// http://127.0.0.1:8080/