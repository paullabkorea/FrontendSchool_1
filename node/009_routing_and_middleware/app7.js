// npm i helmet
const express = require('express');
const helmet = require('helmet'); 

const app = express();
// 개발자도구 > 네트워크 > localhost 외 아무것도 없음
app.use(helmet()); // localhost 외 보안에 정보에 필요한 다른 정보들이(Content-Security-Policy 등) 들어가 있는 것을 볼 수 있음

app.get('/', (req, res, next) => {
    res.send('hello world');
})

app.listen(8080);