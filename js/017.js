let s = 'abcde'
undefined
s.repeat()
''
s.repeat(2)
'abcdeabcde'
s.repeat(2.5)
'abcdeabcde'
Array.from('a'.repeat(10))
(10) ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']0: "a"1: "a"2: "a"3: "a"4: "a"5: "a"6: "a"7: "a"8: "a"9: "a"length: 10[[Prototype]]: Array(0)
Array.from(s.repeat(10))
(50) ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e', 'a', 'b', 'c', 'd', 'e']
Array.from('abc')
(3) ['a', 'b', 'c']
Array(10)
(10) [비어 있음 × 10]
let a = Array(10)
undefined
a[5]
undefined
a
(10) [비어 있음 × 10]
a[3] = undefined
undefined
a
(10) [비어 있음 × 3, undefined, 비어 있음 × 6]
Array(100).fill(0)
(100) [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
Array(10).fill(1000)
(10) [1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000]
Array(10).fill('abc')
(10) ['abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc', 'abc']
Array(100).fill(0).map((value, index) => value + index)
(100) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
Array(100).fill(0).map((value, index, arr) => arr)
(100) [Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100), Array(100)]
Array(100).fill(0).map(value => 1)
(100) [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
Array(100).fill(0).map(value => 10)
(100) [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
Array(100).fill(0).map(value => console.log(value))
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
VM1232:1 0
(100) [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
Array(100).fill(0).map((value, index) => index)
(100) [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
Array(100).fill(0).map((value, index) => index + 1)
(100) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
Array(100).fill(0).map((a, b, c) => (b + 1) ** 2)
(100) [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024, 1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936, 2025, 2116, 2209, 2304, 2401, 2500, 2601, 2704, 2809, 2916, 3025, 3136, 3249, 3364, 3481, 3600, 3721, 3844, 3969, 4096, 4225, 4356, 4489, 4624, 4761, 4900, 5041, 5184, 5329, 5476, 5625, 5776, 5929, 6084, 6241, 6400, 6561, 6724, 6889, 7056, 7225, 7396, 7569, 7744, 7921, 8100, 8281, 8464, 8649, 8836, 9025, 9216, 9409, 9604, 9801, 10000]
Array(100).fill(0).map((value, index) => (index + 1)**2)
(100) [1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225, 256, 289, 324, 361, 400, 441, 484, 529, 576, 625, 676, 729, 784, 841, 900, 961, 1024, 1089, 1156, 1225, 1296, 1369, 1444, 1521, 1600, 1681, 1764, 1849, 1936, 2025, 2116, 2209, 2304, 2401, 2500, 2601, 2704, 2809, 2916, 3025, 3136, 3249, 3364, 3481, 3600, 3721, 3844, 3969, 4096, 4225, 4356, 4489, 4624, 4761, 4900, 5041, 5184, 5329, 5476, 5625, 5776, 5929, 6084, 6241, 6400, 6561, 6724, 6889, 7056, 7225, 7396, 7569, 7744, 7921, 8100, 8281, 8464, 8649, 8836, 9025, 9216, 9409, 9604, 9801, 10000]0: 11: 42: 93: 164: 255: 366: 497: 648: 819: 10010: 12111: 14412: 16913: 19614: 22515: 25616: 28917: 32418: 36119: 40020: 44121: 48422: 52923: 57624: 62525: 67626: 72927: 78428: 84129: 90030: 96131: 102432: 108933: 115634: 122535: 129636: 136937: 144438: 152139: 160040: 168141: 176442: 184943: 193644: 202545: 211646: 220947: 230448: 240149: 250050: 260151: 270452: 280953: 291654: 302555: 313656: 324957: 336458: 348159: 360060: 372161: 384462: 396963: 409664: 422565: 435666: 448967: 462468: 476169: 490070: 504171: 518472: 532973: 547674: 562575: 577676: 592977: 608478: 624179: 640080: 656181: 672482: 688983: 705684: 722585: 739686: 756987: 774488: 792189: 810090: 828191: 846492: 864993: 883694: 902595: 921696: 940997: 960498: 980199: 10000length: 100[[Prototype]]: Array(0)
'.'.split('.')
(2) ['', '']
'.'.repeat(9).split('.')
(10) ['', '', '', '', '', '', '', '', '', '']
2 ** 3 ** 2
512
(2 ** 3) ** 2
64
3 ** 2
9
2 ** 9
512
Math.pow(2, 3)
8
Math.pow(Math.pow(2, 3), 2)
64
let s = 'weniv CEO leehojun'
undefined
let s = 'weniv CEO hojun.lee'
undefined
s.split(' ')
(3) ['weniv', 'CEO', 'hojun.lee']
s.split('.')
(2) ['weniv CEO hojun', 'lee']
s.split(/\s/)
(3) ['weniv', 'CEO', 'hojun.lee']
s.split('')
(19) ['w', 'e', 'n', 'i', 'v', ' ', 'C', 'E', 'O', ' ', 'h', 'o', 'j', 'u', 'n', '.', 'l', 'e', 'e']
'12367'.split('')
(5) ['1', '2', '3', '6', '7']
'12367'.split('').forEach(x => x)
undefined
[...'12367'.split('')].forEach(x => x)
undefined
let a = '12367'.split('')
undefined
a.forEach(x => x)
undefined
a
(5) ['1', '2', '3', '6', '7']
a.forEach(x => parseInt(x))
undefined
a
(5) ['1', '2', '3', '6', '7']
a.forEach(x => x = parseInt(x))
undefined
a.map(x => parseInt(x))
(5) [1, 2, 3, 6, 7]
'12367'.split('').map(x => parseInt(x))
(5) [1, 2, 3, 6, 7]
'12367'.split('').map(x => parseInt(x)).forEach(x => console.log(x))
VM2539:1 1
VM2539:1 2
VM2539:1 3
VM2539:1 6
VM2539:1 7
undefined
let sum = 0
'12367'.split('').map(value => parseInt(value)).forEach(value => sum += value)
undefined
sum
19
'12367'.split('')
(5) ['1', '2', '3', '6', '7']
'12367'.split('').map(value => parseInt(value))
(5) [1, 2, 3, 6, 7]
'12367'.split('').map(value => value + value)
(5) ['11', '22', '33', '66', '77']
[1, 2, 3, 6, 7].forEach(value => console.log(value))
VM3015:1 1
VM3015:1 2
VM3015:1 3
VM3015:1 6
VM3015:1 7
undefined
let sum = 0;
[1, 2, 3, 6, 7].forEach(value => sum += value);
undefined
sum
19
'12367'.split('')
(5) ['1', '2', '3', '6', '7']
let today = new Date('2021/12/5/12:00')
undefined
today
Sun Dec 05 2021 12:00:00 GMT+0900 (한국 표준시)
today.toString()
'Sun Dec 05 2021 12:00:00 GMT+0900 (한국 표준시)'
today.toLocaleString()
'2021. 12. 5. 오후 12:00:00'
today.toLocaleString('ko-KR')
'2021. 12. 5. 오후 12:00:00'
today.toLocaleString('ja-JP')
'2021/12/5 12:00:00'
today.toLocaleString('en-US')
'12/5/2021, 12:00:00 PM'
today.toTimeString()
'12:00:00 GMT+0900 (한국 표준시)'
today.toISOString()
'2021-12-05T03:00:00.000Z'
today.toISOString().slice(0, 10)
'2021-12-05'
today.toISOString().slice(0, 4)
'2021'
today.toISOString().slice(5, 7)
'12'
today.toISOString().slice(8, 10)
'05'
today.toISOString().slice(0, 10).split('-')
(3) ['2021', '12', '05']
today.toISOString().slice(0, 10).split('-').map(value => parseInt(value))
(3) [2021, 12, 5]
Math.PI
3.141592653589793
Math.SQRT2
1.4142135623730951
Math.ceil
ƒ ceil() { [native code] }
Math.floor
ƒ floor() { [native code] }
Math.round
ƒ round() { [native code] }
Math.ceil(9.5)
10
Math.ceil(9.2)
10
Math.ceil(-9.2)
-9
Math.floor(0.3)
0
Math.floor(0.9)
0
Math.floor(-9.2)
-10
Math.round(3.5)
4
Math.round(3.6)
4
Math.round(3.4)
3
Math.max()
-Infinity
Math.min()
Infinity
Math.max(1, 2, 3, 1)
3
Math.min(1, 2, 3, 1, 0.1)
0.1
Math.min(1, 2, 3, 1, 0.1, 3)
0.1
math.max([1, 2, 10, 6, 7])
VM4829:1 Uncaught ReferenceError: math is not defined
    at <anonymous>:1:1
(익명) @ VM4829:1
Math.max([1, 2, 10, 6, 7])
NaN
Math.max(...[1, 2, 10, 6, 7])
10
Math.max.apply(null, [1, 2, 10, 6, 7])
10
//forEach
undefined
//reduce
undefined
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

alert(result); // 15
undefined
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current);

console.log(result)
VM5027:5 15
undefined
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum * current);

console.log(result)
VM5052:5 120
undefined
let s = 0
[1, 2, 3, 4, 5].forEach(i => s += i)
VM5167:2 Uncaught TypeError: Cannot read properties of undefined (reading 'forEach')
    at <anonymous>:2:17
(익명) @ VM5167:2
arr.forEach(s => console.log(s))
VM5254:1 1
VM5254:1 2
VM5254:1 3
VM5254:1 4
VM5254:1 5
undefined
arr.forEach(i => s += i)
undefined
let s = 0
undefined
arr.forEach(i => s += i)
undefined
s
15
let s = 0;
[1, 2, 3, 4, 5].forEach(i => s += i);
undefined
0.3 + 0.6
0.8999999999999999
Number.MAX_SAFE_INTEGER
9007199254740991
Number.MIN_SAFE_INTEGER
-9007199254740991
Number.EPSILON
2.220446049250313e-16
9007199254740991 + 1
9007199254740992
9007199254740991 + 2
9007199254740992
9007199254740991 + 3
9007199254740994
9007199254740991 + 4
9007199254740996
9007199254740991n + 4n
9007199254740995n
[1, 2, 3, 4, [1, 2, 3]].flat()
(7) [1, 2, 3, 4, 1, 2, 3]
[1, 2, 3, 4, [1, 2, 3]].flat(1)
(7) [1, 2, 3, 4, 1, 2, 3]
[1, 2, 3, 4, [1, 2, 3]].flat(2)
(7) [1, 2, 3, 4, 1, 2, 3]
[1, 2, 3, 4, [1, 2, [1, 2, 3]]].flat()
(7) [1, 2, 3, 4, 1, 2, Array(3)]0: 11: 22: 33: 44: 15: 26: (3) [1, 2, 3]0: 11: 22: 3length: 3[[Prototype]]: Array(0)length: 7[[Prototype]]: Array(0)
[1, 2, 3, 4, [1, 2, [1, 2, 3]]].flat(2)
(9) [1, 2, 3, 4, 1, 2, 1, 2, 3]
[1, 2, 3, 4, [1, 2, [1, 2, 3]]].flat().flat()
(9) [1, 2, 3, 4, 1, 2, 1, 2, 3]
[1, 2, 3, 4, [1, 2, [1, 2, 3]]].flat(Infinity)
(9) [1, 2, 3, 4, 1, 2, 1, 2, 3]
