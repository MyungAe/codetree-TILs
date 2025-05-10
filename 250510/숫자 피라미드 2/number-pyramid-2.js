const N = Number(require('fs').readFileSync(0).toString().trim());

let answer = '';
let count = 1;
for (let i = 0; i < N; i++) {
    for (let j = 0; j <= i; j++) {
        answer += `${count++} `;
    }
    answer += '\n';
}

console.log(answer);