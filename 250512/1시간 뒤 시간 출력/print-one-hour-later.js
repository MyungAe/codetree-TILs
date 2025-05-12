const [h, m] = require('fs').readFileSync(0).toString().trim().split(':');

console.log(`${h + 1}:${m}`)