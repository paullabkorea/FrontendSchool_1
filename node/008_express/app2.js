const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    console.log('get으로 요청이 들어왔습니다.');
    console.log(`req.baseUrl : ${req.baseUrl}`);
    console.log(`req.body : ${req.body}`);
    console.log(`req.cookies : ${req.cookies }`);
    console.log(`req.ip : ${req.ip}`);
    console.log(`req.method : ${req.method}`);
    console.log(`req.params : ${req.params}`);
    console.log(`req.path : ${req.path}`);
    console.log(`req.query : ${req.query}`);
    console.log(req.params); 
    // http://localhost:8080/1234/?id=hojun&pw=1234
    // 와 같은 형식으로 들어오면 params는 1234 뒤 파일에서 테스트
    console.table(req.query);
    console.log(req.headers);
    res.send('hello world!!');
});

app.listen(8080);