const [a, b, c] = require('fs').readFileSync(0).toString().trim().split('\n').map(e => Number(e));

console.log(a.toFixed(3));
console.log(b.toFixed(3));
console.log(c.toFixed(3));