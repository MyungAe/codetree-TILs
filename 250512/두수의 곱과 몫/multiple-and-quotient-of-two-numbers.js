const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

console.log('%d * %d = %d', a, b, a*b);
console.log('%d / %d = %d', a, b, a/b);