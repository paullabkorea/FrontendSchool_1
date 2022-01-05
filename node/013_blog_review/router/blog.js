const express = require('express');
let blogs = require('../database/dataBlog');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log(req.query);
    const section = req.query.section;
    const data = section ? blogs.filter(b => b.section === section) : blogs;
    res.render('post.html', {data});
})

router.get('/write', (req, res, next) => {
    res.render('write.html');
})

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const blog = blogs.find(b => b.id == id);
    res.render('postdetails.html', {blog});
})

router.post('/', (req, res, next) => {
    const id = blogs.length + 1;
    const title = req.body.title;
    const content = req.body.content;
    const section = req.body.section;
    const pubDate = new Date().toString();
    const modDate = new Date().toString();
    let blog = {id, title, content, section, pubDate, modDate};
    blogs.push(blog);
    // res.status(201).json(blog); // 201은 create
    res.redirect("/blog");
})

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const blog = blogs.find(b => b.id == id);
    if (blog){ // 각각의 값이 비어있을 수도 있음
        blog.title = req.body.title;
        blog.content = req.body.content;
        blog.section = req.body.section;
        blog.modDate = new Date().toString();
        res.status(200).json(blogs);
    } else {
        res.status(404);
    }
})

// 삭제(DELETE) : blog/:id
router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    blogs = blogs.filter(b => b.id != id) 
    res.status(200).json(blogs); //굳이 204를 보내줄거면 200로
})


module.exports = router;