const a = Number(require('fs').readFileSync(0).toString().trim());

console.log((a + 1.5).toFixed(2));