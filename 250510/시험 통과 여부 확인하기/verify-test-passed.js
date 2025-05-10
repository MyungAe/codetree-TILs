const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

console.log(Number(input) >= 80 ? "pass" : `${80 - Number(input)} more score`)