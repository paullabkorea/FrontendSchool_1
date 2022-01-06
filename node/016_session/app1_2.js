// npm init --yes
// npm i express cookie-parser // 굳이 할 필요가 없지만 쿠키관련된 강의니 넣어놓습니다.
// npm i nodemon --save-dev

const express = require('express');
const cookieParser = require('cookie-parser'); // 개발자도구 Network > Headers에 보안관련된 값들을 넣어줌

const app = express();

app.use(express.json());
app.use(cookieParser()); 

// post로 전달한 것은 body에서 꺼내 읽을 수 있죠.
// 만약 실제 로그인이었다면
// 1. post로 전달된 ID, PW가 맞는지 확인 후
// 2. 맞으면 session 성성 후 쿠키값을 user에게 전달, 여기서 쿠키값에 민감한 데이터를 넣지 않습니다.
// 3. 사용자가 쓴 블로그 등의 값이 쿠키값하고 같이 전달되면
// 4. session에서 비교후 저장
// post로 전달된 값을 set-cookie 안에 넣고
// 이제 로그인 한 값을 저장만 하면 되는 것입니다.
app.get('/', (req, res, next) => {
    console.log(req.headers.cookie);
    res.writeHead(200, {'Set-Cookie' : 'session=abcde' }); // 이름바꿔가면서 test
    if (req.cookies.session){
        if (req.cookies.session == 'abcde'){
            //abcde라는 것은 아래처럼 매핑이 되어 있는 상태인거죠.
            const session = {'abcde':'hojun'} //서버에 저장되어 있는 session이라 생각해주세요.
            return res.end(`${session['abcde']}, welcome our homepage!!`);
        } else {
            // 만료시간을 지정하지 않았기 때문에 이 구간으로 들어오진 않습니다.
            // id=hojun; age=10; hello=world; Expires=만료시간; HttpOnly;
            // 위와 같이 지정해줄 수 있지만 이렇게 사용할 것이 아니기 때문에 지정하지 않은 것입니다.
            return res.end('로그인 지속 시간이 지났습니다. 재 로그인 해주세요.');
        }
    } else {
        return res.end('hello!');
    }
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