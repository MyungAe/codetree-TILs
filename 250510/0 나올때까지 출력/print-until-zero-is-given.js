const arr = require('fs').readFileSync(0).toString().trim().split("\n").map(e => Number(e));

arr.forEach(num => num !== 0 ? console.log(num) : '');