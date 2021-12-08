let user = {
  name: "John"
};

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
undefined
descriptor
{value: 'John', writable: true, enumerable: true, configurable: true}configurable: trueenumerable: truevalue: "John"writable: true[[Prototype]]: Object
let user = {
  name: "John"
};

Object.defineProperty(user, "name", {
  writable: false
});

user.name = "Pete";
'Pete'
user.name
'John'
let user = { };

Object.defineProperty(user, "name", {
  value: "John",
  // defineProperty를 사용해 새로운 프로퍼티를 만들 땐, 어떤 플래그를 true로 할지 명시해주어야 합니다.
  enumerable: true,
  configurable: true
});

alert(user.name); // John
user.name = "Pete";
'Pete'
user.name
'John'
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
undefined
descriptor
{value: 'John', writable: false, enumerable: true, configurable: true}
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

//커스텀 toString은 for...in을 사용해 열거할 수 있습니다.
for (let key in user) alert(key); // name, toString
undefined
let user = {
  name: "John",
  toString() {
    return this.name;
  }
};

Object.defineProperty(user, "toString", {
  enumerable: false
});

// 이제 for...in을 사용해 toString을 열거할 수 없게 되었습니다.
for (let key in user) alert(key); // name
undefined
Math.PI
3.141592653589793
let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
undefined
descriptor
{value: 3.141592653589793, writable: false, enumerable: false, configurable: false}configurable: falseenumerable: falsevalue: 3.141592653589793writable: false[[Prototype]]: Object
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

alert(user.fullName); // John Smith
undefined
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} !!! ${this.surname}`;
  }
};

user.fullName
'John !!! Smith'
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Hojun Lee";

console.log(user.name); // Alice
console.log(user.surname); // Cooper
VM399:17 Hojun
VM399:18 Lee
undefined
let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullNameSet(value) {
    [this.name, this.surname] = value.split(" ");
  }
};

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullNameSet = "Hojun Lee";

console.log(user.name); // Alice
console.log(user.surname); // Cooper
VM434:17 Hojun
VM434:18 Lee
undefined
user.fullName
'Hojun Lee'
let a = [10, 20, 30]
undefined
a.sort()
(3) [10, 20, 30]
console.dir(a)
VM566:1 Array(3)0: 101: 202: 30length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
undefined
let a = new Array(10, 20, 30, 40)
undefined
typeof a
'object'
let animal = {
  eats: true
};
let rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
{eats: true}
rabbit
{jumps: true}jumps: true[[Prototype]]: Objecteats: true[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
rabbit.eats
true
let animal = {
  eats: true,
  walk() {
    alert("동물이 걷습니다.");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
rabbit.walk(); // 동물이 걷습니다.
undefined
rabbit
{jumps: true}jumps: true[[Prototype]]: Object
let animal = {
  eats: true,
  walk() {
    alert("동물이 걷습니다.");
  }
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

let longEar = {
  earLength: 10,
  __proto__: rabbit
};

// 메서드 walk는 프로토타입 체인을 통해 상속받았습니다.
longEar.walk(); // 동물이 걷습니다.
undefined
let animal = {
  eats: true
};

let rabbit = {
  jumps: true,
  __proto__: animal
};

// Object.keys는 객체 자신의 키만 반환합니다.
alert(Object.keys(rabbit)); // jumps

// for..in은 객체 자신의 키와 상속 프로퍼티의 키 모두를 순회합니다.
for(let prop in rabbit) alert(prop); // jumps, eats
undefined
for(let prop in rabbit) console.log(prop);
VM928:1 jumps
VM928:1 eats
undefined
rabbit
{jumps: true}
let animal = {
  eats: true
};

// 프로토타입이 animal인 새로운 객체를 생성합니다.
let rabbit = Object.create(animal);
undefined
rabit
VM955:1 Uncaught ReferenceError: rabit is not defined
    at <anonymous>:1:1
(익명) @ VM955:1
rabbit
{}[[Prototype]]: Objecteats: true[[Prototype]]: Object
Object.getPrototypeOf(rabbit)
{eats: true}eats: true[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
Object.setPrototypeOf(rabbit, {});
{}
rabbit
{}[[Prototype]]: Object[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

alert( rabbit.eats ); // true
undefined
let animal = {
  eats: true
};

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype = animal;

let hojun = new Rabbit("White Rabbit");
let jahyne = new Rabbit("White Rabbit");

hojun.eats
true
hojun
Rabbit {name: 'White Rabbit'}name: "White Rabbit"[[Prototype]]: Objecteats: true[[Prototype]]: Object
let obj = {};

alert(obj.__proto__ === Object.prototype); // true

alert(obj.toString === obj.__proto__.toString); //true
alert(obj.toString === Object.prototype.toString); //true
undefined
[1, 2, 3].toString()
'1,2,3'
let x = [1, 2, 3]
undefined
console.dir(x)
VM1198:1 Array(3)0: 11: 22: 3length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()flat: ƒ flat()flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {copyWithin: true, entries: true, fill: true, find: true, findIndex: true, …}[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
undefined
// prototype : 유전자(상속받은 객체)
// __proto__는 [[Prototype]]에 접근하기 위한 방법
// __proto__는 비표준으로 시작했으나 지금은 표준에 부록에 실렸다
undefined
function 사람(이름, 나이) {
    this.이름 = 이름;
    this.나이 = 나이;
}

let 호준 = new 사람('호준', 10);
let 재현 = new 사람('재현', 5);
undefined
사람
ƒ 사람(이름, 나이) {
    this.이름 = 이름;
    this.나이 = 나이;
}
사람.prototype
{constructor: ƒ}constructor: ƒ 사람(이름, 나이)arguments: nullcaller: nulllength: 2name: "사람"prototype: {constructor: ƒ}[[FunctionLocation]]: VM1805:1[[Prototype]]: ƒ ()[[Scopes]]: Scopes[2]0: Script {user: {…}, descriptor: {…}, a: Array(4), animal: {…}, rabbit: Rabbit, …}1: Global {window: Window, self: Window, document: document, name: '', location: Location, …}[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
호준
사람 {이름: '호준', 나이: 10}나이: 10이름: "호준"[[Prototype]]: Objectconstructor: ƒ 사람(이름, 나이)[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
사람.prototype.수명 = 100;
100
호준
사람 {이름: '호준', 나이: 10}나이: 10이름: "호준"[[Prototype]]: Object수명: 100constructor: ƒ 사람(이름, 나이)[[Prototype]]: Object
호준.수명
100
재현.수명
100
let x = new Array(1, 2, 3, 4);
undefined
x
(4) [1, 2, 3, 4]
Array.prototype.수명 = 100
100
x.수명
100
Array.prototype.인사 = function (){
    console.log('hello world');
}
ƒ (){
    console.log('hello world');
}
x.인사()
VM2528:2 hello world
undefined
// 클래스는 찍어내는 공장!
undefined
// 인스턴스는 찍혀져 나오는 생산품!
undefined
