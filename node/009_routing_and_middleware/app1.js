// npm init --yes
// npm i express
// npm i nodemon --save-dev
// -> nodemon app1 으로 실행 가능
const express = require('express');
const indexRouter = require('./router'); // index.js 생략 가능
const aRouter = require('./router/a.js');
const bRouter = require('./router/b.js');
const cRouter = require('./router/c.js');

const aboutRouter = require('./router/about.js');
const contactRouter = require('./router/contact.js');
const blogRouter = require('./router/blog.js');

const app = express();

app.use('/', indexRouter);
app.use('/a', aRouter);
app.use('/b', bRouter);
app.use('/c', cRouter);

app.use('/about', aboutRouter);
app.use('/contact', contactRouter);
app.use('/blog', blogRouter);

app.use((req, res, next) => {
    res.status(404).send('못찾음!'); 
    // res.send는 res.status(200).send('')
    // 보안상 status는 좀 더 고민해본 후 작성, 200을 일부러 보내주는 경우가 많습니다.
});

app.use((err, req, res, next) => {
    console.log('애러발생!');
    console.log(err);
});

app.listen(8080);