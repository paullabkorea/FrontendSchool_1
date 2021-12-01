let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
  이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'}
}
undefined
person
{name: '이호준', age: 10, height: 30, weight: 40, 이력: {…}}
person.name
'이호준'
person['name']
'이호준'
person.'name'
VM8263:1 Uncaught SyntaxError: Unexpected string
person[name]
undefined
// error가 나는 경우와 error가 나지 않는 경우를 구별해주세요.
undefined
person.이력.첫번째직장
'하나'
person['이력'].첫번째직장
'하나'
let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
  이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'}
  10 : 100
}
VM8565:8 Uncaught SyntaxError: Unexpected number
let person = {
  //key: value
  name: '이호준',
  age: 10,
  height : 30,
  weight : 40,
  이력 : {'첫번째직장' : '하나', '두번째직장' : '둘'},
  10 : 100
}
undefined
person.10
VM8608:1 Uncaught SyntaxError: Unexpected number
person[10]
100
person['10']
100
person.toString()
'[object Object]'
person.valueOf()
{10: 100, name: '이호준', age: 10, height: 30, weight: 40, 이력: {…}}
Object.keys()
VM8918:1 Uncaught TypeError: Cannot convert undefined or null to object
    at Function.keys (<anonymous>)
    at <anonymous>:1:8
(익명) @ VM8918:1
Object.keys(person)
(6) ['10', 'name', 'age', 'height', 'weight', '이력']
Object.values()
VM8998:1 Uncaught TypeError: Cannot convert undefined or null to object
    at Function.values (<anonymous>)
    at <anonymous>:1:8
(익명) @ VM8998:1
Object.values(person)
(6) [100, '이호준', 10, 30, 40, {…}]
Object.entries(person)
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
Object.keys(person)
Object.values(person)
Object.entries(person)
(6) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
let data = Object.entries(person);
undefined
data[0]
(2) ['10', 100]
data[1]
(2) ['name', '이호준']
data[2]
(2) ['age', 10]
data[3]
(2) ['height', 30]
Object.keys(person)
(6) ['10', 'name', 'age', 'height', 'weight', '이력']
let data = Object.entries(person);
undefined
for (let i of data) {}
undefined
for (let i of data) {
    console.log(i[0], i[1]);
}
VM9556:2 10 100
VM9556:2 name 이호준
VM9556:2 age 10
VM9556:2 height 30
VM9556:2 weight 40
VM9556:2 이력 {첫번째직장: '하나', 두번째직장: '둘'}
undefined
for (let i of Object.entries(person)) {
    console.log(i[0], i[1]);
}
VM9564:2 10 100
VM9564:2 name 이호준
VM9564:2 age 10
VM9564:2 height 30
VM9564:2 weight 40
VM9564:2 이력 {첫번째직장: '하나', 두번째직장: '둘'}
undefined
for (let i, let j of Object.entries(person)) {
    console.log(i, j);
}
VM9608:1 Uncaught SyntaxError: let is disallowed as a lexically bound name
for (let [i, j] of Object.entries(person)) {
    console.log(i, j);
}
VM9643:2 10 100
VM9643:2 name 이호준
VM9643:2 age 10
VM9643:2 height 30
VM9643:2 weight 40
VM9643:2 이력 {첫번째직장: '하나', 두번째직장: '둘'}
undefined
for (let [i, j] of [[1, 2], [3, 4]]) {
    console.log(i, j);
}
VM9681:2 1 2
VM9681:2 3 4
undefined
for (let [[i, j], k] of [[[1, 2], 2], [[1, 2], 4]]) {
    console.log(i, j);
}
VM9717:2 1 2
VM9717:2 1 2
undefined
for (let [[i, j], k] of [[[1, 2], 2], [[1, 2], 4]]) {
    console.log(i, j, k);
}
VM9737:2 1 2 2
VM9737:2 1 2 4
undefined
console.log(Object.getOwnPropertyDescriptor(person, 'name'));
VM9743:1 {value: '이호준', writable: true, enumerable: true, configurable: true}configurable: trueenumerable: truevalue: "이호준"writable: true[[Prototype]]: Object
undefined
Object.getOwnPropertyDescriptors(person)
{10: {…}, name: {…}, age: {…}, height: {…}, weight: {…}, 이력: {…}}
// value: '이호준',
// writable: true, // 변경 가능 여부, 기본값 false
// enumerable: true, // 열거(for) 가능 여부, 기본값 false
// configurable: true // 재정의 가능 여부, 기본값 false
undefined
