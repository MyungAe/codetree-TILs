const arr = require('fs').readFileSync(0).toString().trim().split('\n').map(e => e.split(' ').map(e => Number(e)));

let answer = 0;

arr.forEach(a => a.forEach(element => element % 5 === 0 ? answer++ : null));

console.log(answer);