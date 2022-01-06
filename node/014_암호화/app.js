// npm init --yes
// npm i crypto-js bcrypt
// npm i nodemon --save-dev
// -> nodemon app1 으로 실행 가능

const crypto = require('crypto'); // 내장 모듈
const cryptojs = require('crypto-js'); // 외장 모듈(나름 괜찮아요.)
const sha256 = require('crypto-js/sha256');
const Base64 = require('crypto-js/enc-base64');
const bcrypt = require('bcrypt') // 외장 모듈

// createHash : 해쉬 알고리즘
// update : 변환 문자열
// digest : 인코딩
// pbkdf2, scrypt, bcrypt(추천!!)

console.log(crypto.createHash('sha256').update('leehojun').digest('base64'));
console.log(crypto.createHash('sha256').update('leehojun').digest('hex'));
console.log(Base64.stringify(sha256('leehojun')));

let hash = sha256('leehojun')
console.log(hash.toString());  // 일반적인 sha256
console.log(hash.toString(cryptojs.enc.Hex))
console.log(hash.toString(cryptojs.enc.Base64))

console.log('------');

const password = 'leehojun'; // 사용자에게 입력된 패스워드
console.log(bcrypt.hashSync(password, 1));
console.log(bcrypt.hashSync(password, 10));
// $2b$10$juQd.2hc..ad1QLON.KQN.634A6RD20mxP.itVHU7/VxUocRkImgu
// $2b$10 : 알고리즘과 복잡도
// $juQd.2hc..ad1QLON.KQN.634A6RD20mxP.itVHU7/VxUocRkImgu : salt와 hash
hash = bcrypt.hashSync(password, 10); //10을 추천, 시간이 너무 많이 걸려요.
console.log(bcrypt.compareSync(password, hash));


console.log('------');

// salt관리는 다른 파일로 하고 .git ignore합니다.
// 절대 key나 salt는 github에 올라가면 안됩니다.
crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log(`salt : ${salt}`);
    // 100번 반복에 64 바이트를 출력합니다.
    crypto.pbkdf2(password, salt, 100, 64, 'sha512', (err, key) =>{
        console.log(key.toString('base64'));
    });
});
