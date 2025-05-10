const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(" ").map(element => Number(element));

console.log(a > b ? a * b : Math.floor(b / a));