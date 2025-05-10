const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(`${input[1]} ${input[0]}`);