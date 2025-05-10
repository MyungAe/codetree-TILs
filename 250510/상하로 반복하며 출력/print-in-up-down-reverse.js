const N = Number(require('fs').readFileSync(0).toString().trim());

const arr = Array.from({length: N}, () => Array.from({length: N}));

for (let i = 0; i < N; i++) {
    if (i % 2 === 0) {
        let cnt = 1;
        for (let j = 0; j < N; j++) {
            arr[j][i] = cnt++;
        }
    }
    else {
        let cnt = N;
        for (let j = 0; j < N; j++) {
            arr[j][i] = cnt--;
        }
    }
}

console.log(arr.map(e => e.join('')).join('\n'));