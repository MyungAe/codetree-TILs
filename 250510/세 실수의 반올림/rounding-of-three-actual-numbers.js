const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 입력받은 세 줄 출력

input.forEach((str) => {
    console.log(Number(str).toFixed(3));
});
