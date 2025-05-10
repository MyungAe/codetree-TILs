const [N, arr] = require('fs').readFileSync(0).toString().trim().split('\n').map(arr => arr.split(' ').map(e => Number(e)));

console.log(arr.map(e => e**2).join(" "));