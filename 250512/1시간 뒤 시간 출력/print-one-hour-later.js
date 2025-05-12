const [h, m] = require('fs').readFileSync(0).toString().trim().split(':').map(e => Number(e));

console.log(`${h + 1}:${m}`)