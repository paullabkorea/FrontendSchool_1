// npm init --yes
// npm i jsonwebtoken bcrypt express express-session cookie-parser
// npm i nodemon --save-dev

// 모듈화까진 이 챕터에서 진행하지 않으나 좋은 글이 있어 포스팅합니다.
// https://velog.io/@josworks27/%EC%9D%B8%EC%A6%9D-%EB%AF%B8%EB%93%A4%EC%9B%A8%EC%96%B4-%EA%B5%AC%ED%98%84
// HTTP Request시 Cookie / Authorization 중 어디에 담아야 하는지에 대한 글입니다.
// https://velog.io/@neity16/NodeJS-Token-%EC%A0%80%EC%9E%A5-%EC%9C%84%EC%B9%98%EC%9D%98-%EA%B3%A0%EC%B0%B0

// 방법1로 하였을 때 postman에서 잘 들어가지만, 일반 브라우저에서는 잘 안돌아갑니다.
// 이유는 front-end에서 처리를 안해줘서 그런데요. 다음 장에서 좀 더 상세히 살펴보겠습니다.

////////////////////////////
// 정리 : JWT는 json 형태의 웹 토큰 발행(그동안 주고 받았던 쿠키와 세션을 대체)
// Header, Payload, Signature 부분으로 나뉘는데, 시그니처는 서버의 시크릿 키라서 시그니처 부분은 해커가 해독 불가
// 보통 headers에 authorization : Bearer 'JWT값' 형태로 전송하여 주고받음(로그인 유지)

////////////////////////////
// 2_4 실습1
// post - http://localhost:8080/join
// {
//     "id" : "hojun",
//     "password" : "1234",
//     "blog" : "sdf"
// }
// 아래 토큰은 메모장에 저장해두세요.
// {
//     "msg": "회원이 되신 것을 축하드립니다!",
//     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhvanVuIiwiYmxvZyI6InNkZiIsImlhdCI6MTY0MTQ1MjE1NiwiZXhwIjoxNjQxNDUyNDU2fQ.YZqSko6BLGy2kzZrbvDAtJAYnv03BBgWbmqctKCbWCY"
// }

// 2_4 실습2
// get - http://localhost:8080/?id=hojun&pw=1234
// 로그인 확인

// 2_5 실습3
// get - http://localhost:8080/check
// Headers의 key : Authorization
// Headers의 value : Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImhvanVuIiwiYmxvZyI6InNkZiIsImlhdCI6MTY0MTQ1Mjk3NCwiZXhwIjoxNjQxNDUzMjc0fQ.yIvhFkZoibUvucF7dqDExOctSwEr_0nGtAzmJQpjF4o


const express = require('express');
const session = require('express-session'); // 이렇게 생성하면! req.session이 생성이 됩니다!
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt') // 외장 모듈
var cookieParser = require('cookie-parser');

// 앞서 말씀드린 것처럼 당연히 실제 이렇게 저장되진 않았습니다. 
// 이해하기 편하시도록 작성한 예제입니다.
// hash = bcrypt.hashSync('p12341', 10);
const database = [
    {
        id : 'hojun1',
        pw : '$2b$10$hiIjPbyoOESZPwr6g4mvGOekINoFSiEoHWyBCAm0v9xljfQNmRYsy', // p12341
        blog : 'www.abc.co.kr'
    }, {
        id:'hojun2',
        pw:'$2b$10$pULJYrBddj5J4hIwYzhpcuzNO41PUqFQoITtlkZqFgg7RqPa6M.xO', // p12342
        blog : 'www.abc.co.kr'
    }
]

//JWT 토큰 생성시 필요 비밀키, 앞 챕터에서는 파일에서 불러왔었음. 
const jwtsecret = 'hello world';

const app = express();

app.use(express.json());
app.use(cookieParser());

//회원가입
app.post('/join', async (req, res, next) => {
    const {id, password, blog} = req.body;
    const user = database.find(u => u.id == id);
    // if 동일한 아이디가 없을 때, else 있을 때
    if(!user) {
        // bcrypt.hash(password, salt , (err, hash) => { ... }
        const hashed = bcrypt.hashSync(password, 10);
        //클라이언트 측으로 부터 받은 회원 정보 저장
        const newUser = {
            id, 
            pw : hashed,
            blog
        };

        database.push(newUser);
        console.log(database);
        
        //JWT 토큰 생성(id와 blog 주소를 담아서)
        const newUserToken = jwt.sign({id, blog}, jwtsecret, {
            expiresIn : 60 * 5     // 60초 유효 토큰 test할 때에는 뒤에 값을 늘려주세요.
        });

        return res.status(200).json({
            msg : '회원이 되신 것을 축하드립니다!',
            token : newUserToken
        });
    } else {
        return res.status(400).json({msg : '동일한 아이디가 있습니다. -> 입력한 정보와 함께 전달'});
    }
});

app.get('/', (req, res, next) => {
    // test1 : http://localhost:8080/?id=hojun&pw=1234
    // test2 : http://localhost:8080/?id=hojun1&pw=p12341
    // post로 날라온다면 const {id, pw} = req.body; 식으로 받습니다.
    console.log(req.query);
    const user = database.filter(d => d.id == req.query.id && bcrypt.compareSync(req.query.pw, d.pw));

    console.log(user);
    console.log(!!user[0]);

    if(!!user[0]){
        const userToken = jwt.sign({
            id : user[0].id,
            blog : user[0].blog
        }, jwtsecret, {
            expiresIn : 60 * 2,     // 60초 유효 토큰 test할 때에는 뒤에 값을 늘려주세요.
            issuer: 'service provider'
        });

        console.log(userToken); // 방식 1, 방식 2
        // res.header('Authorization', 'Bearer '+ userToken); // 방식 1
        return res.end(`welcome ${user[0].id}!!`);
        // return res.cookie("x_auth", userToken).status(200).send(`welcome ${user[0].id}!!`); // 방식2
    }

    return res.send('id와 pw를 확인해주세요.');
});

//인증
app.use('/check', (req, res, next) => {
    //헤더값에 포함된 토큰값 분석, 방법1
    console.log('check check!!')
    console.log(req.headers);

    /*
    // jwt.io에서 복호화 한 값
    // 해커가 이 값을 조작해서 준다면?
    {
        "id": "hojun1",
        "blog": "www.abc.co.kr",
        "iat": 1635469822,
        "exp": 1635469942,
        "iss": "service provider"
    }
    // 같은 이름으로 해도 애러나고, 다른 이름으로 해도 애러 납니다.
    */
    if(req.headers.authorization) {
        console.log(req.headers.authorization);
        console.log(req.get('Authorization'));

        const token = req.headers.authorization.split(' ')[1];
        console.log(token)

        jwt.verify(token, jwtsecret, (err, encode)=>{
            if(err) {
                console.error(err)
                return res.send('세션 만료되었습니다!');
            } else {
                console.log(encode);
                return res.send(`hello world!! ${encode.id}`);
            }
        });

        return;
    }

    return res.send('로그인 안하셨는데요?!');
    
    // const userToken = auth.split(' ')[1];

    // 방법2
    //클라이언트 쿠키에서 토큰을 가져온다.
    // let token = req.cookies.x_auth;
    // 토큰을 복호화 이후는 방법 1과 동일합니다.
});


app.use((req, res, next) => {
    res.status(404).send('못찾음!');
});

app.use((err, req, res, next) => {
    console.log('애러발생!');
    console.log(err);
}); 


app.listen(8080);