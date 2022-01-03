// npm init --yes
// npm i express
// npm i nodemon --save-dev
// -> nodemon app1 으로 실행 가능

const express = require('express');
const indexRouter = require('./router'); // 뒤에 index.js 생략 가능
const blogRouter = require('./router/app2blog.js');

const app = express();

app.use('/', indexRouter);
app.use('/blog', blogRouter);

app.use((req, res, next) => {
    res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
    console.log('애러발생!');
    console.log(err);
});

app.listen(8080);