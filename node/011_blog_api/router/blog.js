const express = require('express');
let blogs = require('../database/dataBlog');

const router = express.Router();

// * / url에 최신 게시물 3개 응답
// * /blog - 블로그 글 모두 응답
// * /blog?section=it - it관련된 글 모두 응답
router.get('/', (req, res, next) => {
    console.log(req.query);
    const section = req.query.section;

    // 나중에 DB 연결해서 수정해야 하는 코드
    const data = section ? blogs.filter(blog => blog.section === section) : blogs;
    
    res.status(200).json(data);
});

// * /blog/1 1번 게시물 상세보기 
// * /blog/2 2번 게시물 상세보기 
router.get('/:id', (req, res, next) => {
    console.log(req.params);
    const id = req.params.id;

    // 나중에 DB 연결해서 수정해야 하는 코드
    const data =  blogs.find(blog => blog.id === +id);

    res.status(200).json(data);
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    const id = blogs.length + 1;
    const title = req.body.title;
    const content = req.body.content;
    const section = req.body.section;
    const viewCount = 0;
    const pubDate = new Date().toString();
    const modDate = new Date().toString();
    const blog = {id, title, content, section, viewCount, pubDate, modDate};
    
    // 나중에 DB 연결해서 수정해야 하는 코드
    blogs.push(blog);

    res.status(201).json(blogs); // 201은 create
    /*
    postman test data
    post : localhost:8080/blog
    post, body, raw, json, data(아래) 확인 후 send
    {
        "title" : "title4",
        "content" : "content4",
        "section" : "section4"
    }
    send 후 아래 url로 접속하면 4번이 들어와있는 것 확인
    localhost:8080/blog
    */
});

router.put('/:id', (req, res, next) => {
    // user 인증 코드 삽입
    const id = req.params.id;

    // 나중에 DB 연결해서 수정해야 하는 코드
    const data =  blogs.find(blog => blog.id === +id);
    
    if (data) {
        data.title = req.body.title;
        data.content = req.body.content;
        data.section = req.body.section;
        data.modDate = new Date().toString();
        res.status(200).json(blogs)
    } else {
        res.status(404);
    }
});

router.delete('/:id', (req, res, next) => {
    // user 인증 코드 삽입
    console.log(req.params);
    console.log(req.params.id);
    const id = req.params.id;

    // 나중에 DB 연결해서 수정해야 하는 코드
    blogs = blogs.filter(blog => blog.id != id);

    res.status(200).json(blogs);
});

module.exports = router;