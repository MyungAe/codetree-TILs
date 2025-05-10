const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(element => Number(element));

console.log(a < b ? 1 : 0, a === b ? 1 : 0);