const fs = require('fs');
const num = Number(fs.readFileSync('/dev/stdin').toString().trim());

console.log(num < 0 ? 'ice' : num >= 100 ? 'vapor' : 'water');