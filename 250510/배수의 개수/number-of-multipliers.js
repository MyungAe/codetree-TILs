const arr = require('fs').readFileSync(0).toString().trim().split('\n').map(e => Number(e));

console.log(
    arr.reduce((prev, cur) => cur % 3 === 0 ? prev + 1 : prev, 0), 
    arr.reduce((prev, cur) => cur % 5 === 0 ? prev + 1 : prev, 0)    
);