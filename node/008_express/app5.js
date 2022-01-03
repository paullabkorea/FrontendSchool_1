// 파일이름 : 008_express\app5.js

//http://expressjs.com/ko/4x/api.html#res
const express = require('express');

const app = express();
app.use(express.json());
// https://www.postman.com/
// 노션 교안을 참고해주세요.

app.get('/', (req, res, next) => {
    console.log('get으로 요청이 들어왔습니다!');
    console.log(req.body);
    res.send('get!!');
});

app.post('/', (req, res, next) => {
    console.log('post으로 요청이 들어왔습니다!');
    console.log(req.body);
    res.send('post!!');
});

app.listen(8080);