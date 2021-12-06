// ES6 => ES2015 (ECMAScript 2015)
// ES7 => ES2016 (ECMAScript 2016)
// ES8 => ES2017 (ECMAScript 2017)
// ES9 => ES2018 (ECMAScript 2018)
// ...
// ES12 => ES2021 (ECMAScript 2021)
undefined
o = {one:'1', two:'2'}
{one: '1', two: '2'}
o.keys
undefined
Object.keys(o)
(2) ['one', 'two']
// 주석
undefined
/* 여러줄 주석 */
undefined
function test(){
    x = 100;
}
test()
console.log(x)
VM458:5 100
undefined
'use strict';

function test(){
    y = 100;
}
test()
console.log(y)
VM509:4 Uncaught ReferenceError: y is not defined
    at test (<anonymous>:4:7)
    at <anonymous>:6:1
test @ VM509:4
(익명) @ VM509:6
function test(){
    y = 100;
}
test()
console.log(y)
VM514:5 100
undefined
function test(){
    'use strict';
    y = 100;
}
test()
console.log(y)
VM538:6 100
undefined
// 자바스크립트에선 변수 명명 시 두 가지 제약 사항이 있습니다.

// 변수명에는 오직 문자와 숫자, 그리고 기호 $와 _만 들어갈 수 있습니다.
// 첫 글자는 숫자가 될 수 없습니다.
// 일반적인 변수(생성자 함수나 클래스 등 제외)는 소문자로 시작하시길 권해드립니다.
undefined
// 잘못된 예시 1 : let 1a; // 변수명은 숫자로 시작해선 안 됩니다.
// 잘못된 예시 2 : let my-name; // 하이픈 '-'은 변수명에 올 수 없습니다.
undefined
// 새싹멤버, 한라산...
undefined
const x = 10;
undefined
x
10
x = 20
VM1030:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3
(익명) @ VM1030:1
const y = document.getElementById('yy') // y가 변할 일이 있을까요?
undefined
/*바람직한 변수명
변수에 관한 매우 중요한 사실이 한 가지 더 있습니다.

변수명은 간결하고, 명확해야 합니다. 변수가 담고있는 것이 무엇인지 잘 설명할 수 있어야 하죠.

변수의 이름을 짓는 것은 프로그래밍에서 가장 중요하고 복잡한 기술 중 하나입니다. 변수명만 슬쩍 봐도 초보자가 코드를 작성했는지, 노련한 개발자가 작성했는지 알 수 있습니다.

실제 프로젝트에선 맨 처음부터 완전히 독립적인 코드를 작성하기보다 기존 코드의 틀을 변경하고 확장하는데 대부분의 시간을 보냅니다. 작성했던 코드를 얼마 후에 다시 봤을 때, 정보에 알맞은 이름이 적혀있으면 정보를 더 쉽게 찾을 수 있습니다. 다시 말해, 변수가 올바른 이름을 가졌을 때 말이죠.

그러므로 변수를 선언하기 전에 내가 지은 변수의 이름이 괜찮은지 숙고해 주시기 바랍니다.

아래는 변수 명명 시 참고하기 좋은 규칙입니다.

userName 이나 shoppingCart처럼 사람이 읽을 수 있는 이름을 사용하세요.
무엇을 하고 있는지 명확히 알고 있지 않을 경우 외에는 줄임말이나 a, b, c와 같은 짧은 이름은 피하세요.
최대한 서술적이고 간결하게 명명해 주세요. data와 value는 나쁜 이름의 예시입니다. 이런 이름은 아무것도 설명해주지 않습니다. 코드 문맥상 변수가 가리키는 데이터나 값이 아주 명확할 때에만 이런 이름을 사용합시다.
자신만의 규칙이나 소속된 팀의 규칙을 따르세요. 만약 사이트 방문객을 'user’라고 부르기로 했다면, 이와 관련된 변수를 currentVisitor나 newManInTown이 아닌 currentUser나 newUser라는 이름으로 지어야 합니다.
간단해 보이나요? 그렇게 보이긴 합니다. 그러나 실전에서 서술적이고 간결한 변수명을 짓는 것은 간단하지 않습니다. 그럼, 화이팅!*/
undefined
/* 요약
var, let, const를 사용해 변수를 선언할 수 있습니다. 선언된 변수엔 데이터를 저장할 수 있죠.

let – 모던한 변수 선언 키워드입니다.
var – 오래된 변수 선언 키워드입니다. 잘 사용하지 않습니다. let과의 미묘한 차이점은 오래된 'var' 챕터에서 다루도록 하겠습니다.
const – let과 비슷하지만, 변수의 값을 변경할 수 없습니다.
*/
undefined
// 숫자형
undefined
let n = 123;
n = 12.345;
12.345
//수학 연산은 안전합니다.
undefined
// 끝에 'n'이 붙으면 BigInt형 자료입니다.
const bigInt = 1234567890123456789012345678901234567890n;
undefined
// 문자형
undefined
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
undefined
str
'Hello'
let phrase2 = `can embed



another ${str}`;
undefined
phrase2
'can embed \n\n\n\nanother Hello'
// 블린형
undefined
// 논리형
undefined
// true, false
undefined
4 > 1
true
4 == 4
true
// null
undefined
let age = null;
undefined
age
null
13 + 12 + 11 + null + 20
56
13 + 12 + 11 + undefined + 20
NaN
13 + 12 + 11 + NaN + 20
NaN
// 객체와 심볼
// 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있기 때문에 원시(primitive) 자료형이라 부릅니다. 반면 객체는 데이터 컬렉션이나 복잡한 개체(entity)를 표현할 수 있습니다.
// 심볼(symbol)형은 객체의 고유한 식별자(unique identifier)를 만들 때 사용됩니다. 심볼형에 대해선 객체를 학습하고 난 이후에 자세히 알아보겠습니다.
undefined
typeof NaN
'number'
typeof null
'object'
typeof undefined
'undefined'
// typeof null의 결과는 "object"입니다. null은 별도의 고유한 자료형을 가지는 특수 값으로 객체가 아니지만, 하위 호환성을 유지하기 위해 이런 오류를 수정하지 않고 남겨둔 상황입니다. 언어 자체의 오류이므로 null이 객체가 아님에 유의하시기 바랍니다.
undefined
// typeof는 피연산자가 함수면 "function"을 반환합니다. 그러므로 typeof alert는 "function"을 출력해줍니다. 그런데 '함수’형은 따로 없습니다. 함수는 객체형에 속합니다. 이런 동작 방식이 형식적으론 잘못되긴 했지만, 아주 오래전에 만들어진 규칙이었기 때문에 하위 호완성 유지를 위해 남겨진 상태입니다. 한편, 실무에선 이런 특징이 매우 유용하게 사용되기도 합니다.
undefined
// 숫자형 – 정수, 부동 소수점 숫자 등의 숫자를 나타낼 때 사용합니다. 정수의 한계는 ±253 입니다.
bigint – 길이 제약 없이 정수를 나타낼 수 있습니다.
문자형 – 빈 문자열이나 글자들로� 이뤄진 문자열을 나타낼 때 사용합니다. 단일 문자를 나타내는 별도의 자료형은 없습니다.
불린형 – true, false를 나타낼 때 사용합니다.
null – null 값만을 위한 독립 자료형입니다. null은 알 수 없는 값을 나타냅니다.
undefined – undefined 값만을 위한 독립 자료형입니다. undefined는 할당되지 않은 값을 나타냅니다.
객체형 – 복잡한 데이터 구조를 표현할 때 사용합니다.
심볼형 – 객체의 고유 식별자를 만들 때 사용합니다
VM1712:2 Uncaught SyntaxError: Invalid or unexpected token
alert("Hello");
undefined
result = prompt('hello world');
'hello'
let age = prompt('나이를 입력해주세요.', 100);
undefined
age
'10000'
result = confirm(question);
VM1796:1 Uncaught ReferenceError: question is not defined
    at <anonymous>:1:18
