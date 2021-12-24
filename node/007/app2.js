const http = require('http');
const server = http.createServer(function(req, res){
    console.log('server가 구동중입니다.');
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    res.write(`
    <h1>hello world</h1>
    <p>hello world</p>
    `);
    res.end();
});

server.listen(8080);