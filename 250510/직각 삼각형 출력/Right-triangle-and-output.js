const N = Number(require('fs').readFileSync(0).toString().trim());

let answer = '';
for(let i = 1; i <= N; i++) {
    for (let j = 1; j < 2 * i; j++) {
        answer += '*'
    }
    answer += '\n'
}

console.log(answer);