(익명) @ VM1796:1
confirm("당신이 주인인가요?");
true
/*
요약
브라우저는 사용자와 상호작용할 수 있는 세 가지 함수를 제공합니다.

alert
메시지를 보여줍니다.
prompt
사용자에게 텍스트를 입력하라는 메시지를 띄워줌과 동시에, 입력 필드를 함께 제공합니다. 확인을 누르면 prompt 함수는 사용자가 입력한 문자열을 반환하고, 취소 또는 Esc를 누르면 null을 반환합니다.
confirm
사용자가 확인 또는 취소 버튼을 누를 때까지 메시지가 창에 보여집니다. 사용자가 확인 버튼을 누르면 true를, 취소 버튼이나 Esc를 누르면 false를 반환합니다.
*/
undefined
// 형변환
undefined
// 암묵적
undefined
// 묵시적
undefined
// 명시적
undefined
// 암묵적이라는 표현을 사용하지 않는데 사용했네요. 삭제가 안되니 이해를..
undefined
// Number(), String()
undefined
Number(NaN)
NaN
Number(null)
0
Number(undefined)
NaN
Number(true)
1
Number(false)
0
Number("   123   ")
123
parseInt("   100    ")
100
Number("123z")
NaN
parseInt("123z")
123
parseInt("z123")
NaN
Boolean(100)
true
Boolean(-1)
true
Boolean(-0)
false
Boolean(0)
false
Object.is(0, -0)
false
Boolean("")
false
Boolean([])
true
Boolean({})
true
Boolean(" ")
true
Number(undefined)
NaN
Number(NaN)
NaN
Number(true)
1
Boolean(undefined)
false
Boolean(null)
false
Boolean(NaN)
false
Boolean("")
false
Boolean(" ")
true
Boolean("true")
true
Boolean("false")
true
Boolean("abc")
true
// https://ko.javascript.info/type-conversions
undefined
// 요약이 table로 되어 있어서 링크로 남겨드립니다.
undefined
+'100'
100
/*
수학
자바스크립트에서 지원하는 수학 연산자는 다음과 같습니다.

덧셈 연산자 +,
뺄셈 연산자 -,
곱셈 연산자 *,
나눗셈 연산자 /,
나머지 연산자 %,
거듭제곱 연산자 **
*/
undefined
let x = 10;
VM3344:1 Uncaught SyntaxError: Identifier 'x' has already been declared
let xx = 10;
undefined
xx**2+2*10
120
xx****2+2*10
VM3410:1 Uncaught SyntaxError: Unexpected token '**'
let s = "my" + "string";
alert(s); // mystring
undefined
// 그런데 이항 연산자 +의 피연산자로 문자열이 전달되면 덧셈 연산자는 덧셈이 아닌 문자열을 병합(연결)합니다.
undefined
console.log('1' + 2); // "12"
console.log(2 + '1'); // "21"
VM3497:1 12
VM3497:2 21
undefined
console.log(2 + 2 + '1')
VM3562:1 41
undefined
console.log(((2 + 2 + '1')))
VM3590:1 41
undefined
// 이처럼 이항 덧셈 연산자 +는 문자열 연결과 변환이라는 특별한 기능을 제공합니다. 다른 산술 연산자가 오직 숫자형의 피연산자만 다루고, 피연산자가 숫자형이 아닌 경우에 그 형을 숫자형으로 바꾸는 것과는 대조적입니다.
undefined
console.log(6 - '2'); // 4, '2'를 숫자로 바꾼 후 연산이 진행됩니다.
console.log('6'/'2');
VM3672:1 4
VM3672:2 3
undefined
// '단항 덧셈 연산자’는 우선순위 17로, '(이항) 덧셈 연산자’의 우선순위 13보다 높습니다. 표현식 "+apples + +oranges"에서 단항 덧셈 연산자가 덧셈보다 먼저 수행되는 이유가 바로 이 때문입니다.
undefined
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
undefined
"+apples + +oranges"
'+apples + +oranges'
let apples = "2";
let oranges = "3";

