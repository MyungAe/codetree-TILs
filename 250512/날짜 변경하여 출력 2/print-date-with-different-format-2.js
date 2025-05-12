const [m, d, y] = require('fs').readFileSync(0).toString().trim().split('-').map(e => Number(e));

console.log(`${y}.${m}.${d}`);