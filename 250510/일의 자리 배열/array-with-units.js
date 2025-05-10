const [a, b] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

const arr = [a, b];

for (let i = 1; i < 9; i++) {
    arr.push((arr[i] + arr[i - 1]) % 10);    
}

console.log(arr.join(" "));