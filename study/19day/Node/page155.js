const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    console.log(`Master ID: ${process.pid}`);
    for(let i = 0; i < numCPUs; i += 1) { cluster.fork(); }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었다.`);
        console.log('code', code, 'signal', signal);
        cluster.fork();
    });
} else {    // worker
    http.createServer(
        (req, res) => {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write("<p>cluster test</p>");
            res.end();
            setTimeout(() => { process.exit(1); }, 1000);
        }
    ).listen(8080);
    console.log(`${process.pid}번 워커가 시작되었다.`);
}