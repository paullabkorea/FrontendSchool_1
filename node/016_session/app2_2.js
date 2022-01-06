// npm i jsonwebtoken

const jwt = require('jsonwebtoken');

const token = jwt.sign(
    {
        id: 'hojun',
        grade: 'super gold'
    },
    'token',
    {
        expiresIn: 3
    }); // 보통 이 토큰은 다른 파일에 저장합니다.

setTimeout(function(){
    jwt.verify(token, 'token', (err, decoded) => {
        console.log(err, decoded)
    });
}, 1000); // 2초, 4초 해보세요.

console.log(token); // token은 비밀값이 아니에요. https://jwt.io/에서 해독 가능합니다.