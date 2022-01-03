// npm i cookie-parser express-session
// 쿠키나 url에서 한글 사용하면 애러가 날 수도 있어서 encodeURIComponent() 해주시는 것이 좋습니다.
const express = require('express');
// 쿠키는 유효기간이 있는 키와 값의 쌍이라고 보시면 됩니다. 로그인 구현에서 많이 사용되지만
// 로그인에서만 사용되는 것은 아니에요. 사용자 정보를 저장하기 위해서도 사용됩니다.
// 보통은 브라우저를 종료할 때 사라집니다.
// 1. 클라이언트가 서버에게 요청
// 2. 서버가 response값을 쿠키와 함께 응답
// 3. 쿠키와 함께 다시 req(사용자 인증)
// 4. 서버가 response
const cookieParser = require('cookie-parser'); // 개발자도구 Network > Headers에 보안관련된 값들을 넣어줌

const app = express();

app.use(express.json());
app.use(cookieParser()); // 보통 안에 서명키, 보안상 취약하기 때문에 다른 파일로 빼놓음(process.env.SECRET), signedCookies로 값을 가져올 수 있음

app.get('/', (req, res, next) => {
    console.log(req.body);
    console.log(req.cookies); // app.use(cookieParser()); 이걸 해줘야만 보여짐, 위에서 언급한 것처럼 signedCookies로 값을 가져올 수 있음
    res.writeHead(200, {'Set-Cookie' : 'name=hojun'});
    // res.cookie() : 쿠키의 옵션을 설정
    // https://expressjs.com/ko/api.html#res.cookie
    // 1. 2번 실행하면 터미널에서 name:'hojun'이 보임
    // 2. 개발자도구 > 네트워크 > localhost에 Response Headers에서 쿠키 볼 수 있습니다. 
    // 3. 애플리케이션 > 쿠키 > localhost:8080에서도 볼 수 있습니다.
    // 4. 아래와 같이도 실행할 수 있으나 애플리케이션 쿠키에서는 보이지 않습니다.
    // res.writeHead(200, {'Set-Cookie' : 'name=hojun', 'Set-Cookie-hello' : 'pw=1234'});
    // 5. 애플리케이션 > 쿠키 > 값 삭제하면서 확인해보세요.
    if(req.cookies.name){
        res.end(`${req.cookies.name}, hello!`);
    } else {
        res.end('hello!');
    }
})

app.listen(8080);