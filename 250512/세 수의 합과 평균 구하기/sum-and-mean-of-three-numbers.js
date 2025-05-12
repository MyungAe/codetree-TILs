const [a, b, c] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

console.log(a + b + c);
console.log(Math.floor(((a + b + c) / 3)));