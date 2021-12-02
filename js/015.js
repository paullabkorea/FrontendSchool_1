let data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let newData = data.map(array => array.map(number => number * 2));
console.log(newData);
VM3474:3 (3) [Array(3), Array(3), Array(3)]0: (3) [2, 4, 6]1: (3) [8, 10, 12]2: (3) [14, 16, 18]length: 3[[Prototype]]: Array(0)
undefined
// call by value
undefined
let x = [10, 20, 30];
function test(a) {
    a[0] = 10000;
}
test(x)
x
(3) [10000, 20, 30]
let x = 10;
function test(a) {
    a = 10000;
}
test(x)
x
10
let x = 10;
let y = 0;

function test(a) {
    y = a;
}

test(x);
console.log(`y : ${y}`);
// 출력
VM3665:9 y : 10
undefined
// filter
undefined
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// mdn 예제
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);
VM3700:5 (3) ['exuberant', 'destruction', 'present']
undefined
let x = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9]
undefined
x.filter(z => z > 5);
(3) [6, 8, 9]
let 회원정보 = [{
            아이디 : 'jjang',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '남',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun1@gmail.com',
            가입연도 : '2020-12-02',
            주접속위치 : '125.242.161.149'
        }, {
            아이디 : 'jjang2',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '남',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun2@gmail.com',
            가입연도 : '2021-12-02',
            주접속위치 : '125.242.161.149'
        }, {
            아이디 : 'jjang3',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '여',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun3@gmail.com',
            가입연도 : '2021-12-02',
            주접속위치 : '125.242.161.149'
        }, {
            아이디 : 'jjang4',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '여',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun4@gmail.com',
            가입연도 : '2020-12-02',
            주접속위치 : '125.242.161.149'
        }];


// 1번 남자인사람
회원정보.filter(el => el.성별 === '남')
(2) [{…}, {…}]0: {아이디: 'jjang', 패스워드: '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5', 성별: '남', 휴대폰번호: '010-5004-0000', 이메일: 'hojun1@gmail.com', …}1: {아이디: 'jjang2', 패스워드: '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5', 성별: '남', 휴대폰번호: '010-5004-0000', 이메일: 'hojun2@gmail.com', …}length: 2[[Prototype]]: Array(0)
회원정보.filter(el => el.성별 === '남' && el.가입연도.slice(0, 4) === '2021');
[{…}]0: 가입연도: "2021-12-02"성별: "남"아이디: "jjang2"이메일: "hojun2@gmail.com"주접속위치: "125.242.161.149"패스워드: "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5"휴대폰번호: "010-5004-0000"[[Prototype]]: Objectlength: 1[[Prototype]]: Array(0)
let blogs = [{
        id : 1,
        title : 'title1',
        content : 'content1',
        section : '일상'
    }, {
        id : 2,
        title : 'title2',
        content : 'content2',
        section : '취미'
    }, {
        id : 3,
        title : 'title3',
        content : 'content3',
        section : '개발'
    }, {
        id : 4,
        title : 'title4',
        content : 'content4',
        section : '개발'
    }];

let s = '개발';
let data = s? blogs.filter(b => b.section === s) : blogs;
undefined
data
(2) [{…}, {…}]
let blogs = [{
        id : 1,
        title : 'title1',
        content : 'content1',
        section : '일상'
    }, {
        id : 2,
        title : 'title2',
        content : 'content2',
        section : '취미'
    }, {
        id : 3,
        title : 'title3',
        content : 'content3',
        section : '개발'
    }, {
        id : 4,
        title : 'title4',
        content : 'content4',
        section : '개발'
    }];

let s = '';
let data = s? blogs.filter(b => b.section === s) : blogs;
undefined
data
(4) [{…}, {…}, {…}, {…}]0: {id: 1, title: 'title1', content: 'content1', section: '일상'}1: {id: 2, title: 'title2', content: 'content2', section: '취미'}2: {id: 3, title: 'title3', content: 'content3', section: '개발'}3: {id: 4, title: 'title4', content: 'content4', section: '개발'}length: 4[[Prototype]]: Array(0)
회원정보.find(user => user.아이디 === 'jjang');
{아이디: 'jjang', 패스워드: '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5', 성별: '남', 휴대폰번호: '010-5004-0000', 이메일: 'hojun1@gmail.com', …}가입연도: "2020-12-02"성별: "남"아이디: "jjang"이메일: "hojun1@gmail.com"주접속위치: "125.242.161.149"패스워드: "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5"휴대폰번호: "010-5004-0000"[[Prototype]]: Object
let 회원정보 = [{
            아이디 : 'jjang',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '남',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun1@gmail.com',
            가입연도 : '2020-12-02',
            주접속위치 : '125.242.161.149'
        }, {
            아이디 : 'jjang2',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '남',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun2@gmail.com',
            가입연도 : '2021-12-02',
            주접속위치 : '125.242.161.149'
        }, {
            아이디 : 'jjang3',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '여',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun3@gmail.com',
            가입연도 : '2021-12-02',
            주접속위치 : '125.242.161.149'
        }, {
            아이디 : 'jjang4',
            패스워드 : '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5',
            성별 : '여',
            휴대폰번호 : '010-5004-0000',
            이메일 : 'hojun4@gmail.com',
            가입연도 : '2020-12-02',
            주접속위치 : '125.242.161.149'
        }];


// 1번 남자인 사람
회원정보.filter(el => el.성별 === '남');

// 2번 남자이면서 2021년도에 가입하신 분
// 2.1
회원정보.filter(el => el.성별 === '남' && el.가입연도.split('-')[0] === '2021');

// 2.2
회원정보.filter(el => el.성별 === '남' && el.가입연도.slice(0, 4) === '2021');

// 3번 아이디가 jjang인 사람을 찾아주세요.
회원정보.find(user => user.아이디 === 'jjang');

// 글이 100개
// 25개는 일상
// 50개는 개발관련 글
// 25개는 취미
let blogs = [{
        id : 1,
        title : 'title1',
        content : 'content1',
        section : '일상'
    }, {
        id : 2,
        title : 'title2',
        content : 'content2',
        section : '취미'
    }, {
        id : 3,
        title : 'title3',
        content : 'content3',
        section : '개발'
    }, {
        id : 4,
        title : 'title4',
        content : 'content4',
        section : '개발'
    }];

let s = '개발';
let data = s? blogs.filter(b => b.section === s) : blogs;
{아이디: 'jjang', 패스워드: '5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5', 성별: '남', 휴대폰번호: '010-5004-0000', 이메일: 'hojun1@gmail.com', …}
