const [w, h] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

console.log(w, h, w * h);