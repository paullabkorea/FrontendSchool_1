let o = {
    a : 'aa',
    b : 'bb'
}
undefined
Object.entries(o)
(2) [Array(2), Array(2)]
Object.keys(o)
(2) ['a', 'b']
Object.values(o)
(2) ['aa', 'bb']
Object.is(0, -0)
false
let m = new Map();
undefined
for (let i of o){
    console.log(i);
}
VM4458:1 Uncaught TypeError: o is not iterable
    at <anonymous>:1:15
(익명) @ VM4458:1
for (let i in o){
    console.log(i);
}
VM4470:2 a
VM4470:2 b
undefined
m.set('하나', 'one');
m.set('하나', 'two');
m.set('하나', 'three');
Map(1) {'하나' => 'three'}
m.get('하나')
'three'
m.has('하나')
true
m.keys()
MapIterator {'하나'}[[Entries]]0: "하나"[[Prototype]]: Map Iteratornext: ƒ next()Symbol(Symbol.toStringTag): "Map Iterator"[[Prototype]]: Object[[IteratorHasMore]]: true[[IteratorIndex]]: 0[[IteratorKind]]: "keys"
m.values
ƒ values() { [native code] }
m.values()
MapIterator {'three'}[[Entries]]0: "three"[[Prototype]]: Map Iteratornext: ƒ next()length: 0name: "next"arguments: (...)caller: (...)[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: ​[[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]속성 없음Symbol(Symbol.toStringTag): "Map Iterator"[[Prototype]]: ObjectSymbol(Symbol.iterator): ƒ [Symbol.iterator]()length: 0name: "[Symbol.iterator]"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]속성 없음[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()[[IteratorHasMore]]: true[[IteratorIndex]]: 0[[IteratorKind]]: "values"
m.delete('하나')
true
m.get('하나')
undefined
m.get('둘')
undefined
m.set('하나', 'one');
m.set('둘', 'two');
m.set('셋', 'three');
Map(3) {'하나' => 'one', '둘' => 'two', '셋' => 'three'}
m.get('하나')
'one'
m.get('둘')
'two'
m.keys()
MapIterator {'하나', '둘', '셋'}
m.set('하나', 'one!!');
Map(3) {'하나' => 'one!!', '둘' => 'two', '셋' => 'three'}
m.values()
MapIterator {'one!!', 'two', 'three'}
// let m = new Map();
let n = new Number(5);
undefined
n
Number {5}
n = 5
5
let a = new Array([1, 2, 3]);
undefined
a
[Array(3)]0: (3) [1, 2, 3]length: 1[[Prototype]]: Array(0)
typeof a
'object'
typeof n
'number'
typeof m
'object'
m.has('하나')
true
m.delete('하나')
true
for (let i of m){
    console.log(i);
}
VM5480:2 (2) ['둘', 'two']
VM5480:2 (2) ['셋', 'three']
undefined
Object.length(o)
VM5522:1 Uncaught TypeError: Object.length is not a function
    at <anonymous>:1:8
(익명) @ VM5522:1
Object.keys(o).length
2
m.size
2
m.entries()
MapIterator {'둘' => 'two', '셋' => 'three'}[[Entries]]0: {"둘" => "two"}1: {"셋" => "three"}[[Prototype]]: Map Iterator[[IteratorHasMore]]: true[[IteratorIndex]]: 1[[IteratorKind]]: "entries"
let temp = new Map([[1, 10],
[2, 20],
[3, 30],
[4, 40]]);
undefined
temp
Map(4) {1 => 10, 2 => 20, 3 => 30, 4 => 40}
o
{a: 'aa', b: 'bb'}
let temp = new Map(Object.entries(o));
undefined
temp
Map(2) {'a' => 'aa', 'b' => 'bb'}
temp.size
2
m.set('값', [1, 2, 3]);
Map(3) {'둘' => 'two', '셋' => 'three', '값' => Array(3)}
m.get('값')
(3) [1, 2, 3]
let mm = new Map()
undefined
mm.set('하나', m)
Map(1) {'하나' => Map(3)}[[Entries]]0: {"하나" => Object}1: {Array(3) => "하나"}size: 2[[Prototype]]: Map
mm.set('하나', {'one':1, 'two':2})
Map(1) {'하나' => {…}}
mm.set([1, 2, 3], '하나')
Map(2) {'하나' => {…}, Array(3) => '하나'}
let s = new Set('abcdeeeeeeeee');
undefined
let s = new Set('abcdeeeeeeeee');
console.log(s);
console.log(s.size);
VM6510:2 Set(5) {'a', 'b', 'c', 'd', 'e'}
VM6510:3 5
undefined
s.add('f');
Set(6) {'a', 'b', 'c', 'd', 'e', …}[[Entries]]0: "a"1: "b"2: "c"3: "d"4: "e"5: "f"size: 6[[Prototype]]: Set
// set은 순서가 없습니다.
undefined
s.delete('b')
true
s
Set(5) {'a', 'c', 'd', 'e', 'f'}
s.has('c')
true
s.size
5
s.forEach(i => console.log(i))
VM6799:1 a
VM6799:1 c
VM6799:1 d
VM6799:1 e
VM6799:1 f
undefined
let a = new Set('abc');
let b = new Set('cde');
undefined
a
Set(3) {'a', 'b', 'c'}
b
Set(3) {'c', 'd', 'e'}
[...a].filter(value => b.has(value))
['c']
a | b
0
a & b
0
a || b
Set(3) {'a', 'b', 'c'}[[Entries]]0: "a"1: "b"2: "c"size: 3[[Prototype]]: Set
a && b
Set(3) {'c', 'd', 'e'}
a + b
'[object Set][object Set]'
let union = new Set([...a].concat(...b))
undefined
union
Set(5) {'a', 'b', 'c', 'd', 'e'}
[...a, ...b]
(6) ['a', 'b', 'c', 'c', 'd', 'e']
let a = new Set('abc');
let b = new Set('cde');
//합집합
let union = new Set([...a].concat(...b))
// 차집합
let dif = new Set( [...a].filter(x => !b.has(x)));
