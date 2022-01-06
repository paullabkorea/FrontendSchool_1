// npm i jsonwebtoken
// 보통은 시크릿 키를 다른 파일에 저장한다고 했었죠?
// 다른 파일에 있는 값을 가져와 옵션 값으로 넣어주도록 하겠습니다.

const jwt = require('jsonwebtoken');
const secretKey = require('./secret').secretKey;
const options = require('./secret').options;

const token = jwt.sign(
    {
        id: 'hojun',
        grade: 'super gold'
    },
    secretKey, options); 
    

jwt.verify(token, secretKey, (err, decoded) => {
    console.log(err, decoded)
});

console.log(token); // token은 비밀값이 아니에요. https://jwt.io/에서 해독 가능합니다.