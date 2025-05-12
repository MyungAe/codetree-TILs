const N = Number(require('fs').readFileSync(0).toString().trim());

console.log((N * 30.48).toFixed(1));