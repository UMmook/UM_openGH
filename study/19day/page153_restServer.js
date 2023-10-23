const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const users = {}; // 이순신, 안중근

http.createServer(
    async (req, res) => {
        try{
            if(req.method === 'GET'){ // 8080/, 8080/about
                if(req.url === '/'){ // 8080/
                    console.log("/진입");
                    const data = await fs.readFile(path.join(__dirname, 'page153_restFront.html'));
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    return res.end(data);
                } else if(req.url === '/about'){ // 8080/about
                    const data = await fs.readFile(path.join(__dirname, 'page153_about.html'));
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    return res.end(data);
                } else if(req.url === '/users'){
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    return res.end(JSON.stringify(users));
                }
                // try{} /도 about도 아닌 처리 : 생략
            } else if (req.method === 'POST'){
                if(req.url === '/user'){

                }
            } else if (req.method === 'PUT'){
                if(req.url.startsWith('/user/')){ // '/user/' + key
                    
                }
            } else if (req.method === 'DELETE'){
                if(req.url.startsWith('/user/')){ // '/user/' + key
                    
                }
            }
            // p247 중첩 if문 대신 축소해서 사용하는 방법 (6장)
            // app.get('/'){}
            // app.post('/user'){}
        } catch(err) {
            console.log(err);
            res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
            res.end(err.message);
        }
    }
).listen(8080, () => { console.log('포트 8080에서 서버 시작 됨'); });