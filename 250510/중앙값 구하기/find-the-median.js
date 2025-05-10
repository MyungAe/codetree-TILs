const input = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

console.log(input.sort()[Math.floor(input.length / 2)]);