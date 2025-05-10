const N = Number(require('fs').readFileSync(0).toString().trim());

let answer = '';
for (let i = 0; i < N; i++) {
    for (let j = i; j < N; j++) {
        answer += "* ";
    }
    answer += '\n'
}

console.log(answer);