const http = require('http');
const fs = require('fs');
const app = http.createServer(function(request,response){
    let url = request.url;
    console.log(`request : ${request}`)
    console.log(`request : ${request.url}`)
    if (request.url == '/') {
        url = '/index.html';
    } else if (request.url == '/blog'){
        url = '/blog.html'
    } else if (request.url == '/favicon.ico'){
        return response.writeHead(404);
    } else {
        response.writeHead(404);
        response.end('Not found');
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url))
});

app.listen(3000);