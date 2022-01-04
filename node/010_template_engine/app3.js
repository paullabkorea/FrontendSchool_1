// npm init --yes
// npm i nunjucks express
// npm i nodemon --save-dev
// -> nodemon app1 으로 실행 가능

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
// template를 인식하고 사용하겠다
// autoescape는 보안상 true (false일 경우 html 태그 허용, DBD 공격 가능)
// express : app, 사용할 객체 지정
// watch: true 옵션을 사용하면 HTML파일이 변경될 때 템플릿 엔진 다시 렌더링

app.get('/', (req, res, next) => {
    res.render('test3.html', {
        예금 : [{
                    "은행명" : "신한",
                    "계좌번호" : 1,
                    "금액" : 100
                }, {
                    "은행명" : "우리",
                    "계좌번호" : 2,
                    "금액" : 200
                }, {
                    "은행명" : "농협",
                    "계좌번호" : 3,
                    "금액" : 300
                }],
        기술 : ['python', 'javascript', 'HTML', 'CSS'],
        습득연도 : [[2000, 2021], [2005, 2021]],
        text : '<h1>hello world</h1>'
    });
});

app.listen(8080);