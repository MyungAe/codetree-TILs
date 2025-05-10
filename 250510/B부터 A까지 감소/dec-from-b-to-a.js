const [A, B] = require('fs').toString().trim().split(' ').map(e => Number(e));

let answer = '';
for (let i = B; i >= A; i--) { 
    answer += i + ' ';
}

console.log(answer);