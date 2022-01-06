// npm init --yes
// npm i nodemon --save-dev
// npm i express express-session

const express = require('express');
const session = require('express-session'); // 이렇게 생성하면! req.session이 생성이 됩니다!

const app = express();

app.use(express.json());
// 브라우저는 key값 정도만, 중요한 정보는 서버에만 저장.
// 9장에서 했던 내용입니다.
app.use(session({
    secret: 'hello',
    resave: false, // 다시 요청이 오면 세션에 변동이 없어도 저장, 저장하지 않음.
    saveUninitialized: false,// 세션에 내용 없어도 저장?, 놉!
    cookie: {
                httpOnly: true, // javascript로 조작하지 못하도록! 정보보안! 필수!
                secure: false,
            },
}));

app.get('/', (req, res, next) => {
    console.log(req.session);
    // id 저장없이 로그인 사용자인지 판달할 수 있음. 이 test라는 값은 쿠키에서 가지고 있지 않음.
    // 아래처럼 복잡하게 했던 것들이 아래 req.session으로 해결됩니다. 이미 고유한 session이에요.
    if(!req.session.name){
        // 이 부분에서 DB에서 데이터를 가지고 와서 ID, PW가 맞는지 확인해야겠죠?
        req.session.name = 'hojun';
    } else {
        req.session.name = 'hojun 재접속 -> 로그인 유지';
    }
    res.send(`접속하는 개개인이 다릅니다 : ${req.session.name}`);
    // res.writeHead(200, {'Set-Cookie' : 'session=abcde' }); // 이름바꿔가면서 test
    // if (req.cookies.session){
    //     if (req.cookies.session == 'abcde'){
    //         //abcde라는 것은 아래처럼 매핑이 되어 있는 상태인거죠.
    //         session = {'abcde':'hojun'} //서버에 저장되어 있는 session이라 생각해주세요.
    //         return res.end(`${session['abcde']}, welcome our homepage!!`);
    //     } else {
    //         // 만료시간을 지정하지 않았기 때문에 이 구간으로 들어오진 않습니다.
    //         // id=hojun; age=10; hello=world; Expires=만료시간; HttpOnly;
    //         // 위와 같이 지정해줄 수 있지만 이렇게 사용할 것이 아니기 때문에 지정하지 않은 것입니다.
    //         return res.end('로그인 지속 시간이 지났습니다. 재 로그인 해주세요.')
    //     }
    // } else {
    //     return res.end('hello!');
    // }
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