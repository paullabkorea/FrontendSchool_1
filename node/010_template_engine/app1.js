// npm init --yes
// npm i nunjucks express
// npm i nodemon --save-dev
// -> nodemon app1 으로 실행 가능

const nunjucks = require('nunjucks');
const express = require('express');
const path = require('path');

const app = express();
app.set('view engine', 'html');

nunjucks.configure('template', {
    autoescape: true,
    express: app,
    watch: true
});
// template를 인식하고 사용하겠다
// autoescape는 보안상 true (false일 경우 html 태그 허용, DBD 공격 가능)
// express : app, 사용할 객체 지정
// watch: true 옵션을 사용하면 HTML파일이 변경될 때 템플릿 엔진 다시 렌더링

app.get('/', (req, res, next) => {
    res.render('test1.html', {name : "hojun", age:10});
})

app.listen(8080);