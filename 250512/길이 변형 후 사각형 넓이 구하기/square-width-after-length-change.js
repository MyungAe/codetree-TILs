const [w, h] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

console.log(w+8);
console.log(h*3);
console.log((w+8) * (h*3));