// 이항 덧셈 연산자가 적용되기 전에, 두 피연산자는 숫자형으로 변화합니다.
alert( +apples + +oranges ); // 5
undefined
alert( +apples + oranges );
undefined
console.log( +apples + oranges );
VM3799:1 23
undefined
let a = b = c = 1000;
undefined
a
1000
b
1000
c
1000
// 할당 연산자 체이닝
undefined
// 복합 할당 연산자
/*
+=
-=
/=
*=
%=
**=
*/
undefined
++xx
11
xx++
11
--xx
11
xx--
11
x
10
++x
VM4127:1 Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:3
(익명) @ VM4127:1
xx
10
++xx
11
xx++
11
xx
12
//counter++와 같이 피연산자 뒤에 올 때는, '후위형(postfix form)'이라고 부릅니다.
//++counter와 같이 피연산자 앞에 올 때는, '전위형(prefix form)'이라고 부릅니다.
undefined
for (let i = 0; i < 10; i++){
    console.log(i);
}
VM4284:2 0
VM4284:2 1
VM4284:2 2
VM4284:2 3
VM4284:2 4
VM4284:2 5
VM4284:2 6
VM4284:2 7
VM4284:2 8
VM4284:2 9
undefined
for (let i = 0; i < 10; ++i){
    console.log(i);
}
VM4298:2 0
VM4298:2 1
VM4298:2 2
VM4298:2 3
VM4298:2 4
VM4298:2 5
VM4298:2 6
VM4298:2 7
VM4298:2 8
VM4298:2 9
undefined
// 비트연산자
/*
비트 연산자
비트 연산자(bitwise operator)는 인수를 32비트 정수로 변환하여 이진 연산을 수행합니다.

이런 비트 조작 관련 연산자는 자바스크립트뿐만 아니라 대부분의 프로그래밍 언어에서 지원합니다.

아래는 비트 연산 시 쓰이는 연산자 목록입니다.

비트 AND ( & )
비트 OR ( | )
비트 XOR ( ^ )
비트 NOT ( ~ )
왼쪽 시프트(LEFT SHIFT) ( << )
오른쪽 시프트(RIGHT SHIFT) ( >> )
부호 없는 오른쪽 시프트(ZERO-FILL RIGHT SHIFT) ( >>> )
*/
undefined
3 | 7
7
3 | 6
7
3 & 6
2
/*
불린형 반환
다른 연산자와 마찬가지로 비교 연산자 역시 값을 반환합니다. 반환 값은 불린형입니다.

true가 반환되면, ‘긍정’, ‘참’, '사실’을 의미합니다.
false가 반환되면, ‘부정’, ‘거짓’, '사실이 아님’을 의미합니다.
예시:

alert( 2 > 1 );  // true
alert( 2 == 1 ); // false
alert( 2 != 1 ); // true
*/
undefined
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
undefined
'Z' < 'A'
false
'ab' < 'ac'
true
/*
문자열 비교
자바스크립트는 '사전’순으로 문자열을 비교합니다. '사전편집(lexicographical)'순 이라고 불리기도 하는 이 기준을 적용하면 사전 뒤쪽의 문자열은 사전 앞쪽의 문자열보다 크다고 판단됩니다.
*/
undefined
'aaaaaaaaaa' > 'aa'
true
'aaaaaaaaaa' > 'zz'
false
'zzaaaaaaaa' > 'zz'
true
//https://ko.wikipedia.org/wiki/%EC%9C%A0%EB%8B%88%EC%BD%94%EB%93%9C_0000~0FFF
undefined
null === undefined
false
null == undefined
true
null == 0
false
null > 0
false
null >= 0
true
undefined == 0
false
!!3
true
!!false
false
!!NaN
false
!!undefined
false
!!null
false
// 제가 알기로는 >= 연산자는 <
undefined
if (0) console.log(10);
undefined
if (1) console.log(10);
VM4797:1 10
undefined
if (1){ console.log(10) };
VM4822:1 10
undefined
if (0) console.log(10); console.log(10);
VM4905:1 10
undefined
if (0) {
  alert('if');
} else if (0) {
  alert('else if 1');
} else if (1) {
  alert('else if 2');
} else if (1) {
  alert('else if 3');
} else {
  alert('else');
}
undefined
// let result = condition ? value1 : value2;
undefined
let result = 3 > 5 ? 100 : 200;
undefined
200
200
result
200
let age = 10;

