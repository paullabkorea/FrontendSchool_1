const express = require('express');

const blogdatabase = require('../data/blogdatabase.js');
// let blogs = [{
//         id : 1,
//         title : 'title1',
//         content : 'content1',
//         section : 'section1',
//         pubDate : new Date().toString(),
//         modDate : new Date().toString()
//     }, {
//         id : 2,
//         title : 'title2',
//         content : 'content2',
//         section : 'section2',
//         pubDate : new Date().toString(),
//         modDate : new Date().toString()
//     }, {
//         id : 3,
//         title : 'title3',
//         content : 'content3',
//         section : 'section3',
//         pubDate : new Date().toString(),
//         modDate : new Date().toString()
//     }];

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.query);
    const section = req.query.section;

    // DB가 비동기 이기 때문에 아래 코드도 비동기로 수정해주셔야 합니다.
    section ? 
    
    blogdatabase.findBySection(section)
    .then(data => res.render('post.html', {data})) : 
    
    blogdatabase.getAll()
    .then(data => res.render('post.html', {data}));
    // const data = section ? blogs.filter(b => b.section === section) : blogs;

    // 아래처럼 수정하면 안됨, 비동기 이기 때문에
    // const data = section ? blogdatabase.findByTitle(section) : blogdatabase.getAll();
    // console.log(data);
    // res.render('post.html', {data});
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    blogdatabase.findById(id)
    .then(blog => res.render('postdetails.html', {blog}));
    // const blog = blogs.find(b => b.id == id); //타입이 number, string
    // res.render('postdetails.html', {blog});
})

router.post('/', (req, res, next) => {
    // 스키마
    // title: { type: String, required: true },
    // content: { type: String, required: true },
    // section: { type: String, required: true },
    // pubDate: { type: Date, default: Date.now },
    // modDate: { type: Date, default: Date.now },
    const title = req.body.title; // const {key1, key2...} = req.body;
    const content = req.body.content;
    const section = req.body.section;
    let blog = {title, content, section};
    const id = blogdatabase.createBlog(blog);
    // blogs.push(blog);
    res.status(201).json({id}); // 201은 create
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const blog = blogdatabase.findById(id);
    // const blog = blogs.find(b => b.id == id)
    if (blog){ // 각각의 값이 비어있을 수도 있음
        res.status(200).json(blog);
    } else {
        res.status(404);
    }
})

// 삭제(DELETE) : blog/:id
// router.delete('/:id', (req, res, next) => {
//     const id = req.params.id;
//     blogs = blogs.filter(b => b.id != id) 
//     res.status(200).json(blogs); //굳이 204를 보내줄거면 200로
// })


module.exports = router;
module.exports['blogs'] = blogdatabase.getAll(); // 좋은 방법은 아닙니다. DB 할 때 다시 리펙토링 해야합니다.