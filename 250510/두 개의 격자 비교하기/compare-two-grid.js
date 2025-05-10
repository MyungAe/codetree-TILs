const [[N, M], ...rest] = require('fs').readFileSync(0).toString().trim().split('\n').map(arr => arr.split(' ').map(e => Number(e)));

const arr1 = rest.slice(0, N + 1);
const arr2 = rest.slice(N, 2 * N + 1);

let answer = '';
for(let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        arr1[i][j] === arr2[i][j] ? answer += '0 ' : answer += '1 ';
    }
    answer += '\n';
}

console.log(answer);