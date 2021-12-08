console.dir(fetch)
VM2258:1 ƒ fetch()length: 1name: "fetch"arguments: (...)caller: (...)[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()length: 1name: "[Symbol.hasInstance]"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]get arguments: ƒ ()length: 0name: ""arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]set arguments: ƒ ()length: 0name: ""arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]get caller: ƒ ()length: 0name: ""arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]set caller: ƒ ()length: 0name: ""arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0][[FunctionLocation]]: ​[[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]
undefined
console.dir(Promise)
VM2296:1 ƒ Promise()all: ƒ all()allSettled: ƒ allSettled()any: ƒ any()length: 1name: "Promise"prototype: Promise {Symbol(Symbol.toStringTag): 'Promise', constructor: ƒ, then: ƒ, catch: ƒ, finally: ƒ}race: ƒ race()reject: ƒ reject()resolve: ƒ resolve()Symbol(Symbol.species): ƒ Promise()Symbol(Symbol.species): ƒ Promise()arguments: (...)caller: (...)[[Prototype]]: ƒ ()apply: ƒ apply()arguments: (...)bind: ƒ bind()call: ƒ call()caller: (...)constructor: ƒ Function()length: 0name: ""toString: ƒ toString()Symbol(Symbol.hasInstance): ƒ [Symbol.hasInstance]()get arguments: ƒ ()set arguments: ƒ ()get caller: ƒ ()set caller: ƒ ()[[FunctionLocation]]: ​[[Prototype]]: Object[[Scopes]]: Scopes[0][[Scopes]]: Scopes[0]
undefined
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
console.log(1);
console.log(2);
VM2301:11 1
VM2301:12 2
undefined
VM2301:3 1
VM2301:7 2
VM2301:8 (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        return json
    })
console.log(1);
console.log(2);
VM2307:9 1
VM2307:10 2
undefined
VM2307:6 (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {시·도별(1): '전국', 총인구 (명): 52980961, 1차 접종 누계: 15199919, 2차 접종 누계: 4521785, 1차 접종 퍼센트: 28.6893984426, …}1차 접종 누계: 151999191차 접종 퍼센트: 28.68939844262차 접종 누계: 45217852차 접종 퍼센트: 8.5347357138시·도별(1): "전국"총인구 (명): 52980961[[Prototype]]: Object1: {시·도별(1): '서울', 총인구 (명): 9911088, 1차 접종 누계: 2811191, 2차 접종 누계: 835878, 1차 접종 퍼센트: 28.3641008939, …}2: {시·도별(1): '부산', 총인구 (명): 3438710, 1차 접종 누계: 1092941, 2차 접종 누계: 294736, 1차 접종 퍼센트: 31.783459495, …}3: {시·도별(1): '대구', 총인구 (명): 2446144, 1차 접종 누계: 644230, 2차 접종 누계: 187104, 1차 접종 퍼센트: 26.3365525496, …}4: {시·도별(1): '인천', 총인구 (명): 3010476, 1차 접종 누계: 796739, 2차 접종 누계: 224735, 1차 접종 퍼센트: 26.4655489697, …}5: {시·도별(1): '광주', 총인구 (명): 1471385, 1차 접종 누계: 425263, 2차 접종 누계: 134346, 1차 접종 퍼센트: 28.9022247746, …}6: {시·도별(1): '대전', 총인구 (명): 1480777, 1차 접종 누계: 403102, 2차 접종 누계: 122557, 1차 접종 퍼센트: 27.2223298984, …}7: {시·도별(1): '울산', 총인구 (명): 1153901, 1차 접종 누계: 293467, 2차 접종 누계: 79705, 1차 접종 퍼센트: 25.4325977705, …}8: {시·도별(1): '세종', 총인구 (명): 360907, 1차 접종 누계: 77219, 2차 접종 누계: 23956, 1차 접종 퍼센트: 21.3958166508, …}9: {시·도별(1): '경기', 총인구 (명): 13807158, 1차 접종 누계: 3469297, 2차 접종 누계: 1026579, 1차 접종 퍼센트: 25.1268001713, …}10: {시·도별(1): '강원', 총인구 (명): 1560172, 1차 접종 누계: 548462, 2차 접종 누계: 159193, 1차 접종 퍼센트: 35.1539445651, …}11: {시·도별(1): '충북', 총인구 (명): 1637897, 1차 접종 누계: 516715, 2차 접종 누계: 155060, 1차 접종 퍼센트: 31.5474660495, …}12: {시·도별(1): '충남', 총인구 (명): 2185575, 1차 접종 누계: 685279, 2차 접종 누계: 215670, 1차 접종 퍼센트: 31.3546320762, …}13: {시·도별(1): '전북', 총인구 (명): 1835392, 1차 접종 누계: 651441, 2차 접종 누계: 206179, 1차 접종 퍼센트: 35.4932897169, …}14: {시·도별(1): '전남', 총인구 (명): 1884455, 1차 접종 누계: 716955, 2차 접종 누계: 236318, 1차 접종 퍼센트: 38.0457479749, …}15: {시·도별(1): '경북', 총인구 (명): 2691891, 1차 접종 누계: 872654, 2차 접종 누계: 263155, 1차 접종 퍼센트: 32.4178802188, …}16: {시·도별(1): '경남', 총인구 (명): 3407455, 1차 접종 누계: 1000010, 2차 접종 누계: 297667, 1차 접종 퍼센트: 29.3477096543, …}17: {시·도별(1): '제주', 총인구 (명): 697578, 1차 접종 누계: 194954, 2차 접종 누계: 58947, 1차 접종 퍼센트: 27.9472689792, …}length: 18[[Prototype]]: Array(0)
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json);
        return json
    })
