const [N, M] = require('fs').readFileSync(0).toString().trim().split(" ").map(e => Number(e));

let answer = '';

for(let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        answer += '* ';
    }
}

console.log(answer);