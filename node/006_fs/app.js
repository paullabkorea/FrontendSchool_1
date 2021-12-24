const fs = require('fs');

// rename, readFile, writeFile, appendFile, copyFile, mkdir

// 1
// let 변수 = '이호준' // 사용자 이름
// let 날짜 = new Date()
// fs.rename('./test.txt', `./${변수}${날짜.getMilliseconds()}.txt`, (err) => {
//     console.log(err);
// })

// 2
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 3
// fs.readdir('./', (err, data) => {
//     console.log(err);
//     console.log(data);
// })

// 4
// fs.writeFile('./test2.txt', 'hello world 2', (err)=>{
//     console.log(err);
// });

// 5
// fs.appendFile('./test2.txt', '\nhello world 3', (err)=>{
//     console.log(err);
// });

// 6
// fs.copyFile('./test2.txt', './test3.txt', (err)=>{
//     console.log(err);
// });

// 7
fs.mkdir('./yoyo', (err)=>{
    console.log(err);
});