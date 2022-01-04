// npm init --yes
// npm i nunjucks express cors helmet morgan nunjucks-date-filter
// npm i nodemon --save-dev
// -> nodemon app1 으로 실행 가능

const nunjucks = require('nunjucks');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const blogRouter = require('./router/blog.js');
const dateFilter = require('nunjucks-date-filter');
const path = require('path');

const app = express();
app.set('view engine', 'html');

경로 = path.join(path.join(__dirname + '/resource'), '/static');
console.log(경로);

app.use('/', express.static(경로));
app.use('/blog', express.static(경로));

let env = nunjucks.configure('resource/template', {
    autoescape: true,
    express: app,
    watch: true
});
env.addFilter('date', dateFilter);

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));
 
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));

app.get('/', (req, res, next) => {
    const data = blogRouter.blogs.slice(0, 3);
    res.render('index.html', {data});
});

app.get('/about', (req, res, next) => {
    res.render('about.html');
});

app.use('/blog', blogRouter);

app.get('/contact', (req, res, next) => {
    res.render('contact.html');
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