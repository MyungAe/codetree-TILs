const N = Number(require('fs').readFileSync(0).toString().trim());

let answer = '';
for(let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
        answer += `${i} * ${j} = ${i * j}, `
    }
    answer += '\n';
}

console.log(answer.trim());