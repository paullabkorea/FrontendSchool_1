// npm i morgan dotenv
const express = require('express');
const morgan = require('morgan'); // 추가로그 확인
const dotenv = require('dotenv'); // 미들웨어 아닙니다.
const path = require('path');

dotenv.config(); // process.env 관리를 위해 사용합니다.

console.log("SECRET:", process.env.SECRET);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);

const app = express();

app.use(morgan('dev')); // 배포할 때에는 dev 대신 combined, combined를 사용하면 브라우저, ip 등이 뜹니다.
app.use('/', express.static(path.join(__dirname, 'resource'))); // 해당 폴더에서 정적파일 제공(기본 제공), resouce는 외부노출 url이 아닙니다.
// 보통은 public 폴더로 사용하는데 보안상 권장하지 않음
// static 옵션은 공식 문서 참고
// 링크 : http://expressjs.com/ko/api.html#express.static

app.use(express.json()) // body parsing
// 그 외에도 common, short, tiny 등 사용 가능
app.use(express.urlencoded({ extended: false })); // 위와 동일하게 body parsing
// 주로 html의 form 데이터 파싱(이미지는 처리 못해요. multer사용을 권합니다.), 옵션은 필수입니다. 최근에 express에 일부 기능이 들어와 있는 상태입니다. 따로 npm i body-parser를 안해주셔도 됩니다.
// extended true -> qs 모듈이 query 해석
// extended false -> node의 querystring 모듈이 qeury 해석
// post와 put에서 주로 사용. req.on('data'), req.on('end')를 사용할 필요가 없음

app.get('/', (req, res, next) => {
    res.status(200).send('hello world');
})

app.use((req, res, next) => {
    // 위에 요청 처리 구문이 없으면 모든 요청에 대한 처리
    // 위에 요청이 있다면 없는 요청에 대한 처리
    // 이 코드가 맨 앞으로 가면 모든 요청에 대해 404
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    console.log('애러발생!');
    console.log(err);
});

app.listen(8080);