let message = (age < 3) ? '아기야 안녕?':
  (age < 18) ? '안녕!' :
  (age < 100) ? '환영합니다!' :
  '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';

console.log(message);
VM5378:8 안녕!
undefined
if (age < 3) {
  message = '아기야 안녕?';
} else if (age < 18) {
  message = '안녕!';
} else if (age < 100) {
  message = '환영합니다!';
} else {
  message = '나이가 아주 많으시거나, 나이가 아닌 값을 입력 하셨군요!';
}
'안녕!'
// and(&&, 논리곱), or(||, 논리합), not(!)
// true(1), false(0)
undefined
// result = value1 || value2 || value3;
undefined
// 여기서 핵심은 반환 값이 형 변환을 하지 않은 원래 값
undefined
100 || 200 || 300;
100
0 || 200 || 300;
200
0 || 0 || 300;
300
false || 0 || 300;
300
// result = value1 && value2 && value3;
undefined
100 && 200 && 300;
300
0 && 200 && 300;
0
0 && 0 && 300;
0
// &&의 우선순위가 ||보다 높습니다.
// AND 연산자 &&의 우선순위는 OR 연산자 ||보다 높습니다.

// 따라서 a && b || c && d는 (a && b) || (c && d)와 동일하게 동작합니다.
undefined
let x = 1;

