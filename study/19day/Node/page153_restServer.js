const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const users = {}; // 이순신, 안중근

http.createServer(
    async (req, res) => {
        try{
            // p247 중첩 if문 대신 축소해서 사용하는 방법 (6장)
            // app.get('/'){}
            // app.post('/user'){}
            if(req.method === 'GET'){ // 8080/, 8080/about
                if(req.url === '/'){ // 8080/
                    console.log("/진입");
                    //const data = await fs.readFile(path.join(__dirname, 'page153_restFront.html'));
                    const data = await fs.readFile('page153_restFront.html');
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    return res.end(data);
                } else if(req.url === '/about'){ // 8080/about
                    console.log("/about진입");
                    const data = await fs.readFile(path.join(__dirname, 'page153_about.html'));
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    return res.end(data);
                } else if(req.url === '/users'){
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    return res.end(JSON.stringify(users));
                }
                try{
                    const data = await fs.readFile(path.join(__dirname, req.url));
                    return res.end(data);
                } catch(err) {}
            } else if (req.method === 'POST'){
                console.log("이름 입력 했다");
                if(req.url === '/user'){
                    let body ='';
                    req.on('data', (data) => { 
                        body += data; 
                    });
                    return req.on('end', () => { 
                        console.log('POST: ', body);
                        const {name} = JSON.parse(body);
                        const id = Date.now();
                        users[id] = name;   // users {입력시간: '이순신', 입력시간: '안중근'}
                        res.writeHead(201, {'Content-Type':'text/html; charset=utf-8'});
                        res.end('등록 성공');
                    });
                }
            } else if (req.method === 'PUT'){
                if(req.url.startsWith('/user/')){ // '/user/' + key
                    const key = req.url.split('/')[2];
                    let body = '';
                    req.on('data', (data) => {
                        body += data;
                    });
                    return req.on('end', () => {
                        console.log('PUT: ', body);
                        users[key] = JSON.parse(body).name;
                        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                        res.end(JSON.stringify(users));
                    });
                }
            } else if (req.method === 'DELETE'){
                if(req.url.startsWith('/user/')){ // '/user/' + key
                    const key = req.url.split('/')[2];
                    delete users[key];
                    console.log('DELETE OK');
                    res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                    return res.end(JSON.stringify(users));
                }
            }
            res.writeHead(404);
            return res.end('NOT found');
        } catch(err) {
            console.log(err);
            res.writeHead(500, {'Content-Type':'text/html; charset=utf-8'});
            res.end(err.message);
        }
    }
).listen(8080, () => { console.log('포트 8080에서 서버 시작 됨'); });