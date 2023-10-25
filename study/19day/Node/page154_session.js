const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const session = {};

// cookie => A=B;C=D => {A:B, C:D}
const parseCookies = (cookie = "") =>
    cookie.split(";")
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
        acc[k.trim()] = decodeURIComponent(v);
        return acc;
    }, {});

http.createServer(
    async(req, res) => {
        const cookies = parseCookies(req.headers.cookie);

        if(req.url.startsWith('/login')){
            const url = new URL(req.url, 'http://127.0.0.1:8080');
            const name = url.searchParams.get('name');
            const expires = new Date();
            expires.setMinutes(expires.getMinutes() + 5);   // 쿠키 저장[로그인 저장] 시간을 5분으로 정함
            const uniqueInt = Date.now();
            session[uniqueInt] = {name, expires};

            res.writeHead(302, {
               Location: '/',
               'Set-Cookie':`session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; path=/` 
            });
            res.end();
        } else if(cookies.session && session[cookies.session].expires > new Date()) {
            res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
            res.end(`${session[cookies.session].name}님 쿠키 확인 되었어요, 반가워요`);
        } else { // html contents
            try{
                const data = await fs.readFile(path.join('page154.html'));
                res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
                res.end(data);
            } catch(err) {
                res.writeHead(500, {'Content-type':'text/html; charset=utf-8'});
                res.end(err.message);
            }
        }
    }
).listen(8080, () => { console.log('서버가 시작되요.'); });