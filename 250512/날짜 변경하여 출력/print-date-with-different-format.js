const [y, m, d] = require('fs').readFileSync(0).toString().trim().split('.').map(e => Number(e));

console.log(`${m}-${d}-${y}`);