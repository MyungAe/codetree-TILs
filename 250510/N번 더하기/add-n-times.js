const [A, N] = require('fs').readFileSync(0).toString().trim().split(" ").map(element => Number(element));

for (let i = 1; i <= N; i++) {
    console.log(A + i * N);
}