console.log(1);
console.log(2);
VM2312:9 1
VM2312:10 2
undefined
VM2312:6 (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: 1차 접종 누계: 151999191차 접종 퍼센트: 28.68939844262차 접종 누계: 45217852차 접종 퍼센트: 8.5347357138시·도별(1): "전국"총인구 (명): 52980961[[Prototype]]: Object1: {시·도별(1): '서울', 총인구 (명): 9911088, 1차 접종 누계: 2811191, 2차 접종 누계: 835878, 1차 접종 퍼센트: 28.3641008939, …}2: {시·도별(1): '부산', 총인구 (명): 3438710, 1차 접종 누계: 1092941, 2차 접종 누계: 294736, 1차 접종 퍼센트: 31.783459495, …}3: {시·도별(1): '대구', 총인구 (명): 2446144, 1차 접종 누계: 644230, 2차 접종 누계: 187104, 1차 접종 퍼센트: 26.3365525496, …}4: {시·도별(1): '인천', 총인구 (명): 3010476, 1차 접종 누계: 796739, 2차 접종 누계: 224735, 1차 접종 퍼센트: 26.4655489697, …}5: {시·도별(1): '광주', 총인구 (명): 1471385, 1차 접종 누계: 425263, 2차 접종 누계: 134346, 1차 접종 퍼센트: 28.9022247746, …}6: {시·도별(1): '대전', 총인구 (명): 1480777, 1차 접종 누계: 403102, 2차 접종 누계: 122557, 1차 접종 퍼센트: 27.2223298984, …}7: {시·도별(1): '울산', 총인구 (명): 1153901, 1차 접종 누계: 293467, 2차 접종 누계: 79705, 1차 접종 퍼센트: 25.4325977705, …}8: {시·도별(1): '세종', 총인구 (명): 360907, 1차 접종 누계: 77219, 2차 접종 누계: 23956, 1차 접종 퍼센트: 21.3958166508, …}9: {시·도별(1): '경기', 총인구 (명): 13807158, 1차 접종 누계: 3469297, 2차 접종 누계: 1026579, 1차 접종 퍼센트: 25.1268001713, …}10: {시·도별(1): '강원', 총인구 (명): 1560172, 1차 접종 누계: 548462, 2차 접종 누계: 159193, 1차 접종 퍼센트: 35.1539445651, …}11: {시·도별(1): '충북', 총인구 (명): 1637897, 1차 접종 누계: 516715, 2차 접종 누계: 155060, 1차 접종 퍼센트: 31.5474660495, …}12: {시·도별(1): '충남', 총인구 (명): 2185575, 1차 접종 누계: 685279, 2차 접종 누계: 215670, 1차 접종 퍼센트: 31.3546320762, …}13: {시·도별(1): '전북', 총인구 (명): 1835392, 1차 접종 누계: 651441, 2차 접종 누계: 206179, 1차 접종 퍼센트: 35.4932897169, …}14: {시·도별(1): '전남', 총인구 (명): 1884455, 1차 접종 누계: 716955, 2차 접종 누계: 236318, 1차 접종 퍼센트: 38.0457479749, …}15: {시·도별(1): '경북', 총인구 (명): 2691891, 1차 접종 누계: 872654, 2차 접종 누계: 263155, 1차 접종 퍼센트: 32.4178802188, …}16: {시·도별(1): '경남', 총인구 (명): 3407455, 1차 접종 누계: 1000010, 2차 접종 누계: 297667, 1차 접종 퍼센트: 29.3477096543, …}17: {시·도별(1): '제주', 총인구 (명): 697578, 1차 접종 누계: 194954, 2차 접종 누계: 58947, 1차 접종 퍼센트: 27.9472689792, …}length: 18[[Prototype]]: Array(0)
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
    .then(function(json) {
        console.log(3);
        console.log(json.filter(s => s['시·도별(1)'] === '전국'));
        return
    })
Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
VM2318:1 GET https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json net::ERR_TIMED_OUT
(익명) @ VM2318:1
VM2318:1  Uncaught (in promise) TypeError: Failed to fetch
    at <anonymous>:1:1
(익명) @ VM2318:1
Promise.then(비동기)
(익명) @ VM2318:11
fetch('https://블라블라.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
    .then(function(json) {
        console.log(3);
        console.log(json.filter(s => s['시·도별(1)'] === '전국').map(obj => obj['1차 접종 퍼센트']));
        return
    })
Promise {<pending>}
VM2331:1 GET https://xn--oi2ba671cba.json/ net::ERR_NAME_NOT_RESOLVED
(익명) @ VM2331:1
VM2331:1  Uncaught (in promise) TypeError: Failed to fetch
    at <anonymous>:1:1
(익명) @ VM2331:1
Promise.then(비동기)
(익명) @ VM2331:11
fetch('https://블라블라.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
    .then(function(json) {
        console.log(3);
        console.log(json.filter(s => s['시·도별(1)'] === '전국'));
        return
    })
Promise {<pending>}
VM2339:1 GET https://xn--oi2ba671cba.json/ net::ERR_NAME_NOT_RESOLVED
(익명) @ VM2339:1
VM2339:1  Uncaught (in promise) TypeError: Failed to fetch
    at <anonymous>:1:1
(익명) @ VM2339:1
Promise.then(비동기)
(익명) @ VM2339:11
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
    .then(function(json) {
        console.log(3);
        console.log(json.filter(s => s['시·도별(1)'] === '전국').map(obj => obj['1차 접종 퍼센트']));
        return
    })
Promise {<pending>}
VM2345:3 1
VM2345:7 2
VM2345:8 (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]0: {시·도별(1): '전국', 총인구 (명): 52980961, 1차 접종 누계: 15199919, 2차 접종 누계: 4521785, 1차 접종 퍼센트: 28.6893984426, …}1: {시·도별(1): '서울', 총인구 (명): 9911088, 1차 접종 누계: 2811191, 2차 접종 누계: 835878, 1차 접종 퍼센트: 28.3641008939, …}2: {시·도별(1): '부산', 총인구 (명): 3438710, 1차 접종 누계: 1092941, 2차 접종 누계: 294736, 1차 접종 퍼센트: 31.783459495, …}3: {시·도별(1): '대구', 총인구 (명): 2446144, 1차 접종 누계: 644230, 2차 접종 누계: 187104, 1차 접종 퍼센트: 26.3365525496, …}4: {시·도별(1): '인천', 총인구 (명): 3010476, 1차 접종 누계: 796739, 2차 접종 누계: 224735, 1차 접종 퍼센트: 26.4655489697, …}5: {시·도별(1): '광주', 총인구 (명): 1471385, 1차 접종 누계: 425263, 2차 접종 누계: 134346, 1차 접종 퍼센트: 28.9022247746, …}6: {시·도별(1): '대전', 총인구 (명): 1480777, 1차 접종 누계: 403102, 2차 접종 누계: 122557, 1차 접종 퍼센트: 27.2223298984, …}7: {시·도별(1): '울산', 총인구 (명): 1153901, 1차 접종 누계: 293467, 2차 접종 누계: 79705, 1차 접종 퍼센트: 25.4325977705, …}8: {시·도별(1): '세종', 총인구 (명): 360907, 1차 접종 누계: 77219, 2차 접종 누계: 23956, 1차 접종 퍼센트: 21.3958166508, …}9: {시·도별(1): '경기', 총인구 (명): 13807158, 1차 접종 누계: 3469297, 2차 접종 누계: 1026579, 1차 접종 퍼센트: 25.1268001713, …}10: {시·도별(1): '강원', 총인구 (명): 1560172, 1차 접종 누계: 548462, 2차 접종 누계: 159193, 1차 접종 퍼센트: 35.1539445651, …}11: {시·도별(1): '충북', 총인구 (명): 1637897, 1차 접종 누계: 516715, 2차 접종 누계: 155060, 1차 접종 퍼센트: 31.5474660495, …}12: {시·도별(1): '충남', 총인구 (명): 2185575, 1차 접종 누계: 685279, 2차 접종 누계: 215670, 1차 접종 퍼센트: 31.3546320762, …}13: {시·도별(1): '전북', 총인구 (명): 1835392, 1차 접종 누계: 651441, 2차 접종 누계: 206179, 1차 접종 퍼센트: 35.4932897169, …}14: {시·도별(1): '전남', 총인구 (명): 1884455, 1차 접종 누계: 716955, 2차 접종 누계: 236318, 1차 접종 퍼센트: 38.0457479749, …}15: {시·도별(1): '경북', 총인구 (명): 2691891, 1차 접종 누계: 872654, 2차 접종 누계: 263155, 1차 접종 퍼센트: 32.4178802188, …}16: {시·도별(1): '경남', 총인구 (명): 3407455, 1차 접종 누계: 1000010, 2차 접종 누계: 297667, 1차 접종 퍼센트: 29.3477096543, …}17: {시·도별(1): '제주', 총인구 (명): 697578, 1차 접종 누계: 194954, 2차 접종 누계: 58947, 1차 접종 퍼센트: 27.9472689792, …}length: 18[[Prototype]]: Array(0)
VM2345:12 3
VM2345:13 [28.6893984426]
function add(){ return }
undefined
add()
undefined
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        console.log(response);
        console.dir(response);
        return response.json();
    })
    .then(function(json) {
        console.log(2);
        console.log(json);
        return json
    })
    .then(function(json) {
        console.log(3);
        console.log(json.filter(s => s['시·도별(1)'] === '전국').map(obj => obj['1차 접종 퍼센트']));
        return
    })
Promise {<pending>}
VM2552:3 1
VM2552:4 Response {type: 'cors', url: 'https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json', redirected: false, status: 200, ok: true, …}body: ReadableStreamlocked: true[[Prototype]]: ReadableStreamcancel: ƒ cancel()getReader: ƒ getReader()locked: (...)pipeThrough: ƒ pipeThrough()pipeTo: ƒ pipeTo()tee: ƒ tee()constructor: ƒ ReadableStream()Symbol(Symbol.toStringTag): "ReadableStream"get locked: ƒ locked()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()bodyUsed: trueheaders: Headers {}ok: trueredirected: falsestatus: 200statusText: ""type: "cors"url: "https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json"[[Prototype]]: ResponsearrayBuffer: ƒ arrayBuffer()blob: ƒ blob()body: (...)bodyUsed: (...)clone: ƒ clone()formData: ƒ formData()headers: (...)json: ƒ json()ok: (...)redirected: (...)status: (...)statusText: (...)text: ƒ text()type: (...)url: (...)constructor: ƒ Response()Symbol(Symbol.toStringTag): "Response"get body: ƒ body()get bodyUsed: ƒ bodyUsed()get headers: ƒ headers()get ok: ƒ ok()get redirected: ƒ redirected()get status: ƒ status()get statusText: ƒ statusText()get type: ƒ type()get url: ƒ url()[[Prototype]]: Object
VM2552:5 Response
VM2552:9 2
VM2552:10 (18) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
VM2552:14 3
VM2552:15 [28.6893984426]
function test(){
    console.log(1);
    return;
    console.log(2);
    console.log(3);
}
test()
VM2797:2 1
undefined
function test(){
    console.log(1);
    return undefined;
    console.log(2);
    console.log(3);
}
test();
VM2812:2 1
undefined
async function f() {
  return 100;
}

f().then(alert); // 100
Promise {<fulfilled>: undefined}
async function f() {
  return 100;
}

f().then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
Promise {<fulfilled>: 800}
// 모던 자바스크립트 예제
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
}

f();
Promise {<pending>}
// 모던 자바스크립트 예제 (살짝 수정)
async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 3000)
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  alert(result); // "완료!"
	return 100
}

f().then(function(result) { // (**)

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
function one(){ two(); }
function two(){ three(); }
function three(){ console.log('end'); }
one()
VM3038:3 end
undefined
console.log(1);
setTimeout(function(){
    console.log(2);
}, 1000) // setTimeout(()=> console.log(2), 1000)
console.log(3);
VM3044:1 1
VM3044:5 3
undefined
VM3044:3 2
