// npm i cors
// test.html은 liveserver로 실행시키세요.
const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors()); //client와 server에 ip가 다른 경우 데이터 요청할 때 CORS 애러 발생! response headers에 Access-Control-Allow-Origin 이 없으면 CORS 애러 발생합니다. 브라우저에서 주는 애러에요. 보안성을 위해 전체 공개가 아니라 옵션값을 이용해서 ip를 지정하는 것을 권해드립니다.
// app.use(cors(
//     origin: [88.88.88.88:3000] // 요청 url과 port
// ))

app.get('/', (req, res, next) => {
    // res.send('hello world');
    res.json({"이름":"신발", "가격":100000});
})

app.listen(8080);