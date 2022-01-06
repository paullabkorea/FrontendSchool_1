const fs = require('fs').promises;

// 동영상 스트리밍 생각해보세요. 8배속으로 보면 가끔씩 끊기죠? 왜냐하면 동영상을 미리 받아 놓아 버퍼로 쌓아놓는 것인데 더이상 버퍼가 없어서 흔히 말하는 버퍼링에 걸린 것입니다.

// 스트리밍은 조금씩 잘라서 보여주는 것이에요. 일반 텍스트 파일이든 동영상이든요. 이걸 사용하지 않는다면? 엄청나게 큰 크기에 파일을 읽기 위해서 한 번에 큰 메모리를 할당해줘야 할 겁니다.

// 고정된 사이즈의 데이터 바이트, hello 한 번 찍어보면 바로 감이 옵니다.
const buffer = Buffer.from('hello world');
console.log(buffer); // 유니코드 형태
console.log(buffer.length);
console.log(buffer[0], buffer[1]); // 아스키코드
console.log(Buffer.concat([buffer, buffer, buffer]).toString());

fs.readFile('./TheGreatGatsby.txt', 'utf8').then((data)=>{
    console.log(data.length);
    // console.log(data.slice(0, 1000));
    return data.slice(0, 100);
}).then((data)=>{
    const buf = Buffer.from(data);
    console.log(buf);
    console.log(buf.length);
    console.log(buf.toString()); //기본값은 utf-8
    // console.log(buf.toJSON());
});