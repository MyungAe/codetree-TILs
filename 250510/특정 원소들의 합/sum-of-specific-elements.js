const arr = require('fs').readFileSync(0).toString().trim().split("\n").map(e => e.split(' ').map(e => Number(e)));

let ans = 0;
for (let i = 0; i < 4; i++) {
    for (let j = 0; j <= i; j++) {
        ans += arr[i][j];
    }
}

console.log(ans);