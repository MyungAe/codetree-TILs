const [N, arr] = require('fs').readFileSync(0).toString().trim().split('\n').map(e => e.split(' ').map(e => Number(e)));

console.log(arr.filter(e => e % 2 === 0).reverse().join(" "));