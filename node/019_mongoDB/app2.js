// npm init --yes
// npm i express nunjucks mongoose
// npm i nodemon --save-dev

const express = require('express');
const mongoose = require('mongoose');
// 지금은 사용하지 않습니다.
// const path = require('path');
// const morgan = require('morgan');
// const nunjucks = require('nunjucks');

const app = express();
app.use(express.json());

//////
// mongodb://[id:pw]localhost:27017/[project]의 형태입니다. 우리는 아이디 패스워드를 만들어준 적이 없으므로 적지 않아도 됩니다. project는 뒤에서 언급합니다.
// 다른 파일로 만들어서 이 부분을 모듈로 export해야합니다. 흐름만 봐주세요.
mongoose.connect('mongodb+srv://hojun:hojun1234@cluster0.wkmnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// 2. 연결 DB 사용
const db = mongoose.connection;

// 3. 연결 실패
db.on('error', function(){
    console.log('연결 실패');
});

// 4. 연결 성공
db.once('open', function() {
    console.log('연결 성공');
});

////

app.get('/', (req, res, next) => {
    res.writeHead(200);
    res.end('hello db!');
});


app.use((req, res, next) => {
    res.status(404).send('못찾음!');
});

app.listen(8080);
