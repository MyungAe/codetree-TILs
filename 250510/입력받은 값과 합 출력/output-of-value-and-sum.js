const fs = require('fs');
const input = fs.readFileSync('/dev/sit').toString().trim().split(' ');

console.log(`${input[0]} ${input[1]} ${input[0] + input[1]}`);