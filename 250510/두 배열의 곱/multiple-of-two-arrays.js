const arr = require('fs').readFileSync(0).toString().trim().split("\n").filter(e => e ? e : null).map(e => e.split(' ').map(e => Number(e)));

const arr1 = arr.slice(0, 3);
const arr2 = arr.slice(3, 7);

let answer = '';
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        answer += arr1[i][j] * arr2[i][j] + " ";
    }
    answer += '\n'
}

console.log(answer);
