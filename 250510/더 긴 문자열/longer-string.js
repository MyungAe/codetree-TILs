const [a, b] = require('fs').readFileSync(0).toString().trim().split(" ");

console.log(
    a.length === b.length ? 'same' : 
    a.length > b.length ? `${a} ${a.length}` : `${b} ${b.length}`
);