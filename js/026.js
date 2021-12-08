// 이름과 성을 요소로 가진 배열
let arr = ["Hojun", "Lee"]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;

alert(firstName);
alert(surname);
undefined
// 이름과 성을 요소로 가진 배열
let arr = [1000, ["Hojun", "Lee"]]

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [계좌잔고, [firstName, surname]] = arr;

console.log(계좌잔고);
console.log(firstName);
console.log(surname);
VM446:9 1000
VM446:10 Hojun
VM446:11 Lee
undefined
let a = [[1, 2], [3, 4], [5, 6]]
undefined
for (let [i, j] of a){
    console.log(i, j);
}
VM577:2 1 2
VM577:2 3 4
VM577:2 5 6
undefined
try {

  alert('try 블록 시작');  // (1) <--

  lalala; // 에러, 변수가 정의되지 않음!

  alert('try 블록 끝(절대 도달하지 않음)');  // (2)

} catch(err) {

  alert(`에러가 발생했습니다!`); // (3) <--

}
undefined
let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  alert( user.name ); // 이 코드는 동작하지 않습니다.

} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  alert( "데이터에 에러가 있어 재요청을 시도합니다." );
  alert( e.name );
  alert( e.message );
}
undefined
let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  alert( user.name ); // 이 코드는 동작하지 않습니다.

} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  alert( "데이터에 에러가 있어 재요청을 시도합니다." );
  console.error( e );
  alert( e.name );
  alert( e.message );
}
VM665:11 SyntaxError: Unexpected token b in JSON at position 2
    at JSON.parse (<anonymous>)
    at <anonymous>:5:19
(익명) @ VM665:11
undefined
let json = "{ bad json }";

try {

  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  alert( user.name ); // 이 코드는 동작하지 않습니다.

} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  alert( "데이터에 에러가 있어 재요청을 시도합니다." );
  console.dir( e );
  alert( e.name );
  alert( e.message );
}
VM682:11 SyntaxError: Unexpected token b in JSON at position 2
    at JSON.parse (<anonymous>)
    at <anonymous>:5:19message: "Unexpected token b in JSON at position 2"stack: "SyntaxError: Unexpected token b in JSON at position 2\n    at JSON.parse (<anonymous>)\n    at <anonymous>:5:19"[[Prototype]]: Error
undefined
new Error(message);
VM689:1 Uncaught ReferenceError: message is not defined
    at <anonymous>:1:11
(익명) @ VM689:1
new Error('!!hello!!');
Error: !!hello!!
    at <anonymous>:1:1
