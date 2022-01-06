// npm i express express-validator
// https://express-validator.github.io/docs/
// npm i nodemon --save-dev
/*
http://localhost:8080/signup, raw, json
{
    "name":"leehojun",
    "age":10,
    "nickname":"paullab"
}
*/

const express = require('express');
const expressValidator = require('express-validator');
const valibody = expressValidator.body; // body검사
const valicheck = expressValidator.check; // body와 param 모두 검사
const valiparam = expressValidator.param; // param 검사
const valiresult = expressValidator.validationResult;

const app = express();
app.use(express.json());

app.post(
    '/signup', 
    valibody('name').isLength({ min: 3, max: 20 }).trim().withMessage('이름은 3자이상 20자 이하로 작성하셔야 합니다!!'), 
    (req, res, next) => {
        const err = valiresult(req);
        if (err.isEmpty()){
            console.log(req.body);
            // 아래 문법 대신 sendStatus를 사용해도 됩니다.
            res.status(201).send('hello world!!');; // 201 Created
        } else {
            console.log(req.body);
            // 아래 문법 대신 sendStatus를 사용해도 됩니다.
            res.status(400).send('error!!');; // 400 Bad Request
        }
    });

app.listen(8080);
