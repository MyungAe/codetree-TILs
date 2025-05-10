const N = Number(require('fs').readFileSync(0).toString().trim());

let answer = 0;
for (let i = 1; i <= 100; i++) {
    answer += i;
    if (answer >= N) {
        console.log(i);
        break;
    }
}
