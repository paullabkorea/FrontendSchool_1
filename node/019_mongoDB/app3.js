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
    // 아래와 같이 간단하게 작성 가능
    // name : 'string',
    // age : 'number'
    userid: { type: String, required: true }, // unique: true나 false를 줄 수 있습니다.
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    area: { type: String, required: false },
    point: { type: Number }
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

// 8. 데이터 저장
newUser.save(function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log('저장완료!');
    }
});

// 9. User 레퍼런스 전체 데이터 가져오기
User.find(function(error, users){
    console.log('-- 전체 데이터 읽기 시작 --');
    if (error) {
        console.log(error);
    } else {
        console.log(users);
    }
    console.log('-- 전체 데이터 읽기 끝 --');
});