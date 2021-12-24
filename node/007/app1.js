const http = require('http');
const server = http.createServer(function(req, res){
    console.log('server가 구동중입니다.');
    console.log(req.headers);
    console.log(req.method);
    console.log(req.url);
    res.write('hello world');
    res.end();
});

server.listen(8080);