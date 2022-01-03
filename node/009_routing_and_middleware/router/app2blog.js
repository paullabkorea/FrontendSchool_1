// router 폴더에 blog.js 파일
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.end(fs.readFileSync(path.join(__dirname, '../resource/blog.html')));
});

// 여기서 blog/1 이런식에 url을 처리하면 됩니다.
router.get('/:id', (req, res, next) => {
    res.send(req.params.id + 'page!!');
})

module.exports = router;