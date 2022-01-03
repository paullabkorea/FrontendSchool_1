const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
    console.log('get으로 요청이 들어왔습니다!');
    // res.render() -> 다음 강의에서 설명
    // res.send('hello world!!');
    // res.sendStatus(404);
    // res.status(404).send('요청 성공');
    // res.json({"이름":"호준", "나이":10});
});
app.listen(8080);