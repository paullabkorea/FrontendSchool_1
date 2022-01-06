// 파일 수정하여 개시
// 참고자료 : https://velog.io/@ash/Node.js-%EC%84%9C%EB%B2%84%EC%97%90-logging-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-winston-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0

// npm init --yes
// "type":"module", 
// npm install express winston winston-daily-rotate-file

// winston 모듈의 로그 수준
// https://github.com/winstonjs/winston
// log levels
// const levels = {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
// };
import express from 'express';
import { logger } from './config/winston.js';
const app = express();

app.get('/', (req, res, next) => {
    logger.info('GET /'); //GET / {"timestamp":"2021-12-27 01:43:12"} 와 같은 형식으로 로그 남김
    res.sendStatus(200);
});

app.get('/notice/:id', (req, res, next) => {
    // http://localhost:8080/notice/300
    // info: GET /notice/300 {"timestamp":"2021-12-27 11:10:18"}
    logger.info(`GET /notice/${req.params.id}`); 
    res.sendStatus(200);
});

app.get('/error', (req, res) => {
    logger.error('Error message');
    res.sendStatus(500);
});

app.listen(8080);