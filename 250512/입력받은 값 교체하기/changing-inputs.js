const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

console.log(b, a);