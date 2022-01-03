const express = require('express');

const app = express();

//와일드카드
app.get('/:blog/:id', (req, res, next) => {
    console.log('get으로 요청이 들어왔습니다!');
    console.log(req.params);
    // http://localhost:8080/여행/123
    console.log(req.params.blog);
    console.log(req.params.id);
    res.send('hello world!!');
});
app.listen(8080);