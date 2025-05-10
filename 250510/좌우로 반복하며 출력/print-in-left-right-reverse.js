const N = Number(require('fs').readFileSync(0).toString().trim());

let answer = '';
for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
        let start = 1;
        for (let j = 0; j < N; j++) {
            answer += start++;
        }
    }
    else {
        let start = N;
        for (let j = 0; j < N; j++) {
            answer += start--;
        }
    }
    answer += '\n';
}

console.log(answer);