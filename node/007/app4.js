const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

// https://nodejs.org/dist/latest-v16.x/docs/api/querystring.html
const server = http.createServer(function(req, res){
    console.log('server가 구동중입니다.');
    // get과 post 둘 다 테스트
    if(req.method == 'GET') {
        fs.readFile('./test.html', 'utf8', (err, data) => {
            console.log(err);
            //writeHead대신 setHeader를 사용하여 type을 보낼 수 있음
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(data);
            res.end();
        }) 
    } else if(req.method =='POST') {
        req.on('data', function(chunk) { 
            console.log(chunk.toString()); 
            let data = querystring.parse(chunk.toString()); 
            console.log(data);
            res.writeHead(200, {'Content-Type':'text/html'});
            res.write(`id : ${data.id_value}, pw : ${data.pw_value}`);
            res.end(); 
        }); 
    }
});

server.listen(8080);