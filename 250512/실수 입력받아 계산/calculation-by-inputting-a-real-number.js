const [a, b] = require('fs').readFileSync(0).toString().trim().split('\n').map(e => Number(e));

console.log((a + b).toFixed(2))