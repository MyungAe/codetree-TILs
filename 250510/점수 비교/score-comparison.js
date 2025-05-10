const [A, B] = require('fs').readFileSync(0).toString().trim().split('\n').map(arr => arr.split(' ').map(e => Number(e)));

console.log(A[0] > B[0] && A[1] > B[1] ? 1 : 0);
