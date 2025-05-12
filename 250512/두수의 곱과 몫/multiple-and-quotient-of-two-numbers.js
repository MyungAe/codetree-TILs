const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

console.log(`${a} * ${b} = ${a * b}`);
console.log(`${a} / ${b} = ${Math.floor(a / b)}`);