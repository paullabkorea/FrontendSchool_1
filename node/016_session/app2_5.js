// 더 간단한 예제입니다. 일부러 다른 모듈들은 다 지웠어요.
// 개발자도구 > 콘솔에서 입력해야 하는 코드는 console.js에 입력해두었습니다.
// 3분 뒤에도 실행해보세요!(3분 뒤로 조정했습니다.)
// npm init --yes
// npm i jsonwebtoken express express-session
// npm i nodemon --save-dev

const express = require('express');
const session = require('express-session'); // 이렇게 생성하면! req.session이 생성이 됩니다!
const jwt = require('jsonwebtoken');

const jwtsecret = 'hello world';

const app = express();


app.get('/', (req, res, next) => {
    res.send('hello jwt!!!')
})

// 비밀 게시판
app.get('/secret', isAuthorized, (req, res) => {
    res.json({ "m" : "secret notice" })
})

// 일반 게시판
app.get('/readme', (req, res) => {
    res.json({ "m" : "share notice" })
})

app.get('/jwt', (req, res) => {

    //JWT 토큰 생성(id와 blog 주소를 담아서)
    const newUserToken = jwt.sign({"임시id":"hello"}, jwtsecret,{
        expiresIn : 60 * 3     // 60초 유효 토큰 test할 때에는 뒤에 값을 늘려주세요.
    });
    
    res.send(newUserToken);
})

function isAuthorized(req, res, next) {
    if (typeof req.headers.authorization !== "undefined") {
        let token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, jwtsecret, (err, encode)=>{
            if(err) {
                console.log(err)
                return res.send('잘못된 접근!');
            } else {
                console.log(encode)
                return next();
            }
        });
    } else {
        return res.send('잘못된 접근!');
    }
}


app.use((req, res, next) => {
    res.status(404).send('못찾음!');
});

app.use((err, req, res, next) => {
    console.log('애러발생!');
    console.log(err);
}); 


app.listen(8080);