(x > 0) && alert( '0보다 큽니다!' );
VM5677:1 Uncaught SyntaxError: Identifier 'x' has already been declared
let xxx = 1;

(xxx > 0) && alert( '0보다 큽니다!' );
undefined
let x = 1;

if (x > 0) alert( '0보다 큽니다!' );
VM5694:1 Uncaught SyntaxError: Identifier 'x' has already been declared
let xxx = 1;

if (xxx > 0) alert( '0보다 큽니다!' );
undefined
// 이렇게 사용하지 맙시다!
undefined
!true
false
let a = 100;
let xx = (a !== null && a !== undefined) ? a : 200;
undefined
xx
100
a = null
null
let xx = (a !== null && a !== undefined) ? a : 200;
undefined
xx
200
let one = null;
let two = null;
let three = "바이올렛";

// null이나 undefined가 아닌 첫 번째 피연산자
alert(one ?? two ?? three ?? "익명의 사용자"); // 바이올렛
undefined
!!false
false
!!NaN
false
!!undefined
false
!!3
true
let a = 10;
undefined
let b = 100;
undefined
// 좀 더 괜찮은 예제가 아니라 죄송합니다.ㅎㅎ
if (!!a && !!b) {
    console.log(a + b)
}
VM6253:3 110
undefined
/*
'??'와 '||'의 차이
null 병합 연산자는 OR 연산자 ||와 상당히 유사해 보입니다. 실제로 위 예시에서 ??를 ||로 바꿔도 그 결과는 동일하기까지 하죠. 관련 내용은 이전 챕터에서 살펴본 바 있습니다.
*/
undefined
let height = height ?? 100;
VM6291:1 Uncaught ReferenceError: height is not defined
    at <anonymous>:1:14
(익명) @ VM6291:1
let height = 100;
height = height ?? 200;
100
let height = null;
height = height ?? 200;
200
height
200
// null 병합 연산자 '??'
undefined
let x = 0
while (x < 10){
    console.log(x)
    x++;
}
VM6451:1 Uncaught SyntaxError: Identifier 'x' has already been declared
let xx = 0
while (xx < 10){
    console.log(xx)
    xx++;
}
VM6476:3 0
VM6476:3 1
VM6476:3 2
VM6476:3 3
VM6476:3 4
VM6476:3 5
VM6476:3 6
VM6476:3 7
VM6476:3 8
VM6476:3 9
9
let i = 3;
while (i) { // i가 0이 되면 조건이 falsy가 되므로 반복문이 멈춥니다.
  console.log(i);
  i--;
}
VM6522:3 3
VM6522:3 2
VM6522:3 1
1
let i = 3;
while (i) alert(i--);
undefined
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);
2
for (let i = 0; i < 3; i++) { // 0, 1, 2가 출력됩니다.
  alert(i);
}
undefined
let xx = 0
while (xx < 3){
    console.log(xx)
    xx++;
}
VM6696:3 0
VM6696:3 1
VM6696:3 2
2
i
3
xx
3
for (let kk = 0; kk < 3; kk++) { // 0, 1, 2가 출력됩니다.
  console.log(kk);
}
VM6764:2 0
VM6764:2 1
VM6764:2 2
undefined
kk
VM6774:1 Uncaught ReferenceError: kk is not defined
    at <anonymous>:1:1
(익명) @ VM6774:1
//for (;;) {
  // 끊임 없이 본문이 실행됩니다.
//}
//while(true){
//}
undefined
// break : 자신을 감싸고 있는 하나의 블록을 탈출
// continue : 다음 반복문으로 넘어가기
undefined
/*
labelName: for (...) {
  ...
}
*/
undefined
outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`(${i},${j})의 값`, '');

    // 사용자가 아무것도 입력하지 않거나 Cancel 버튼을 누르면 두 반복문 모두를 빠져나옵니다.
    if (!input) break outer; // (*)

    // 입력받은 값을 가지고 무언가를 함
  }
}
alert('완료!');
undefined
/*
지금까지 세 종류의 반복문에 대해 살펴보았습니다.

while – 각 반복이 시작하기 전에 조건을 확인합니다.
do..while – 각 반복이 끝난 후에 조건을 확인합니다.
for (;;) – 각 반복이 시작하기 전에 조건을 확인합니다. 추가 세팅을 할 수 있습니다.
‘무한’ 반복문은 보통 while(true)를 써서 만듭니다. 무한 반복문은 여타 반복문과 마찬가지로 break 지시자를 사용해 멈출 수 있습니다.

현재 실행 중인 반복에서 더는 무언가를 하지 않고 다음 반복으로 넘어가고 싶다면 continue 지시자를 사용할 수 있습니다.

반복문 앞에 레이블을 붙이고, break/continue에 이 레이블을 함께 사용할 수 있습니다. 레이블은 중첩 반복문을 빠져나와 바깥의 반복문으로 갈 수 있게 해주는 유일한 방법입니다.
*/
undefined
// switch문
// 복수의 if 조건문은 switch문으로 바꿀 수 있습니다.
undefined
let a = 2 + 2;

