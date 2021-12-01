// 날짜
undefined
let d = new Date();
undefined
d.getDate()
1
// 날짜는 1부터
undefined
d.getMonth()
11
// 월은 0부터
undefined
d.getDay()
3
// 요일은 0이 일요일
undefined
d.getSeconds()
15
d.getFullYear()
2021
d.getYear() // 사용하지 않음, 1900년도부터 연도 계산
121
// 배열
undefined
let 과일 = new Array(5);
undefined
let 과일 = new Array('사과', '수박', '복숭아', '딸기', '바나나');
undefined
let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
undefined
과일[0] = '한라봉'
'한라봉'
과일[0][0] = ㅋㅋ
VM4013:1 Uncaught ReferenceError: ㅋㅋ is not defined
    at <anonymous>:1:12
(익명) @ VM4013:1
과일[0][0] = 'ㅋㅋ'
'ㅋㅋ'
과일[0][0]
'한'
// 참고 : 메서드 체이팅
'01001'.replace('0', ' ').replace('1', '#')
' #001'
// 참고 : 메서드 체이팅
'01001'.replace(/0/g, ' ').replace(/1/g, '#')
' #  #'
// 메서드 체이닝
undefined
let 전교점수 = [
           // 1반
           [[10, 20, 30, 40, 50],
           [20, 30, 40, 50, 60]],
           // 2반
           [[10, 20, 30, 40, 50],
           [20, 30, 40, 50, 60]],
         ];
undefined
let 행렬 = [[1,2,3],[4,5,6],[7,8,9]];
undefined
행렬[0]
(3) [1, 2, 3]
행렬[0][0]
1
행렬[0] + 행렬[0]
'1,2,31,2,3'
행렬[0] * 2
NaN
행렬[0] - 행렬[0]
NaN
행렬[0] / 행렬[0]
NaN
행렬[0].toString()
'1,2,3'
행렬[0] + ''
'1,2,3'
let sample = [1, 2, 3]
undefined
for (let i in sample) {
    sample[i] *= 2 // sample[i] = sample[i] * 2
}
sample
(3) [2, 4, 6]
for (let i in sample) {
    console.log(i)
}
sample
VM4849:2 0
VM4849:2 1
VM4849:2 2
(3) [2, 4, 6]
for (let i of sample) {
    console.log(i)
}
sample
VM4863:2 2
VM4863:2 4
VM4863:2 6
(3) [2, 4, 6]
for (let i of sample) {
    i *= 2
}
sample
(3) [2, 4, 6]
// 물데네전세표응
undefined
0 + ''         // -> "0"
-0 + ''        // -> "0"
1 + ''         // -> "1"
-1 + ''        // -> "-1"
NaN + ''       // -> "NaN"
Infinity + ''  // -> "Infinity"
-Infinity + '' // -> "-Infinity"
'NaN'
let index = 0;
for (let i of sample) {
    sample[index] *= 2;
    index++;
}
sample
(3) [4, 8, 12]
전교점수
(2) [Array(2), Array(2)]0: (2) [Array(5), Array(5)]0: (5) [10, 20, 30, 40, 50]1: (5) [20, 30, 40, 50, 60]length: 2[[Prototype]]: Array(0)1: (2) [Array(5), Array(5)]0: (5) [10, 20, 30, 40, 50]1: (5) [20, 30, 40, 50, 60]length: 2[[Prototype]]: Array(0)length: 2[[Prototype]]: Array(0)
let 전교점수 = [
           // 1반
           [[10, 20, 30, 40, 50],
           [20, 30, 40, 50, 60]],
           // 2반
           [[10, 20, 30, 40, 50],
           [20, 30, 40, 50, 60]],
         ];
