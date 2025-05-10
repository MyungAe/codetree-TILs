const arr = require('fs').readFileSync(0).toString().trim().split('\n').map(arr => arr.split(' ').map(e => Number(e)));

console.log(
    arr.map(
        arr => arr.map(element => element * 3).join(' ')
    ).join('\n')
);
