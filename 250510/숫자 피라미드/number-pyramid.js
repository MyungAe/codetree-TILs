const N = Number(require('fs').readFileSync(0).toString().trim());

let answer = '';
for (let i = 1; i <= N; i++) {
    for (let j = 0; j < i; j++) {
        answer += `${i} `;
    }
    answer += '\n';
}

console.log(answer.trim());