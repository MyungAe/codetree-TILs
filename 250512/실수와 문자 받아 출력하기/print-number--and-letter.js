const [a, b, c] = require('fs').readFileSync(0).toString().trim().split('\n').map((e, index) => index > 0 ? Number(e) : e);

console.log(a);
console.log(b.toFixed(2));
console.log(c.toFixed(2));