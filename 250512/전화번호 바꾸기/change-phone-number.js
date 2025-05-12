const [a, b, c] = require('fs').readFileSync(0).toString().trim().split('-');

console.log(`${a}-${c}-${b}`);