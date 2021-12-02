// 재귀함수
undefined
function factorial(n){
    if(n <= 1) {
        return n
    }
    return n * factorial(n-1)
}
undefined
factorial(5)
120
function sigma(n){
    if(n <= 1) {
        return n
    }
    return n + sigma(n-1)
}
undefined
sigma(5)
15
function reverse(text) {
    text += ''
    if(text.length <= 1) {
        return text
    }
    return reverse(text.slice(1)) + text[0]
}

reverse('hello')
'olleh'
function fib(n){
    if(n <= 2) {
        return n
    }
    return fib(n-1) + fib(n-2)
}
undefined
fib(1)
1
fib(2)
2
fib(3)
3
fib(4)
5
fib(5)
8
fib(6)
13
3 in [1, 2, 3]
false
3 in [1, 2, 3, 3]
true
3 in [1, 2, 4, 4]
true
'bay' in ["redwood", "bay", "cedar", "oak", "maple"]
false
// 배열
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees         // true를 반환합니다.
3 in trees         // true를 반환합니다.
(1 + 2) in trees   // true를 반환합니다. 연산자 우선 순위에 의하여 이 구문의 괄호는 없어도 됩니다.
6 in trees         // false를 반환합니다.
"bay" in trees     // false를 반환합니다. 당신은 배열의 내용이 아닌, 인덱스 값을 명시하여야 합니다.
"length" in trees  // true를 반환합니다. length는 Array(배열) 객체의 속성입니다.

// 미리 정의된 객체
"PI" in Math       // true를 반환합니다.
"P" + "I" in Math  // true를 반환합니다.

// 사용자가 정의한 객체
var myCar = {company: "Lamborghini", model: "Lamborghini Veneno Roadster", year: 2014};
"company" in myCar // true를 반환합니다.
"model" in myCar   // true를 반환합니다
VM753:4 Uncaught TypeError: trees is not a function
    at <anonymous>:4:6
(익명) @ VM753:4
for (let i in [100, 200, 300]){
    console.log(i);
}
VM837:2 0
VM837:2 1
VM837:2 2
undefined
true ? console.log(1):console.log(2)
VM915:1 1
undefined
false ? console.log(1):console.log(2)
VM946:1 2
undefined
'230230230230'.slice(3)
'230230230'
'123456789'.slice(3)
'456789'
'123456789'.slice(0,3)
'123'
fib(1)
1
fib(2)
2
fib(0)
0
fib(1)
1
fib(2)
2
fib(3)
3
fib(4)
5
fib(5)
8
// 익명 즉시 실행 함수
(function () {
  var a = 1;
  var b = 2;
  return a + b;
}());
3
if (true) {
    var x = 10;
    let y = 100;
}
undefined
x
10
yield
VM1305:1 Uncaught ReferenceError: yield is not defined
    at <anonymous>:1:1
(익명) @ VM1305:1
y
VM1316:1 Uncaught ReferenceError: y is not defined
    at <anonymous>:1:1
(익명) @ VM1316:1
function a(){
    var xx = 10;
    let yy = 100;
}

a()
undefined
aa
VM1416:1 Uncaught ReferenceError: aa is not defined
    at <anonymous>:1:1
(익명) @ VM1416:1
xx
VM1426:1 Uncaught ReferenceError: xx is not defined
    at <anonymous>:1:1
(익명) @ VM1426:1
yy
VM1437:1 Uncaught ReferenceError: yy is not defined
    at <anonymous>:1:1
(익명) @ VM1437:1
