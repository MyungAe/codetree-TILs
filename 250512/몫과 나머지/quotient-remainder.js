const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

console.log(`${Math.floor(a / b)}...${a%b}`);