undefined
// 각각의 반의 평균을 구하라
undefined
전교점수[0]
(2) [Array(5), Array(5)]0: (5) [10, 20, 30, 40, 50]1: (5) [20, 30, 40, 50, 60]length: 2[[Prototype]]: Array(0)
전교점수[0][0][0]
10
(전교점수[0][0][0] + 전교점수[0][0][1] + 전교점수[0][0][2] + 전교점수[0][0][3] + 전교점수[0][0][4]) / 5
30
(전교점수[0][1][0] + 전교점수[0][1][1] + 전교점수[0][1][2] + 전교점수[0][1][3] + 전교점수[0][1][4]) / 5
40
(30 + 40) / 2
35
let 회원정보 = [
  {
    "_id": "61a6e15755c549a4efa46b04",
    "index": 0,
    "guid": "3c0fc294-6449-4933-a5c3-7af5da832b53",
    "isActive": false,
    "balance": "$1,176.61",
    "picture": "http://placehold.it/32x32",
    "age": 23,
    "eyeColor": "brown",
    "name": "Angel Barrett",
    "gender": "female",
    "company": "ULTRASURE",
    "email": "angelbarrett@ultrasure.com",
    "phone": "+1 (997) 594-2852",
    "address": "297 Baltic Street, Steinhatchee, Missouri, 1422",
    "about": "Incididunt quis nostrud mollit eiusmod dolor cupidatat dolore mollit laborum enim veniam mollit. Adipisicing irure esse esse id minim nostrud occaecat do esse. Sunt laborum sit est elit excepteur aliquip amet excepteur id et cillum. Exercitation do duis aliqua non excepteur ullamco. Do quis sunt aliquip tempor occaecat nisi. Ex quis consequat Lorem reprehenderit mollit velit quis.\r\n",
    "registered": "2017-08-17T08:27:27 -09:00",
    "latitude": -81.545557,
    "longitude": -168.074366,
    "tags": [
      "ea",
      "aliqua",
      "adipisicing",
      "deserunt",
      "sit",
      "eiusmod",
      "officia"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Michael Gay"
      },
      {
        "id": 1,
        "name": "Jaclyn Merrill"
      },
      {
        "id": 2,
        "name": "Roberts Larson"
      }
    ],
    "greeting": "Hello, Angel Barrett! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "61a6e1576056250cf008b851",
    "index": 1,
    "guid": "2fbe963f-a491-4bd0-b998-00cab8a2ccf6",
    "isActive": false,
    "balance": "$1,910.40",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "green",
    "name": "Linda Finley",
    "gender": "female",
    "company": "ROTODYNE",
    "email": "lindafinley@rotodyne.com",
    "phone": "+1 (993) 499-2726",
    "address": "123 Beverley Road, Valmy, Georgia, 6065",
    "about": "Ex proident fugiat elit tempor minim incididunt nostrud culpa minim reprehenderit non deserunt dolor non. Nostrud sint est deserunt cillum reprehenderit est sit aliqua do excepteur nulla ullamco nisi magna. In laborum et Lorem incididunt cillum voluptate adipisicing elit aliquip elit.\r\n",
    "registered": "2017-08-31T10:26:45 -09:00",
    "latitude": -65.701054,
    "longitude": 109.938323,
    "tags": [
      "commodo",
      "minim",
      "laboris",
      "non",
      "in",
      "officia",
      "culpa"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Ina Wilson"
      },
      {
        "id": 1,
        "name": "Dorthy Stout"
      },
      {
        "id": 2,
        "name": "Barbara Atkinson"
      }
    ],
    "greeting": "Hello, Linda Finley! You have 6 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "61a6e157806a813eb9465e88",
    "index": 2,
    "guid": "93d791e0-29da-4515-aed0-3818cc4f790b",
    "isActive": false,
    "balance": "$1,089.03",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "blue",
    "name": "Kelli Montoya",
    "gender": "female",
    "company": "EWAVES",
    "email": "kellimontoya@ewaves.com",
    "phone": "+1 (845) 435-3076",
    "address": "279 Bergen Street, Brooktrails, Maine, 1680",
    "about": "Ea tempor officia in aliqua ut aliqua. Sint elit cillum incididunt nisi dolor aute id Lorem enim id qui. Lorem ullamco do duis laborum quis est eu proident consectetur. Nostrud exercitation ut ullamco nisi cupidatat excepteur amet quis deserunt qui sunt nisi non. Aliqua ad tempor amet ea qui officia in. Exercitation incididunt est consectetur officia id dolore magna nostrud et officia commodo in pariatur. Pariatur cupidatat adipisicing reprehenderit dolor irure officia dolore sit minim sunt exercitation veniam culpa.\r\n",
    "registered": "2014-08-08T06:41:31 -09:00",
    "latitude": 83.23495,
    "longitude": -171.637737,
    "tags": [
      "enim",
      "nulla",
      "ut",
      "elit",
      "nostrud",
      "cupidatat",
      "nisi"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Dollie Lara"
      },
      {
        "id": 1,
        "name": "Andrea Wolfe"
      },
      {
        "id": 2,
        "name": "Sweeney Mcleod"
      }
    ],
    "greeting": "Hello, Kelli Montoya! You have 1 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "61a6e15703427bf05796e46b",
    "index": 3,
    "guid": "08294695-899d-413d-aaa0-3428e9c96653",
    "isActive": false,
    "balance": "$2,535.40",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "green",
    "name": "Fuller Wade",
    "gender": "male",
    "company": "QUALITERN",
    "email": "fullerwade@qualitern.com",
    "phone": "+1 (896) 499-2320",
    "address": "204 Cornelia Street, Baden, Virgin Islands, 2065",
    "about": "Exercitation mollit commodo minim dolore sint magna eu magna duis laboris cupidatat incididunt pariatur. In aute officia laborum adipisicing aliquip laboris ipsum nisi excepteur dolor anim ad aliqua enim. Ut dolore consequat nulla consectetur amet duis culpa aliquip in.\r\n",
    "registered": "2016-03-02T12:45:54 -09:00",
    "latitude": -62.045957,
    "longitude": -19.533903,
    "tags": [
      "esse",
      "adipisicing",
      "proident",
      "cillum",
      "incididunt",
      "ad",
      "eu"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Whitfield Sawyer"
      },
      {
        "id": 1,
        "name": "Bridgette Henson"
      },
      {
        "id": 2,
        "name": "Hilda Stephens"
      }
    ],
    "greeting": "Hello, Fuller Wade! You have 2 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "61a6e15747976fd4580952ef",
    "index": 4,
    "guid": "c7df08b6-50d7-45fe-bf7c-90ab400c3473",
    "isActive": false,
    "balance": "$2,385.74",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": "Molina Pate",
    "gender": "male",
    "company": "GINKOGENE",
    "email": "molinapate@ginkogene.com",
    "phone": "+1 (932) 424-2314",
    "address": "948 Scott Avenue, Coventry, Delaware, 3251",
    "about": "Veniam irure officia adipisicing dolore. Enim velit anim aute id labore dolor et eu qui sint et velit minim aliqua. Ea duis sit sit adipisicing consectetur dolore fugiat mollit commodo. Consequat exercitation sunt enim voluptate eiusmod magna fugiat exercitation fugiat mollit magna deserunt.\r\n",
    "registered": "2020-04-19T02:54:29 -09:00",
    "latitude": 6.876957,
    "longitude": -101.988855,
    "tags": [
      "dolor",
      "officia",
      "occaecat",
      "veniam",
      "culpa",
      "incididunt",
      "ea"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Fern Crane"
      },
      {
        "id": 1,
        "name": "Parks Sykes"
      },
      {
        "id": 2,
        "name": "Bennett Mcmillan"
      }
    ],
    "greeting": "Hello, Molina Pate! You have 1 unread messages.",
    "favoriteFruit": "apple"
  }
]
undefined
회원정보[0]
{_id: '61a6e15755c549a4efa46b04', index: 0, guid: '3c0fc294-6449-4933-a5c3-7af5da832b53', isActive: false, balance: '$1,176.61', …}
회원정보[0]['friends']
(3) [{…}, {…}, {…}]
회원정보[0]['friends'][0]
{id: 0, name: 'Michael Gay'}
회원정보[0]['friends'][0]['name']
'Michael Gay'
(전교점수[0][0][0] + 전교점수[0][0][1] + 전교점수[0][0][2] + 전교점수[0][0][3] + 전교점수[0][0][4]) / 5
30
let 총합 = 0;
for(let i=0; i < 5; i++){
    총합 += 전교점수[0][0][i];
}
총합
150
(전교점수[0][1][0] + 전교점수[0][1][1] + 전교점수[0][1][2] + 전교점수[0][1][3] + 전교점수[0][1][4]) / 5
40
let 총합2 = 0;
for(let i=0; i < 5; i++){
    총합2 += 전교점수[0][1][i];
}
총합2
200
let 총합 = 0;
for(let i=0; i<2; i++) {
    for(let j=0; j<5; j++){
        총합 += 전교점수[0][i][j];
    }
}
총합
350
let 총합 = 0;
let 더해진수 = 0;
for(let i=0; i<2; i++) {
    for(let j=0; j<5; j++){
        총합 += 전교점수[0][i][j];
        더해진수++;
    }
}
총합/더해진수
35
let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
undefined
let 과일선물 = ['체리', '멜론'];
undefined
let 꺼낸과일 = 과일.pop();
undefined
과일
(4) ['사과', '수박', '복숭아', '딸기']
꺼낸과일
'바나나'
과일.push(꺼낸과일)
5
과일
(5) ['사과', '수박', '복숭아', '딸기', '바나나']
과일.push('한라봉')
6
과일
(6) ['사과', '수박', '복숭아', '딸기', '바나나', '한라봉']
과일.unshift('귤')
7
과일
(7) ['귤', '사과', '수박', '복숭아', '딸기', '바나나', '한라봉']
과일.toString()
'귤,사과,수박,복숭아,딸기,바나나,한라봉'
과일.join('!!*')
'귤!!*사과!!*수박!!*복숭아!!*딸기!!*바나나!!*한라봉'
과일
(7) ['귤', '사과', '수박', '복숭아', '딸기', '바나나', '한라봉']
let 전화번호 = 010.1000.1000
VM6347:1 Uncaught SyntaxError: Unexpected number
let 전화번호 = '010.1000.1000'
undefined
// 010-1000-1000
undefined
전화번호.split('.')
(3) ['010', '1000', '1000']
전화번호.split('.').join('-')
'010-1000-1000'
과일
(7) ['귤', '사과', '수박', '복숭아', '딸기', '바나나', '한라봉']
과일.shift()
'귤'
과일
(6) ['사과', '수박', '복숭아', '딸기', '바나나', '한라봉']
과일.unshift('천혜향')
7
과일
(7) ['천혜향', '사과', '수박', '복숭아', '딸기', '바나나', '한라봉']
과일.slice(2, 5)
(3) ['수박', '복숭아', '딸기']
과일.slice(2)
(5) ['수박', '복숭아', '딸기', '바나나', '한라봉']
과일
(7) ['천혜향', '사과', '수박', '복숭아', '딸기', '바나나', '한라봉']0: "천혜향"1: "사과"2: "수박"3: "복숭아"4: "딸기"5: "바나나"6: "한라봉"length: 7[[Prototype]]: Array(0)
과일.slice(-5, -2)
(3) ['수박', '복숭아', '딸기']0: "수박"1: "복숭아"2: "딸기"length: 3[[Prototype]]: Array(0)
과일.slice(2, -1)
(4) ['수박', '복숭아', '딸기', '바나나']
과일[-1]
undefined
과일.splice(2, 3);
(3) ['수박', '복숭아', '딸기']
과일
(4) ['천혜향', '사과', '바나나', '한라봉']0: "천혜향"1: "사과"2: "바나나"3: "한라봉"length: 4[[Prototype]]: Array(0)
과일.splice(1, 3, 'apple');
(3) ['사과', '바나나', '한라봉']
과일
(2) ['천혜향', 'apple']
let 과일 = ['복숭아', '딸기', '바나나'];
let 제주과일 = ['귤', '한라봉', '천혜향'];
undefined
과일.concat(제주과일);
(6) ['복숭아', '딸기', '바나나', '귤', '한라봉', '천혜향']
제주과일.concat(과일)
(6) ['귤', '한라봉', '천혜향', '복숭아', '딸기', '바나나']
과일
(3) ['복숭아', '딸기', '바나나']
제주과일
(3) ['귤', '한라봉', '천혜향']
과일.sort()
(3) ['딸기', '바나나', '복숭아']
let data = [10, 20, 30, 11, 22, 25];
undefined
data.sort()
(6) [10, 11, 20, 22, 25, 30]
data
(6) [10, 11, 20, 22, 25, 30]
let data = [10, 20, 30, 11, 22, 25, 111];
undefined
data.sort()
(7) [10, 11, 111, 20, 22, 25, 30]
data
(7) [10, 11, 111, 20, 22, 25, 30]
data.reverse()
(7) [30, 25, 22, 20, 111, 11, 10]
data
(7) [30, 25, 22, 20, 111, 11, 10]
let data = [10, 20, 30, 11, 22, 25, 111];
undefined
data.reverse()
(7) [111, 25, 22, 11, 30, 20, 10]
data
(7) [111, 25, 22, 11, 30, 20, 10]
data.sort((a, b) => a - b) // 오름차순
(7) [10, 11, 20, 22, 25, 30, 111]
data.sort((a, b) => b - a) // 내림차순
(7) [111, 30, 25, 22, 20, 11, 10]
data.sort(function(a, b){return a-b})
(7) [10, 11, 20, 22, 25, 30, 111]
data.sort(function(a, b){return b-a})
(7) [111, 30, 25, 22, 20, 11, 10]
