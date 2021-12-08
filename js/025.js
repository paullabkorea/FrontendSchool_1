// 클래스 : 붕어빵 찍는 틀, 공장
// 인스턴스 : 붕어빵, 상품
undefined
// class 안에 콤마가 없습니다!
class MyClass {
  // 여러 변수 선언 가능
  x = 10;
  y = 20;
  // 여러 메서드를 정의할 수 있음
  constructor() { ... }
  method1() { ... }
  method2() { ... }
  method3() { ... }
  // ...
}
VM3177:7 Uncaught SyntaxError: Unexpected token '}'
class User {

  constructor(name) {
    this.name = name;
  }

  sayHi() {
    alert(this.name);
  }

}

// 사용법:
let user = new User("John");
user.sayHi();
undefined
class User {
  sayHi() {
    alert(this.name);
  }
}

// 사용법:
let user = new User("John");
user.sayHi();
undefined
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// User가 함수라는 증거
alert(typeof User); // function
undefined
typeof User
'function'
class User {
  constructor(name) { this.name = name; }
  sayHi() { alert(this.name); }
}

// 클래스는 함수입니다.
alert(typeof User); // function

// 정확히는 생성자 메서드와 동일합니다.
alert(User === User.prototype.constructor); // true

// 클래스 내부에서 정의한 메서드는 User.prototype에 저장됩니다.
alert(User.prototype.sayHi); // alert(this.name);

// 현재 프로토타입에는 메서드가 두 개입니다.
alert(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi
undefined
class User {
  name = "John";
  age = 10;
  job = 'programmer';

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}

new User().sayHi(); // Hello, John!
undefined
let hojun = new User()
undefined
hojun.name
'John'
hojun.age
10
hojun.job
'programmer'
function add(){}
undefined
add.age = 100
100
add.age
100
console.dir(add)
VM3587:1 ƒ add()age: 100arguments: nullcaller: nulllength: 0name: "add"prototype: {constructor: ƒ}[[FunctionLocation]]: VM3459:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]
undefined
class User {
  #name = "John";
  age = 10;
  job = 'programmer';

  sayHi() {
    alert(`Hello, ${this.name}!`);
  }
}
undefined
let 재현 = new User()
undefined
재현.age
10
재현.name
undefined
재현.sayHi()
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
class Rabbit extends Animal {
  hide() {
    alert(`${this.name} 이/가 숨었습니다!`);
  }
}

let rabbit = new Rabbit("흰 토끼");

rabbit.run(5); // 흰 토끼 은/는 속도 5로 달립니다.
rabbit.hide(); // 흰 토끼 이/가 숨었습니다!
undefined
rabbit
Rabbit {speed: 5, name: '흰 토끼'}name: "흰 토끼"speed: 5[[Prototype]]: Animalconstructor: class Rabbithide: ƒ hide()[[Prototype]]: Objectconstructor: class Animalrun: ƒ run(speed)stop: ƒ stop()[[Prototype]]: Object
class Rabbit extends Animal {
  stop() {
    // rabbit.stop()을 호출할 때
    // Animal의 stop()이 아닌, 이 메서드가 사용됩니다.
  }
}
undefined
[1, 2, 3].toString()
'1,2,3'
rabbit
Rabbit {speed: 5, name: '흰 토끼'}name: "흰 토끼"speed: 5[[Prototype]]: Animalconstructor: class Rabbithide: ƒ hide()[[Prototype]]: Object
let rabbit2 = new Rabbit()
undefined
rabbit2
Rabbit {speed: 0, name: undefined}name: undefinedspeed: 0[[Prototype]]: Animalconstructor: class Rabbitstop: ƒ stop()length: 0name: "stop"arguments: (...)caller: (...)[[FunctionLocation]]: VM3800:2[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2][[Prototype]]: Objectconstructor: class Animalrun: ƒ run(speed)stop: ƒ stop()[[Prototype]]: Object
console.dir([1, 2, 3])
VM4003:1 Array(3)0: 11: 22: 3length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
undefined
class User {
  static staticMethod() {
    alert(this === User);
  }
}

User.staticMethod(); // true
undefined
class Hojun {
    name = 'hojun';
    age = 10;
}

Hojun.age
undefined
new Hojun().age
10
new Hojun().name
'hojun'
class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

// 사용법
let articles = [
  new Article("HTML", new Date(2019, 1, 1)),
  new Article("CSS", new Date(2019, 0, 1)),
  new Article("JavaScript", new Date(2019, 11, 1))
];

articles.sort(Article.compare);

alert( articles[0].title ); // CSS
undefined
class Article {
  static publisher = "Ilya Kantor";
}

alert( Article.publisher ); // Ilya Kantor
undefined
throw new Error("물의 양은 음수가 될 수 없습니다.");
VM4170:1 Uncaught Error: 물의 양은 음수가 될 수 없습니다.
    at <anonymous>:1:7
(익명) @ VM4170:1
class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();

machine.waterAmount = 100;
alert(machine.#waterAmount); // Error
VM4176:18 Uncaught SyntaxError: Private field '#waterAmount' must be declared in an enclosing class
CoffeeMachine.waterAmount
VM4192:1 Uncaught ReferenceError: CoffeeMachine is not defined
    at <anonymous>:1:1
(익명) @ VM4192:1
machine.waterAmount
VM4212:1 Uncaught ReferenceError: machine is not defined
    at <anonymous>:1:1
(익명) @ VM4212:1
machine
VM4217:1 Uncaught ReferenceError: machine is not defined
    at <anonymous>:1:1
(익명) @ VM4217:1
class CoffeeMachine {

  #waterAmount = 0;

  get waterAmount() {
    return this.#waterAmount;
  }

  set waterAmount(value) {
    if (value < 0) throw new Error("물의 양은 음수가 될 수 없습니다.");
    this.#waterAmount = value;
  }
}

let machine = new CoffeeMachine();
undefined
machine
CoffeeMachine {#waterAmount: 0}
machine.waterAmount = 100;
100
machine
CoffeeMachine {#waterAmount: 100}
machine.waterAmount
100
machine.#waterAmount
VM4334:1 Uncaught SyntaxError: Private field '#waterAmount' must be declared in an enclosing class
class Rabbit {}
let rabbit = new Rabbit();

// rabbit이 클래스 Rabbit의 객체인가요?
alert( rabbit instanceof Rabbit ); // true
undefined
let arr = [1, 2, 3];
alert( arr instanceof Array ); // true
alert( arr instanceof Object ); // true
undefined
