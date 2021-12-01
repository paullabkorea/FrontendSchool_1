// 함수
undefined
// 1. 재사용성
// 2. 아키텍처 파악
// 3. 유지보수
undefined
function 땅다지기(){}
undefined
function 시멘트작업(){}
undefined
function 철근(){}
undefined
function 벽돌(){}
undefined
function 지붕(){}
undefined
땅다지기()
시멘트작업()
철근()
벽돌()
지붕()
undefined
function 함수하나(){
    let x = 10
}
undefined
function 함수하나(){
    let x = 10
}
undefined
function 함수하나(){
    let x = 10;
    console.log('함수하나 호출');
}
undefined
function 함수둘(){
    let y = 10;
    console.log('함수둘 호출');
}
undefined
함수하나()
VM10413:3 함수하나 호출
undefined
함수둘()
VM10431:3 함수둘 호출
undefined
//block scope, function scope
undefined
y
VM10503:1 Uncaught ReferenceError: y is not defined
    at <anonymous>:1:1
(익명) @ VM10503:1
function 함수둘(){
    var y = 10;
    console.log('함수둘 호출');
}
undefined
함수둘()
VM10518:3 함수둘 호출
undefined
y
VM10576:1 Uncaught ReferenceError: y is not defined
    at <anonymous>:1:1
(익명) @ VM10576:1
k
VM10628:1 Uncaught ReferenceError: k is not defined
    at <anonymous>:1:1
(익명) @ VM10628:1
let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
    k += 10;
    console.log(k)
}
viewk()
changek()
viewk()
VM10819:3 10
VM10819:7 20
VM10819:3 20
undefined
let k = 10;
function viewk(){
    console.log(k);
}
function changek(){
    let k = 20;
    console.log(k)
}
viewk()
changek()
viewk()
VM10835:3 10
VM10835:7 20
VM10835:3 10
undefined
// 캡슐화, 추상화
undefined
function add(a, b) {
    return a + b;
}

add(10, 20);
30
// 파라미터 : a, b 변수명
// 아규먼트 : 10, 20 값
undefined
function add(a = 100, b = 200) {
    return a + b;
}

add(10, 20);
30
add(10);
210
add();
300
add(b=300)
500
function add(a = 100, b = 200) {
    return a + b;
    console.log('hojun')
}

add()
300
function add(a = 100, b = 200) {
    if (a == 100){
        return
    }
    return a + b
}

add()
undefined
add(,300)
VM11357:1 Uncaught SyntaxError: Unexpected token ','
add(undefined, 300);
undefined
function add(a = 100, b = 200) {
    return a + b;
}
undefined
add(undefined, 300);
400
let hello = function() {
    console.log("Hello");
};
undefined
hello()
VM11418:2 Hello
undefined
let hi = hello
undefined
hi()
VM11418:2 Hello
undefined
unction add({ a = 100, b = 200 }) {
  console.log(a+b);
}

add({b: 300});
VM11520:1 Uncaught SyntaxError: Unexpected identifier
function add({ a = 100, b = 200 }) {
  console.log(a+b);
}

add({b: 300});
VM11530:2 400
undefined
add({a: 100});
VM11530:2 300
undefined
add();
VM11530:1 Uncaught TypeError: Cannot read properties of undefined (reading 'a')
    at add (<anonymous>:1:16)
    at <anonymous>:1:1
add @ VM11530:1
(익명) @ VM11554:1
let a = 100;
let b = 200;

{a, b}
200
let c = {a, b}
undefined
c
{a: 100, b: 200}
let c = {
    'a':100,
    'b':200
}
undefined
c
{a: 100, b: 200}
{100, 200}
200
let 오브 = {
    a,
    b
}
undefined
오브
{a: 100, b: 200}
let test {
    'a':a,
    'b':b
}
VM11953:1 Uncaught SyntaxError: Unexpected token '{'
let test = {
    'a':a,
    'b':b
}
undefined
test
{a: 100, b: 200}
if (true) {
    let y = 10;   
}
undefined
console.log(y)
VM12111:1 Uncaught ReferenceError: y is not defined
    at <anonymous>:1:13
(익명) @ VM12111:1
let yy = 10
if (true) {
    let y = 10;
    console.log(y);
}
console.log(y);
VM12228:4 10
VM12228:6 Uncaught ReferenceError: y is not defined
    at <anonymous>:6:13
(익명) @ VM12228:6
let yy = 10
if (true) {
    let yy = 10;
    console.log(yy);
}
console.log(yy);
VM12249:4 10
VM12249:6 10
undefined
let yy = 100
if (true) {
    let yy = 10;
    console.log(yy);
}
console.log(yy);
VM12262:4 10
VM12262:6 100
undefined
if (true) {
    const y = 10;
    console.log(y);
}
console.log(y);
VM12298:3 10
VM12298:5 Uncaught ReferenceError: y is not defined
    at <anonymous>:5:13
(익명) @ VM12298:5
if (true) {
    var yyy = 10;
    console.log(yyy);
}
console.log(yyy);
VM12339:3 10
VM12339:5 10
undefined
function 변수선언(){
    var nn = 1000;
}
변수선언()
undefined
console.log(nn)
VM12506:1 Uncaught ReferenceError: nn is not defined
    at <anonymous>:1:13
(익명) @ VM12506:1
let c = console.log
undefined
let d = console.dir
undefined
function 다찍어(data, log, dir){
    console.log(data)
    console.dir(data)
}
undefined
let c = console.log
let d = console.dir
let array = [10, 20, 30];
다찍어(array, c, d)
VM12810:2 (3) [10, 20, 30]
VM12810:3 Array(3)
undefined
// 기명 함수와 익명함수
undefined
let add = function (a, b){
    return a + b
}
VM13089:1 Uncaught SyntaxError: Identifier 'add' has already been declared
let add10 = function (a, b){
    return a + b
}
undefined
console.dir(add10)
VM13171:1 ƒ add10(a, b)arguments: nullcaller: nulllength: 2name: "add10"prototype: {constructor: ƒ}[[FunctionLocation]]: VM13101:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]
undefined
function add20(a, b){
    return a + b
}
undefined
console.dir(add20)
VM13298:1 ƒ add20(a, b)arguments: nullcaller: nulllength: 2name: "add20"prototype: {constructor: ƒ}[[FunctionLocation]]: VM13244:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]
undefined
console.dir(function (a, b){
    return a + b
})
VM13340:1 ƒ anonymous(a, b)arguments: nullcaller: nulllength: 2name: ""prototype: {constructor: ƒ}[[FunctionLocation]]: VM13340:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]
undefined
// 위에 2개가 기명함수이고(add10과 add20입니다), 맨 마지막에 실행한 것이 익명함수입니다.
undefined
// 화살표 함수
undefined
let add30 = (a, b) => a + b;
undefined
add30(100, 100);
200
let add40 = (a, b) => {  // 중괄호는 본문 여러 줄로 구성되어 있음을 알려줍니다.
  let result = a + b;
  return result; // 중괄호를 사용했다면, return 지시자로 결괏값을 반환해주어야 합니다.
};
undefined
