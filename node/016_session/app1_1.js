// npm init --yes
// npm i express
// npm i nodemon --save-dev

const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res, next) => {
    // console.log(req);
    // console.log(res);
    console.log(req.headers.cookie) // 만료시간이 없어서(만료시간 없는 쿠키를 세션 쿠키, 브라우저 닫으면 삭제됩니다.)
    // 개발자 도구 네트워크 탭과 애플리케이션에서 확인 가능합니다.
    // 애플리케이션 탭에서 삭제도 가능합니다.
    // test url : http://localhost:8080/
    res.writeHead(200, {'Set-Cookie' : 'id=hojun' }); // 이름바꿔가면서 test
    // 만료시간 = new Date();
    // 만료시간.setMinutes(만료시간.getMinutes() + 1); // 1분 후 만료
    // id=hojun; age=10; hello=world; Expires=만료시간; HttpOnly;
    res.end('cookie!!');
});


app.use((req, res, next) => {
    res.status(404).send('못찾음!'); // res.send는 res.status(200).send('')
    // 보안상 status는 좀 더 고민해본 후 작성, 200을 일부러 보내주는 경우가 많습니다.
});

app.use((err, req, res, next) => {
    console.log('애러발생!');
    console.log(err);
}); 
// 매개변수가 4개인것만 애러처리합니다. 주의해주세요.


app.listen(8080); // 보통 위에 있고 맨 마지막에는 error 처리하는 경우가 많음