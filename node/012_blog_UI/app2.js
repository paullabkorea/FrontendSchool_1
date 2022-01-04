// npm i nunjucks-date-filter

const nunjucks = require('nunjucks');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan'); // 디버깅
const helmet = require('helmet'); // 보안
const blogRouter = require('./router/blog2.js'); // 수정 2
const dateFilter = require('nunjucks-date-filter'); // 수정2

const app = express();
app.set('view engine', 'html');

app.use(express.static('resource/static'));
let env = nunjucks.configure('resource/template', {
    autoescape: true,
    express: app,
    watch: true
});
env.addFilter('date', dateFilter);

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.use('/blog', blogRouter);

app.get('/', (req, res, next) => {
    // console.log(blogRouter);
    const data = blogRouter.blogs.slice(0, 3);
    // res.render('test1.html', {data}); // 일단 test1으로 test합니다. /에서 접속 가능한지 확인해요.
    // postman에서 post로 아래 패킷을 전송했을 때 / 에서는 3번까지만, /blog에서는 4번까지 출력해야 합니다.
    // {
    //     "id" : 4,
    //     "title" : "title4",
    //     "content" : "content4",
    //     "section" : "section4"
    // }
    res.render('index.html', {data});
});

app.use((req, res, next) => {
    res.sendStatus(404);
})

app.use((err, req, res, next) => {
    console.log('애러났음!')
    console.log(err);
    res.sendStatus(500);
})

app.listen(8080);