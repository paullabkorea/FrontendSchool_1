'5, 4, 10, 2, 5'
'5, 4, 10, 2, 5'
let data = '5, 4, 10, 2, 5'.split(',')
undefined
data
(5) ['5', ' 4', ' 10', ' 2', ' 5']
let 합계 = 0;
for (let i of data) {
    합계 += parseInt(i);
}
console.log(합계);
VM708:5 26
undefined
let 평균 = 0;
for (let i of data) {
    평균 += parseInt(i)/data.length;
}
console.log(평균);
VM781:5 5.2
undefined
parseInt('123abc123')
123
Number('123abc123')
NaN
let 합계 = 0;
for (let i of data) {
    합계 += parseInt(i);
}
console.log(합계/data.length);
VM1028:5 5.2
undefined
let data = [11, 22, 33, 111, 2];
undefined
912391239
912391239
for (let i of 912391239+'') {
    console.log(i);
}
VM1148:2 9
VM1148:2 1
VM1148:2 2
VM1148:2 3
VM1148:2 9
VM1148:2 1
VM1148:2 2
VM1148:2 3
VM1148:2 9
undefined
let 합계 = 0;
for (let i of 912391239+'') {
    합계 += parseInt(i);
}
console.log(합계);
VM1285:5 39
undefined
912391239
912391239
998 / 100
9.98
98 / 10
9.8
8
8
8 % 10
8
let data = [11, 22, 33, 111, 2];
undefined
data + ''
'11,22,33,111,2'
data
(5) [11, 22, 33, 111, 2]
data = data + ''
data
'11,22,33,111,2'
'11,22,33,111,2'.replace()
'11,22,33,111,2'
'11,22,33,111,2'.replace(',', '')
'1122,33,111,2'
'11,22,33,111,2'.replace(/,/g, '')
'1122331112'
data = '11,22,33,111,2'.replace(/,/g, '')
'1122331112'
let 합계 = 0;
for (let i of data) {
    합계 += i;
}
합계
'01122331112'
let 합계 = 0;
for (let i of data) {
    합계 += parseInt(i);
}
합계
17
let 합계 = 0;
for (let i of data) {
    합계 += +i;
}
합계
17
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
undefined
const n = 12345.6789;
const comma = n.toString()
  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
comma
'12,345.6789'
navigator.language
const n = 12345.6789;
n.toLocaleString('ko-KR');
'12,345.679'
let n = 12345678;
n += '';
reverse = '';
// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = '';
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2){
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ','
    count = 0;
  }
}
console.log(sample);
VM1769:1 Uncaught SyntaxError: Identifier 'n' has already been declared
