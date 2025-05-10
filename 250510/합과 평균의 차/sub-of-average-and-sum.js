const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(' ');

const sum = input.reduce((prev, cur) => prev + Number(cur), 0);
const avg = sum / input.length;
const diff = sum - avg;

console.log(sum);
console.log(avg);
console.log(diff);