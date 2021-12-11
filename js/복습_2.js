let 과일 = ['사과', '수박', '복숭아', '딸기', '바나나'];
undefined
let 과일선물 = ['체리', '멜론'];
undefined
let 꺼낸과일 = 과일.pop();
undefined
꺼낸과일
'바나나'
과일
(4) ['사과', '수박', '복숭아', '딸기']
과일.push(꺼낸과일)
5
과일
(5) ['사과', '수박', '복숭아', '딸기', '바나나']
과일[0]
'사과'
과일[0] = '한라봉'
'한라봉'
과일
(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']0: "한라봉"1: "수박"2: "복숭아"3: "딸기"4: "바나나"length: 5[[Prototype]]: Array(0)
과일.toString()
'한라봉,수박,복숭아,딸기,바나나'
과일.join('!!*')
'한라봉!!*수박!!*복숭아!!*딸기!!*바나나'
과일
(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']
let 꺼낸과일 = 과일.shift()
undefined
과일
(4) ['수박', '복숭아', '딸기', '바나나']
꺼낸과일
'한라봉'
과일.unshift(꺼낸과일)
5
과일
(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']
과일.slice(1, 3)
(2) ['수박', '복숭아']
과일
(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']
let 활용할과일 = 과일.slice(1, 3)
undefined
활용할과일
(2) ['수박', '복숭아']
과일
(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']
과일.splice(1, 0, '천혜향')
[]
과일
(6) ['한라봉', '천혜향', '수박', '복숭아', '딸기', '바나나']
과일.splice(1, 1, ['하나', '둘'])
['천혜향']
과일
(6) ['한라봉', Array(2), '수박', '복숭아', '딸기', '바나나']0: "한라봉"1: (2) ['하나', '둘']2: "수박"3: "복숭아"4: "딸기"5: "바나나"length: 6[[Prototype]]: Array(0)
과일.splice(1, 1)
[Array(2)]
과일
(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']
과일.splice(1, 0, ['하나', '둘'])
[]
과일
(6) ['한라봉', Array(2), '수박', '복숭아', '딸기', '바나나']
[...과일, ...과일]
(12) ['한라봉', Array(2), '수박', '복숭아', '딸기', '바나나', '한라봉', Array(2), '수박', '복숭아', '딸기', '바나나']
...과일
VM967:1 Uncaught SyntaxError: Unexpected token '...'
[...과일]
(6) ['한라봉', Array(2), '수박', '복숭아', '딸기', '바나나']
let 잘려진과일 = [...과일.slice(0, 1), ...과일.slice(2)]
undefined
잘려진과일
(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']
let 과일하나 = 과일.slice(0, 1)
undefined
let 과일둘 = 과일.slice(2)
undefined
과일하나.push(과일둘)
2
과일하나
(2) ['한라봉', Array(4)]
과일하나.push(...과일둘)
6
과일하나
(6) ['한라봉', Array(4), '수박', '복숭아', '딸기', '바나나']
let 과일하나 = 과일.slice(0, 1)
undefined
과일하나
['한라봉']
과일둘
(4) ['수박', '복숭아', '딸기', '바나나']
과일하나.concat(과일둘)
(5) ['한라봉', '수박', '복숭아', '딸기', '바나나']
과일.sort()
(6) ['딸기', '바나나', '복숭아', '수박', Array(2), '한라봉']
과일
(6) ['딸기', '바나나', '복숭아', '수박', Array(2), '한라봉']
const array = [1, 30, 4, 21, 100000];
undefined
array.sort()
(5) [1, 100000, 21, 30, 4]
array
(5) [1, 100000, 21, 30, 4]
const array = [10, 20]
undefined
const array = [1, 30, 4, 21, 100000];
undefined
array = [10, 20]
VM1646:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:7
(익명) @ VM1646:1
function compare(a, b) {
  if (a > b) {
    return -1;
  }
  if (a < b) {
    return 1;
  }
  return 0;
}
undefined
let 배열 = [1, 30, 4, 21, 100000]
undefined
배열.sort()
(5) [1, 100000, 21, 30, 4]
배열.sort(compare)
(5) [100000, 30, 21, 4, 1]
function compare(a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}
undefined
배열.sort(compare)
(5) [1, 4, 21, 30, 100000]
배열.length
5
배열.map
ƒ map() { [native code] }
배열.fillter
undefined
배열.find
ƒ find() { [native code] }
배열.map(x => x**2)
(5) [1, 16, 441, 900, 10000000000]
배열
(5) [1, 4, 21, 30, 100000]
과일.map(x => x[0])
(6) ['딸', '바', '복', '수', '하나', '한']
let 전국구과일상점 = [['제주', 5], ['부산', 5], ['서울', 15], ['대전', 10]]
undefined
let 과일 = []
for (let x of 전국구과일상점){
    과일.push(x[1]);
}
4
과일
(4) [5, 5, 15, 10]
let 전국구과일상점 = [['제주', 5], ['부산', 5], ['서울', 15], ['대전', 10]];
전국구과일상점.map(x => x[1])
(4) [5, 5, 15, 10]
전국구과일상점.filter(x => x >= 10)
[]
전국구과일상점
(4) [Array(2), Array(2), Array(2), Array(2)]0: (2) ['제주', 5]1: (2) ['부산', 5]2: (2) ['서울', 15]3: (2) ['대전', 10]length: 4[[Prototype]]: Array(0)
전국구과일상점.filter(x => x[1] >= 10)
(2) [Array(2), Array(2)]
전국구과일상점.find(x => x[1] >= 10)
(2) ['서울', 15]
array
(5) [1, 30, 4, 21, 100000]
array.forEach(x => x**2)
undefined
array
(5) [1, 30, 4, 21, 100000]
let 제곱수 = []
array.forEach(x => 제곱수.push(x**2))
undefined
제곱수
(5) [1, 900, 16, 441, 10000000000]
let fruits = 
[
  "사과",
  "오렌지",
  "자두",
];
undefined
fruits
(3) ['사과', '오렌지', '자두']
let fruits = 
[
  "사과",
  "오렌지",
  "자두",
];
undefined
let fruits = 
[
  "사
과",
  "오렌지",
  "자두",
];
VM3137:3 Uncaught SyntaxError: Invalid or unexpected token
let fruits = 
[
  "사과",


  "오렌지",
  "자두",
];
undefined
fruits
(3) ['사과', '오렌지', '자두']
let fruits = 
[
  `<ul>
    <li>abc</li>
   </ul>`,
  "오렌지",
  "자두",
];
undefined
fruits 
(3) ['<ul>\n    <li>abc</li>\n   </ul>', '오렌지', '자두']
function 값수정(x){
    x[1] = 100;
}
undefined
값수정(fruits)
undefined
fruits
(3) ['<ul>\n    <li>abc</li>\n   </ul>', 100, '자두']
function 값수정2(x){
    x = 100;
}
undefined
let xx = 1000;
값수정2(xx)
undefined
xx
1000
a = [1, 2, 3, 4, 5]
(5) [1, 2, 3, 4, 5]
b = a
(5) [1, 2, 3, 4, 5]
값수정(b)
undefined
a
(5) [1, 100, 3, 4, 5]
b
(5) [1, 100, 3, 4, 5]
a = [1, 2, 3, 4, 5]
b = [...a] 
(5) [1, 2, 3, 4, 5]
값수정(b)
undefined
a
(5) [1, 2, 3, 4, 5]
b
(5) [1, 100, 3, 4, 5]
[...a, ...a, 1000, ...a]
(16) [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]
a = [1, 2, 3, 4, 5]
b = a.slice()
(5) [1, 2, 3, 4, 5]
b
(5) [1, 2, 3, 4, 5]
b[1] = 1000
1000
b
(5) [1, 1000, 3, 4, 5]
a
(5) [1, 2, 3, 4, 5]
a.hello = 'hojun'
'hojun'
for (let i in a){
    console.log(i);
}
VM4011:2 0
VM4011:2 1
VM4011:2 2
VM4011:2 3
VM4011:2 4
VM4011:2 hello
undefined
let fruits = [];
fruits[123] = "사과";

alert(fruits.length);
undefined
let fruits = [];
fruits[123] = "사과";

fruits.length;
124
fruits
(124) [비어 있음 × 123, '사과']
let fruits = [];
fruits.length = 10;
10
fruits
(10) [비어 있음 × 10]
fruits[3] = undefined
undefined
fruits 
(10) [비어 있음 × 3, undefined, 비어 있음 × 6]
fruits[4] = null
null
fruits
(10) [비어 있음 × 3, undefined, null, 비어 있음 × 5]
let arr = new Array("사과", "배", "기타");
undefined
arr
(3) ['사과', '배', '기타']
arr = ['사과', '배', '기타']
(3) ['사과', '배', '기타']
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
undefined
matrix[1][1]
5
let arr = [1, 0, false];
undefined
arr.includes(1)
true
과일 = ['사과', '배', '기타']
(3) ['사과', '배', '기타']
과일.includes('사과')
true
과일.includes('한라봉')
false
'하나,둘,셋,넷,닷'
'하나,둘,셋,넷,닷'
'하나,둘,셋,넷,닷'.split('')
(10) ['하', '나', ',', '둘', ',', '셋', ',', '넷', ',', '닷']
'하나,둘,셋,넷,닷'.split(',')
(5) ['하나', '둘', '셋', '넷', '닷']
//map의 특징
// 1. key의 중복을 허락하지 않습니다.
// 2. key와 value의 쌍으로 구성되어 있습니다.
// 3. object와 다르게 keys, values 등의 메서드를 사용할 수 있습니다.
undefined
x = {'one':'하나', 'two':'둘'}
{one: '하나', two: '둘'}
x.keys()
VM5030:1 Uncaught TypeError: x.keys is not a function
    at <anonymous>:1:3
(익명) @ VM5030:1
x = {true:'하나', false:'둘'}
{true: '하나', false: '둘'}
x.true
'하나'
x = {1:'하나', 2:'둘'}
{1: '하나', 2: '둘'}
x.1
VM5098:1 Uncaught SyntaxError: Unexpected number
x[1]
'하나'
Object.entries(x)
(2) [Array(2), Array(2)]0: (2) ['1', '하나']1: (2) ['2', '둘']length: 2[[Prototype]]: Array(0)
let 자료형 = new Map(Object.entries(x))
undefined
자료형
Map(2) {'1' => '하나', '2' => '둘'}
map.set(1, 'num1')
VM5313:1 Uncaught ReferenceError: map is not defined
    at <anonymous>:1:1
(익명) @ VM5313:1
자료형.set(1, 'num1')
Map(3) {'1' => '하나', '2' => '둘', 1 => 'num1'}
let recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion',    50]
]);
undefined
recipeMap 
Map(3) {'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50}
recipeMap.keys()
MapIterator {'cucumber', 'tomatoes', 'onion'}
recipeMap.values()
MapIterator {500, 350, 50}
recipeMap.entries()
MapIterator {'cucumber' => 500, 'tomatoes' => 350, 'onion' => 50}
recipeMap.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
VM5426:2 cucumber: 500
VM5426:2 tomatoes: 350
VM5426:2 onion: 50
undefined
[10, 20, 30].forEach((value, index, arr) => {
  console.log(`${value}: ${index}, arr`);
});
VM5471:2 10: 0, arr
VM5471:2 20: 1, arr
VM5471:2 30: 2, arr
undefined
[10, 20, 30].forEach((value, index, arr) => {
  console.log(`${value}: ${index}, ${arr}`);
});
VM5483:2 10: 0, 10,20,30
VM5483:2 20: 1, 10,20,30
VM5483:2 30: 2, 10,20,30
undefined
['이호준', '홍길동', '이호준', '김길동', '심영은']
(5) ['이호준', '홍길동', '이호준', '김길동', '심영은']
new Set(['이호준', '홍길동', '이호준', '김길동', '심영은'])
Set(4) {'이호준', '홍길동', '김길동', '심영은'}[[Entries]]0: "이호준"1: "홍길동"2: "김길동"3: "심영은"size: 4[[Prototype]]: Set
let 게시물작성자 = new Set(['이호준', '홍길동', '이호준', '김길동', '심영은'])
undefined
게시물작성자.size
4
[a, b] = ['hello', 'world']
(2) ['hello', 'world']
a
'hello'
b
'world'
// 실무에서 JSON은 Array안에 Object의 형태로 되어 있다!
undefined
function 펙토리얼(n) {
    if (n <= 1){
        return n;
    }
    return n * 펙토리얼(n - 1);
}
undefined
펙토리얼(5)
120
// for문으로 수행할 수 있는 모든일 - 재귀함수로 할 수 있습니다.
undefined
// 클로저
// 콜백함수
undefined
function 제곱수(n){
    function 제곱(x){
        return x ** n
    }
    return 제곱
}
VM6408:1 Uncaught SyntaxError: Identifier '제곱수' has already been declared
    at <anonymous>:1:1
(익명) @ VM6408:1
function 제곱수수(n){
    function 제곱(x){
        return x ** n
    }
    return 제곱
}
undefined
let 이제곱 = 제곱수수(2); // 이제곱 = 제곱
let 세제곱 = 제곱수수(3); // 이제곱 = 제곱
undefined
이제곱(2)
4
세제곱(2)
8
let hojun = console.log
undefined
hojun('안녕?')
VM6690:1 안녕?
undefined
function 더하기(a, b) {
    return a + b;
}

function(더하기, 빼기, 나누기, 곱하기, 연산자, a, b){
    if(연산자 === '+'){
        더하기(a, b);
    } else if (연산자 === '-'){
        빼기(a, b);
    }
}
VM7080:5 Uncaught SyntaxError: Function statements require a function name
function 더하기(a, b) {
    return a + b;
}

function 계산기(더하기, 빼기, 나누기, 곱하기, 연산자, a, b){
    if(연산자 === '+'){
        더하기(a, b);
    } else if (연산자 === '-'){
        빼기(a, b);
    }
}
undefined
계산기(더하기, 빼기, 나누기, 곱하기, '+', 10, 20)
VM7202:1 Uncaught ReferenceError: 빼기 is not defined
    at <anonymous>:1:10
(익명) @ VM7202:1
function 빼기(){}

계산기(더하기, 빼기, 나누기, 곱하기, '+', 10, 20)
VM7247:3 Uncaught ReferenceError: 나누기 is not defined
    at <anonymous>:3:14
(익명) @ VM7247:3
function 나누기(){};
function 곱하기(){};
undefined
계산기(더하기, 빼기, 나누기, 곱하기, '+', 10, 20)
undefined
function 계산기(더하기, 빼기, 나누기, 곱하기, 연산자, a, b){
    if(연산자 === '+'){
        return 더하기(a, b);
    } else if (연산자 === '-'){
        return 빼기(a, b);
    }
}
undefined
계산기(더하기, 빼기, 나누기, 곱하기, '+', 10, 20)
30
[더하기, 빼기, 나누기, 곱하기][0](10, 20)
30
array = [1, 30, 4, 21, 100000]
VM7406:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:7
(익명) @ VM7406:1
배열 = [1, 30, 4, 21, 100000]
(5) [1, 30, 4, 21, 100000]
배열.forEach(더하기)
undefined
s = 0
0
// array.forEach(x => s+=x)
function 누적(x){
    s += x
}
undefined
배열.forEach(누적)
undefined
s
100056
// __proto__ (비공식) 문법이에요.
// prototype 공식입니다.
// __proto__는 [[Prototype]]의 getter·setter
undefined
// getter는?
// setter는?
undefined
class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    alert(`${this.name} 은/는 속도 ${this.speed}로 달립니다.`);
  }
  stop() {
    this.speed = 0;
    alert(`${this.name} 이/가 멈췄습니다.`);
  }
}

let animal = new Animal("동물");
undefined
console.dir(animal)
VM7935:1 Animalname: "동물"speed: 0[[Prototype]]: Objectconstructor: class Animalrun: ƒ run(speed)stop: ƒ stop()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
undefined
console.dir(제곱수수)
VM7997:1 ƒ 제곱수수(n)arguments: nullcaller: nulllength: 1name: "제곱수수"prototype: {constructor: ƒ}[[FunctionLocation]]: VM6420:1[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: ​[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()[[Scopes]]: Scopes[0][[Scopes]]: Scopes[2]
undefined
class Animal {

  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name}가 속도 ${this.speed}로 달립니다.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name}가 멈췄습니다.`);
  }

}

class Rabbit extends Animal {
  hide() {
    alert(`${this.name}가 숨었습니다!`);
  }

  stop() {
    super.stop(); // 부모 클래스의 stop을 호출해 멈추고,
    this.hide(); // 숨습니다.
  }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); // 흰 토끼가 속도 5로 달립니다.
rabbit.stop(); // 흰 토끼가 멈췄습니다. 흰 토끼가 숨었습니다!
undefined
// class Hero extends SuperHuman
// class Villain extends SuperHuman
undefined
let promise = new Promise(function(resolve, reject) {
  // 성공했을때? resolve(message)
  // - then
  // 실패했을때? reject(message)
  // - catch
});
undefined
let p = new Promise(function(resolve, reject) {
    resolve('hello world');
}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
});
undefined
let p = new Promise(function(resolve, reject) {
    // resolve('hello world');
    reject('hello world');
}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});
undefined
let p = new Promise(function(resolve, reject) {
    // resolve('hello world');
    reject('hello world');
}).then(메시지 => {
    alert(메시지);
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});
undefined
let p = new Promise(function(resolve, reject) {
    // resolve('hello world');
    reject('hello world');
}).then(메시지 => {
    alert(메시지);
    throw Error("에러 발생!")
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});
undefined
let p = new Promise(function(resolve, reject) {
    // resolve('hello world');
    // reject('hello world');
    resolve('hello world');
}).then(메시지 => {
    alert(메시지);
    throw Error("에러 발생!")
    return 메시지.split(' ')[0]
}).then(메시지 => {
    alert(메시지);
    return 메시지[0]
}).then(메시지 => {
    alert(메시지);
}).catch(메시지 => {
    alert('catch 실행!! :' + 메시지);
});
undefined
