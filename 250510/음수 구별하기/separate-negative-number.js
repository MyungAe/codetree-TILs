const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

const num = Number(input);
console.log(num);

if (Number(num) < 0) console.log("minus");