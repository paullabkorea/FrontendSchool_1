const mongoose = require('mongoose');

// 1. DB세팅, url뒤에 project 주소로 자동 생성됨
// mongodb://[id:pw]localhost:27017/[project]의 형태
mongoose.connect('mongodb+srv://hojun:hojun1234@cluster0.wkmnn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

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

// 5. Schema(입력 데이터 필드의 데이터 타입)
// type은 String, Number, Date, Buffer, Boolean, Mixed, ObjectedId, Array
const user_info = mongoose.Schema({
    // 아래와 같이 간단하게 작성 가능 - 1
    // name : 'string',
    // age : 'number'
    // 아래와 같이 개행해서 사용하는 것도 가능 - 2
    userid: {
        type: String,
        required: true,
        // unique: true
    },
    name: {
        type: String,
        required: true,
        // unique: false
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: false
    },
    point: {
        type: Number,
    }
});

// 6. 정의된 스키마를 컴파일(객체처럼 사용하기 위해 model() 함수로 컴파일)
const User = mongoose.model('Schema', user_info);

// 7. newUser에 값 입력!
const newUser = new User({
    userid : 'licat',
    name : 'Hojun.lee',
    age : 10,
    gender : '남',
    area : 'jeju',
    point : 1000000,
});

// 2번 파일 수행 후
// 2.1. 지정된 값 읽기
User.find({}, {_id:1, userid:1, gender:1}, function(error, user){
    console.log('-- 지정된 값 데이터 읽기 시작 --');
    if (error) {
        console.log(error);
    } else {
        console.log(user);
    }
    console.log('-- 지정된 값 데이터 읽기 끝 --');
});


// 2.2 1개 데이터 읽기
User.findOne({userid : 'licat'}, function(error, user){
    console.log('-- user 1개 데이터 읽기 시작 --');
    if (error) {
        console.log(error);
    } else {
        console.log(user);
    }
    console.log('-- user 1개 데이터 읽기 끝 --');
});

// 2.3 데이터 수정하기
User.findById({_id:"61d678f779dc72498ce76b72"}, function(error, user){
    console.log('-- user 1개 데이터 수정 시작 --');
    if (error) {
        console.log(error);
    } else {
        user.name = 'Gildong.hong';
        user.save(function(error, modified_user){
            if(error){
                console.log(error);
            } else {
                console.log(modified_user);
            }
        });
    }
    console.log('-- user 1개 데이터 수정 끝 --');
});

// 2.3 user는 삭제하지 않습니다. 삭제 필드를 하나 더 만들어서 보관하세요.
// User.remove({_id:'61cc1f0e8c6318267edb0e1d'}, function(error, output){
//     console.log('-- 삭제 --');
//     if(error){
//         console.log(error);
//     }
// });