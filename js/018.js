// 클로저
undefined
function 제곱(x) {
		function 승수(y) {
			return y ** x
		}
    return 승수
}

var 제곱2 = 제곱(2);
var 제곱3 = 제곱(3);

제곱2(10)
제곱3(10)
1000
// 생성자 함수
undefined
function User(name) {
  this.name = name;
  console.log(this.name);
}

let user = User("호준");

function User2(name) {
  this.name = name;
  console.log(this.name);
}

let user2 = User2("호준");
VM341:3 호준
VM341:10 호준
undefined
console.log(user.name)
VM432:1 Uncaught TypeError: Cannot read properties of undefined (reading 'name')
    at <anonymous>:1:18
(익명) @ VM432:1
console.log(user2.name)
VM497:1 Uncaught TypeError: Cannot read properties of undefined (reading 'name')
    at <anonymous>:1:19
(익명) @ VM497:1
// 위에 같은 코드를 복사했네요. 아래 코드를 참고해주세요.
function User3(name) {
  this.name = name;
  console.log(this.name);
}

let user3 = new User3("호준");
VM546:4 호준
undefined
console.log(user3)
VM608:1 User3 {name: '호준'}
undefined
//this : 자신을 호출한 객체
undefined
function sayName(){
  console.log(this.name);
}

var name = 'Hero'; 
// 전역으로 선언한 name 변수의 앞에는 window 가 생략되어 있습니다.
// 때문에 window.name === "Hero" 가 성립합니다.
let peter = {
  name : 'Peter Parker',
  sayName : sayName
}

let bruce = {
  name : 'Bruce Wayne',
  sayName : sayName
}

sayName();
peter.sayName(); 
bruce.sayName();
VM694:2 Hero
VM694:2 Peter Parker
VM694:2 Bruce Wayne
undefined
/* this 사용 예시 */

let 호텔 = [{
  '이름' : '하나호텔',
  '위치' : '제주도 제주시 001',
  '가격' : {'A':50000, 'B':30000, 'C':15000},
  '방의개수' : 50,
  '예약자수' : 25,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
},{
  '이름' : '둘호텔',
  '위치' : '제주도 제주시 002',
  '가격' : {'A':100000, 'B':60000, 'C':30000},
  '방의개수' : 100,
  '예약자수' : 30,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
},{
  '이름' : '셋호텔',
  '위치' : '제주도 제주시 003',
  '가격' : {'A':80000, 'B':50000, 'C':30000},
  '방의개수' : 120,
  '예약자수' : 80,
  '남은방의개수' : function(){return this.방의개수 - this.예약자수}
}];
console.log(호텔[0].남은방의개수());
console.log(호텔[1].남은방의개수());
console.log(호텔[2].남은방의개수());
VM700:25 25
VM700:26 70
VM700:27 40
undefined
var peter2 = {
  name : 'Peter Parker',
  sayName : function(){    
		console.log(this.name);
	}
}

var bruce2 = {
  name : 'Bruce Wayne',
}
peter2.sayName.call(bruce2);

// peter.sayName.call(bruce) 의 결과는 무엇이 될지 생각해 봅시다.
VM715:4 Bruce Wayne
undefined
var peter3 = {
  name : 'Peter Parker',
  sayName : function(is, is2){    
		console.log(this.name+ ' is '+ is + ' or ' + is2);
	}
}

var bruce3 = {
  name : 'Bruce Wayne',
}

peter3.sayName.apply(bruce3, ['batman', 'richman']);

/* peter.sayName.apply(bruce, ['batman', 'richman']) 의 결과가 무엇이 될지 생각해보고
apply 를 call로 바꾸어 호출했을 때와 비교해 봅시다. */
VM730:4 Bruce Wayne is batman or richman
undefined
function sayName(){
  console.log(this.name);
}

var bruce4 = {
  name: 'bruce',
  sayName : sayName
}

var peter4 = {
  name : 'peter',
  sayName : sayName.bind(bruce)
}

peter4.sayName();
bruce4.sayName();
VM743:2 Bruce Wayne
VM743:2 bruce
undefined
