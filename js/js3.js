// var 변수하나 = 20;
// var 변수둘 = 10;
// var 변수셋 = 2;

// document.write('변수하나 : ', 변수하나);
// document.write('<br>');
// document.write('변수둘 : ', 변수둘);
// document.write('<br>');
// document.write('변수셋 : ', 변수셋);
// document.write('<br>');
// document.write('변수하나+변수둘 : ', 변수하나 + 변수둘);
// document.write('<br>');
// document.write('변수하나-변수둘 : ', 변수하나 - 변수둘);
// document.write('<br>');
// document.write('변수하나/변수둘 : ', 변수하나 / 변수둘);
// document.write('<br>');
// document.write('변수하나*변수둘 : ', 변수하나 * 변수둘);
// document.write('<br>');
// document.write('변수하나**변수셋 : ', 변수하나 ** 변수셋);
// document.write('<br>');
// document.write('변수하나%변수셋 : ', 변수하나 % 변수셋);





// var 이름 = '이호준';
// var 소속 = '제주코딩베이스캠프 운영진입니다.';

// var 주소 = '서울';
// 주소 = '제주';
// 주소 = null;

// document.write(이름, '<br>');
// document.write(소속, '<br>');
// document.write(주소, '<br>');

// document.write(소속[2], '<br>');
// document.write(소속[3], '<br>');



//숫자형 (Number)
// var num = 10;

// document.write(num, '<br>');  // 10
// document.write(num / 3, '<br>');  // 3.3333..
// document.write(parseInt(20.333, 8), '<br>');  // 3

// /* 숫자형의 사칙연산 */
// document.write("더하기 : ", 2 + 2.5, '<br>');  // 4.5
// document.write("빼기 : ", 5 - 7, '<br>');  // -2
// document.write("곱하기 : ", 3 * 2, '<br>');  // 6
// document.write("나누기 : ", 2 / 2, '<br>'); // 1

// /*특수 숫자 값*/
// document.write("무한대 : ", 1 / 0, '<br>'); // Infinity
// document.write("숫자가 아님" / 2, '<br>');
// // NaN, 문자열을 숫자로 나누면 오류가 발생합니다.

// document.write("NaN?", isNaN("ddd"), '<br>');

// let number = 1e9;
// let number = 123e-5;
// let number = 1.23e9;
// let number = 0b1010; //0, 1 -> 10
// let number = 0o12; //0 ~ 7 -> 10
// let number = 0xff; //0 ~ f -> 10
// let number = parseInt('13', 10)
// let number = parseFloat('13.310');

// document.write(number, '<br>');
// document.write(0.1 + 0.2 == 0.3, '<br>');
// document.write(9999999999999999999, '<br>');



// Number 관련 함수
let n = 10000;
let nFloat = 10000.123123123;
let s = '10,000,000';

document.write(`n : ${n} <br>`);
document.write(`n.toLocaleString() : ${n.toLocaleString()} <br>`);
document.write(`s : ${s} <br>`);
document.write(`s.replace(/,/g, '') : ${s.replace(/,/g, '')} <br>`);
document.write(`parseInt(s, 10) : ${parseInt(s, 10)} <br>`);

document.write(`n.toFixed(10) : ${n.toFixed(10)} <br>`);
document.write(`nFloat.toFixed(3) : ${nFloat.toFixed(3)} <br>`);
document.write(`nFloat.toExponential(4) : ${nFloat.toExponential(4)} <br>`);

document.write(`Number(true) : ${Number(true)} <br>`);
document.write(`Number(false) : ${Number(false)} <br>`);
document.write(`Number('') : ${Number('')} <br>`);
document.write(`Number(' ') : ${Number(' ')} <br>`);
document.write(`Number('hello') : ${Number('hello')} <br>`);
document.write(`Number('10 20') : ${Number('10 20')} <br>`);
document.write(`Number('10     ') : ${Number('10     ')} <br>`);
document.write(`Number('     10') : ${Number('     10')} <br>`);
document.write(`Number('     10     ') : ${Number('     10     ')} <br>`);

document.write(`Math.PI : ${Math.PI} <br>`);
document.write(`Math.round(4.7) : ${Math.round(4.7)} <br>`);
document.write(`Math.pow(2, 8) : ${Math.pow(2, 8)} <br>`);
document.write(`Math.sqrt(64) : ${Math.sqrt(64)} <br>`);
document.write(`Math.abs(-5) : ${Math.abs(-5)} <br>`);
document.write(`Math.random() : ${Math.random() * 10} <br>`);
document.write(`Math.max(10, 20, 30, 40, 50) : ${Math.max(10, 20, 30, 40, 50)} <br>`);
document.write(`Math.min(10, 20, 30, 40, 50) : ${Math.min(10, 20, 30, 40, 50)} <br>`);