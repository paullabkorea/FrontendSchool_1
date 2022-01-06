// npm init --yes
// npm i nodemon --save-dev
// npm i express express-session

// 당연히 실제 이렇게 저장되진 않았겠죠?ㅎㅎ 이해하기 편하시도록 작성한 예제입니다.
const database = [
    {
        id:'hojun1',
        pw:'12341'
    }, {
        id:'hojun2',
        pw:'12342'
    }, {
        id:'hojun3',
        pw:'12343'
    }, {
        id:'hojun4',
        pw:'12344'
    }
]

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
    // 물론 passworkd는 get 요청이 아니었겠지만 이해를 돕기 위해 아래와 같이 진행합니다.
    // http://localhost:8080/?id=hojun&pw=1234
    console.log(req.session);
    console.log(req.params);// '/'로 이어지는 부분을 뜻합니다. 여기에는 없어요.
    console.log(req.query);
    // id 저장없이 로그인 사용자인지 판달할 수 있음. 이 test라는 값은 쿠키에서 가지고 있지 않음.
    // 아래처럼 복잡하게 했던 것들이 아래 req.session으로 해결됩니다. 이미 고유한 session이에요.
    // 이 부분에서 DB에서 데이터를 가지고 와서 ID, PW가 맞는지 확인해야겠죠?
    // user = database.filter(d => d.id == 'hojun1' && d.pw == '12341');
    const user = database.filter(d => d.id == req.query.id && d.pw == req.query.pw);
    console.log(user);
    console.log(!!user[0]);
    if(!!user[0]){
        return res.send(`${user[0].id}님 환영합니다.`);
    }
    // 둘 중 틀린 것만 알려주면 안됩니다.
    return res.send('id와 pw를 확인해주세요.');

    // 이 아래 로직은 이제 앞으로 이렇게 진행됩니다,
    // if(!!user[0]){
    //     로그인 해야만 할 수 있는 것들
    // } else {
    //     next()
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