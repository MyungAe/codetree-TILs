const [A, B, C] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

console.log((A + B + C) / 3);