const arr = require('fs').readFileSync(0).toString().trim().split('\n').map(e => e.split(' ').map(e => Number(e)));

arr.forEach(a => console.log(a.reduce((prev, cur) => prev + cur, 0)));