const [[a, b], c] = require('fs').readFileSync(0).toString().trim().split('\n').map(e => e.split(' ').map(e => Number(e)));

console.log(a, b, c);