const [start, end] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

let answer = 0;
for (let i = start; i <= end; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
        i % j === 0 ? count++ : null;
    }
    count === 3 ? answer++ : null;
}

console.log(answer)