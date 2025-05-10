const N = Number(require('fs').readFileSync(0).toString().trim());

let answer = '';
for (let i = N; i <= 100; i++) {
    answer += 
        i >= 90 ? 'A ' : 
        i >= 80 ? 'B ' :
        i >= 70 ? 'C ' : 
        i >= 60 ? 'D ' : 'F ';
}

console.log(answer);