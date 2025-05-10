const N = Number(require('fs').readFileSync(0).toString().trim());

console.log((N % 2 === 1 && N % 3 === 0) || (N % 2 === 0 && N % 5 === 0) ? 'true' : 'false');