try {
  alert( 'try 블록 시작' );
  if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
undefined
try {
  alert( 'try 블록 시작' );
  if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
undefined
try {
  alert( 'try 블록 시작' );
  if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
undefined
try {
  alert( 'try 블록 시작' );
  if (confirm('에러를 만드시겠습니까?')) 이상한_코드();
} catch (e) {
  alert( 'catch' );
} finally {
  alert( 'finally' );
}
undefined
console.dir(Error)
VM816:1 ƒ Error()stackTraceLimit: 10captureStackTrace: ƒ captureStackTrace()length: 1name: "Error"prototype: {name: 'Error', message: '', constructor: ƒ, toString: ƒ}arguments: (...)caller: (...)[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: ​[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]
undefined
let hojun = console.log;
hojun('hello world');
VM821:2 hello world
undefined
let l = console.log;
l('hello world');
VM843:2 hello world
undefined
l('asdfasdf')
VM868:1 asdfasdf
undefined
l('asdfaawef')
VM877:1 asdfaawef
undefined
//닌자코드
undefined
// 모던자바스크립트 예제
let promise = new Promise(function(resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve("끝남!"), 1000);
});
console.log('hello world');
console.log(promise);
VM905:8 hello world
VM905:9 Promise {<pending>}
undefined
// 모던자바스크립트 예제 (살짝 수정)
let promise = new Promise(function(resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve("이제야 끝남!"), 10000);
});
console.log('hello world');
console.log(promise);
VM920:8 hello world
VM920:9 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
undefined
console.log(promise)
VM998:1 Promise {<fulfilled>: '이제야 끝남!'}
undefined
// 모던자바스크립트 예제 (살짝 수정)
let promise = new Promise(function(resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve("이제야 끝남!"), 10000);
});
console.log('hello world');
console.log(promise);
VM1004:8 hello world
VM1004:9 Promise {<pending>}
undefined
console.log(promise);
VM1010:1 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
undefined
console.log(promise);
VM1016:1 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
undefined
console.log(promise);
VM1022:1 Promise {<fulfilled>: '이제야 끝남!'}
undefined
console.log(1);
console.log(2);
console.log(3);
VM1118:1 1
VM1118:2 2
VM1118:3 3
undefined
console.log(1);
console.log(2);
console.log(3);
VM1121:1 1
VM1121:2 2
VM1121:3 3
undefined
// 모던자바스크립트 예제 (살짝 수정)
let promise = new Promise(function(resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve("이제야 끝남!"), 10000);
});
console.log('hello world');
console.log('hello world2');
console.log('hello world3');
VM1145:8 hello world
VM1145:9 hello world2
VM1145:10 hello world3
undefined
console.log(promise)
VM1224:1 Promise {<fulfilled>: '이제야 끝남!'}
undefined
// 모던자바스크립트 예제 (살짝 수정)
let promise = new Promise(function(resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve("이제야 끝남!"), 15000);
});
console.log('hello world');
console.log('hello world2');
console.log('hello world3');
VM1239:8 hello world
VM1239:9 hello world2
VM1239:10 hello world3
undefined
console.log(promise)
VM1302:1 Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
undefined
console.log(promise)
VM1308:1 Promise {<pending>}
undefined
console.log(promise)
VM1313:1 Promise {<fulfilled>: '이제야 끝남!'}
undefined
let promise = new Promise(function(resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve(console.log('끝')), 1000);
});
console.log('hello world');
VM1323:7 hello world
undefined
VM1323:5 끝
let promise = new Promise(function(resolve, reject) {
  // 1초 뒤에 에러와 함께 실행이 종료되었다는 신호를 보냅니다.
  setTimeout(() => reject(new Error("에러 발생!")), 3000);
});
console.log('hello world')
VM1376:5 hello world
undefined
VM1376:3 Uncaught (in promise) Error: 에러 발생!
    at <anonymous>:3:27
(익명) @ VM1376:3
setTimeout(비동기)
(익명) @ VM1376:3
(익명) @ VM1376:1
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve("끝남!"), 3000);
});

console.log('hello world');
promise.then(v => console.log(v));
console.log('hello world2');


// hello world
// hello world2
// 끝남!
VM1382:5 hello world
VM1382:7 hello world2
undefined
VM1382:6 끝남!
// 모던자바스크립트 예제
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
Promise {<pending>}
// 모던자바스크립트 예제
let p = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 10000); // (*)

});
console.log('hello world');
p.then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

});
console.log('hello world2');
p.then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

});
console.log('hello world3');
p.then(function(result) {

  alert(result); // 4
  return result * 2;

});
VM1479:7 hello world
VM1479:14 hello world2
VM1479:21 hello world3
Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: 2
// 모던자바스크립트 예제
let p = new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 10000); // (*)

});
console.log('hello world');
let p2 = p.then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

});
console.log('hello world2');
let p3 = p2.then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

});
console.log('hello world3');
let p4 = p3.then(function(result) {

  alert(result); // 4
  return result * 2;

});
VM1523:7 hello world
VM1523:14 hello world2
VM1523:21 hello world3
undefined
// 모던자바스크립트 예제
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
Promise {<pending>}
// 모던자바스크립트 예제 (살짝 수정)
new Promise(function(resolve, reject) {

  setTimeout(() => reject('error'), 1000); // (*)

}).then(function(result) { // (**)

  alert(result + ' : 잘 수행!'); // 1
  return result + 'one';

}).catch(function(result) { // (***)

  alert(result + ' : 애러 발생!'); 
  return result + 'two';

}).then(function(result) {

  alert(result + ' : 잘 수행!'); // 4
  return result + 'three';

});
Promise {<pending>}
// 모던자바스크립트 예제 (살짝 수정)
new Promise(function(resolve, reject) {

  setTimeout(() => reject('error'), 1000);

}).then(function(result) {

  alert(result + ' : 잘 수행!'); // 1
  return result + 'one';

}).catch(function(result) {

  alert(result + ' : 애러 발생!'); 
  return result + 'two';

}).then(function(result) {

  alert(result + ' : 잘 수행!'); // 4
  return result + 'three';

});
Promise {<pending>}
