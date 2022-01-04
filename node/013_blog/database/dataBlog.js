// DB 연결할 때 수정해야 하는 코드
let blogs = [{
    id : 1,
    title : 'title1',
    content : 'content1',
    section : 'it',
    viewCount : 0,
    pubDate : new Date().toString(),
    modDate : new Date().toString()
},{
    id : 2,
    title : 'title2',
    content : 'content2',
    section : 'it',
    viewCount : 0,
    pubDate : new Date().toString(),
    modDate : new Date().toString()
},{
    id : 3,
    title : 'title3',
    content : 'content3',
    section : 'section3',
    viewCount : 0,
    pubDate : new Date().toString(),
    modDate : new Date().toString()
}]

module.exports = blogs;