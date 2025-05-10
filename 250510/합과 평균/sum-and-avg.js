const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(`${Number(input[0]) + Number(input[1])} ${((Number(input[0]) + Number(input[1])) / 2).toFixed(1)}`)