switch (a) {
  case 3:
    alert( '비교하려는 값보다 작습니다.' );
    break;
  case 4:
    alert( '비교하려는 값과 일치합니다.' );
    break;
  case 5:
    alert( '비교하려는 값보다 큽니다.' );
    break;
  default:
    alert( "어떤 값인지 파악이 되지 않습니다." );
}
undefined
let a = 3;

switch (a) {
  case 4:
    alert('계산이 맞습니다!');
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    alert('계산이 틀립니다!');
    alert("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;

  default:
    alert('계산 결과가 이상하네요.');
}
undefined
/*
함수
스크립트를 작성하다 보면 유사한 동작을 하는 코드가 여러 곳에서 필요할 때
*/
undefined
function showMessage() {
  let message = "안녕하세요!"; // 지역 변수

  alert( message );
}

showMessage(); // 안녕하세요!

alert( message ); 
undefined
function showMessage() {
  let mmm = "안녕하세요!"; // 지역 변수

  alert( mmm );
}

showMessage(); // 안녕하세요!

alert( mmm ); 
VM7192:9 Uncaught ReferenceError: mmm is not defined
    at <anonymous>:9:8
(익명) @ VM7192:9
// 외부 변수에 접근이 가능할 뿐만 아니라 수정도 가능합니다.
undefined
function doNothing() { /* empty */ }
undefined
doNothing()
undefined
console.log('hello')
VM7363:1 hello
undefined
/*
함수 이름짓기
함수는 어떤 동작을 수행하기 위한 코드를 모아놓은 것입니다. 따라서 함수의 이름은 대개 동사입니다. 함수 이름은 가능한 한 간결하고 명확해야 합니다. 함수가 어떤 동작을 하는지 설명할 수 있어야 하죠. 코드를 읽는 사람은 함수 이름만 보고도 함수가 어떤 기능을 하는지 힌트를 얻을 수 있어야 합니다.

함수가 어떤 동작을 하는지 축약해서 설명해주는 동사를 접두어로 붙여 함수 이름을 만드는 게 관습입니다. 다만, 팀 내에서 그 뜻이 반드시 합의된 접두어만 사용해야 합니다.

"show"로 시작하는 함수는 대개 무언가를 보여주는 함수입니다.

이 외에 아래와 같은 접두어를 사용할 수 있습니다.

"get…" – 값을 반환함
"calc…" – 무언가를 계산함
"create…" – 무언가를 생성함
"check…" – 무언가를 확인하고 불린값을 반환함
*/
undefined
/*
showMessage(..)     // 메시지를 보여줌
getAge(..)          // 나이를 나타내는 값을 얻고 그 값을 반환함
calcSum(..)         // 합계를 계산하고 그 결과를 반환함
createForm(..)      // form을 생성하고 만들어진 form을 반환함
checkPermission(..) // 승인 여부를 확인하고 true나 false를 반환함
*/
undefined
// 함수 선언
function sayHi() {
  alert( "Hello" );
}
undefined
// 함수 표현식
let sayHi = function() {
  alert( "Hello" );
};
VM7458:1 Uncaught SyntaxError: Identifier 'sayHi' has already been declared
let sum = (a, b) => a + b;
undefined
function sum(a, b) {
    return a + b;
}
VM7535:1 Uncaught SyntaxError: Identifier 'sum' has already been declared
    at <anonymous>:1:1
(익명) @ VM7535:1
let sum2 = (a, b) => {a + b};
undefined
sum2(10, 20)
undefined
let sum2 = (a, b) => { return a + b };
undefined
sum2(10, 20)
30
let sum2 = (a, b) => { 
    a = a * 2; 
    return a + b 
};
undefined
sum2(2, 20)
24
