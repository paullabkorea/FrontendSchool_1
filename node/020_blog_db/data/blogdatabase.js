const mongoose = require('mongoose');

// 1. DB세팅, url뒤에 project 주소로 자동 생성됨
// mongodb://[id:pw]localhost:27017/[project]의 형태
mongoose.connect('mongodb://localhost:27017/test111');

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

// id : 3,
// title : 'title3',
// content : 'content3',
// section : 'section3',
// pubDate : new Date().toString(),
// modDate : new Date().toString()
const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    section: { type: String, required: true },
    pubDate: { type: Date, default: Date.now },
    modDate: { type: Date, default: Date.now },
});

// 6. 정의된 스키마를 컴파일(객체처럼 사용하기 위해 model() 함수로 컴파일)
const Blog = mongoose.model('Schema', blogSchema);

async function findByTitle(title) {
    return Blog.find({ title });
}

async function findBySection(section) {
    console.log('데이터 찾기 section');
    return Blog.find({ section });
}

async function findById(id) {
    console.log('데이터 찾기 id');
    return Blog.findById(id);
}

async function createBlog(blog) {
    console.log('데이터 생성')
    return new Blog(blog).save().then((blog) => blog._id);
}

async function getAll() {
    console.log('데이터 모두 출력');
    return Blog.find({});
    // Blog.find({}, function(error, blog){
    //     console.log('-- 데이터 읽기 시작 --');
    //     if (error) {
    //         console.log(error);
    //     } else {
    //         console.log(blog);
    //     }
    //     console.log('-- 데이터 읽기 끝 --');
    // });
}

module.exports = {findByTitle, findBySection, findById, createBlog, getAll}