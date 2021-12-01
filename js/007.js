// 정답코드
let value = [1, 4, 6, 8, 13, 17, 20, 21, 28];
let temp = value[1] - value[0];  // 4 - 1 -> 3, 초기 temp는 3
let result = 0;

for (let i = 0; i < value.length - 1; i++) {
    if (temp > (value[i+1] - value[i])){
        temp = value[i+1] - value[i];
        result = i;
    }
}

console.log(value[result], value[result+1]);
////////////////////////


// 1번째 순회
// initail value : i==0, temp=3, result=0
for (let i = 0; i < 8; i++) {
    if (3 > 3){ // temp > (value[1] - value[0])
        temp = value[i+1] - value[i]; // temp = value[i+1] - value[i];
        result = i; // result = i;
    }
}
// final value : i==0, temp=3, result=0

// 2번째 순회
// initail value : i==1, temp=3, result=0
for (let i = 0; i < 8; i++) {
    if (3 > 2){ // temp > (value[2] - value[1])
        temp = 2; // temp = value[2] - value[1];
        result = 1; // result = 1;
    }
}
// final value : i==1, temp=2, result=1

// 3번째 순회
// initail value : i==2, temp=2, result=1
for (let i = 0; i < 8; i++) {
    if (2 > 2){ // temp > (value[2] - value[1])
        temp = value[i+1] - value[i];
        result = i;
    }
}
// final value : i==1, temp=2, result=1

...