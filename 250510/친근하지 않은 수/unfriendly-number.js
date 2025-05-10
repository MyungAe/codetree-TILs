const N = Number(require('fs').readFileSync(0).toString().trim());

let answer = 0;
for (let i = 1; i <= N; i++) {
    if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0) continue;
    answer++;
}

console.log(answer);