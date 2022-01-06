const fs = require('fs');

// addListener(event: 'close', listener: () => void): this;
// addListener(event: 'data', listener: (chunk: Buffer | string) => void): this;
// addListener(event: 'end', listener: () => void): this;
// addListener(event: 'error', listener: (err: Error) => void): this;
// addListener(event: 'open', listener: (fd: number) => void): this;
// addListener(event: 'pause', listener: () => void): this;
// addListener(event: 'readable', listener: () => void): this;
// addListener(event: 'ready', listener: () => void): this;
// addListener(event: 'resume', listener: () => void): this;
// addListener(event: string | symbol, listener: (...args: any[]) => void): this;
// on(event: 'close', listener: () => void): this;
// on(event: 'data', listener: (chunk: Buffer | string) => void): this;
// on(event: 'end', listener: () => void): this;
// on(event: 'error', listener: (err: Error) => void): this;
// on(event: 'open', listener: (fd: number) => void): this;
// on(event: 'pause', listener: () => void): this;
// on(event: 'readable', listener: () => void): this;
// on(event: 'ready', listener: () => void): this;
// on(event: 'resume', listener: () => void): this;
// on(event: string | symbol, listener: (...args: any[]) => void): this;

const stream = fs.createReadStream('./TheGreatGatsby.txt', {
    highWaterMark: 8, //한 번에 읽어오는 Byte 수(기본은 64KB)
    encoding: 'utf-8'
});
const data = [];

console.log('1');

// 리스너는 data, end, error
stream.on('data', (chunk)=>{
    chunk = Buffer.from(chunk);
    data.push(chunk);
    console.log(chunk, chunk.length);
})

// console.log(data); // 중간 확인 불가
console.log('2');


stream.on('end', ()=>{
    console.log(data);
    console.log(data.join(''));
});

console.log('3');
