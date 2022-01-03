// npm i cookie-parser express-session
// jwt vs session라고 검색해보세요. 저는 jwt를 주로 사용하는 편입니다.
const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.json());
// app.use(session()); // 요청하는 사람마다의 각각의 세션을 저장(개인 인벤토리, 장바구니)
// 아래처럼 관리하면 큰일납니다.
// 요청에서 req.session.name = 'hojun'
// 요청에서 req.session.id = 'hojun'
// 요청에서 req.session.pw = 'hojun123'
// 브라우저는 key값 정도만, 중요한 정보는 서버에만 저장.
// app.use(session({
//     secret: process.env.COOKIE_SECRET, //.env에서 가져온 시크릿키, .env는 git ignore 꼭 해주세요.
//     resave: false, // 다시 요청이 오면 세션에 변동이 없어도 저장, 저장하지 않음.
//     saveUninitialized: false, // 세션에 내용 없어도 저장?, 놉!
//     cookie: {
//         httpOnly: true, // javascript로 조작하지 못하도록! 정보보안! 필수!
//         secure: false,
//     },
//     name: 'session-cookie', // 난독화된 서명 문자열, 보통은 connect.sid
// }));

app.use(session({
    secret: 'hello',
    resave: false,
    saveUninitialized: false,
    cookie: {
                httpOnly: true, // javascript로 조작하지 못하도록! 정보보안! 필수!
                secure: false,
            },
}));

app.get('/', (req, res, next) => {
    console.log(req.body);
    console.log(req.session);
    // res.send('hello world');
    if(!req.session.name){
        req.session.name = 'hojun';
    } else {
        req.session.name = 'hojun 재접속 -> 로그인 유지';
    }
    res.send(`접속하는 개개인이 다릅니다 : ${req.session.name}`);
    // id 저장없이 로그인 사용자인지 판달할 수 있음. 이 test라는 값은 쿠키에서 가지고 있지 않음.
})

app.listen(8080);