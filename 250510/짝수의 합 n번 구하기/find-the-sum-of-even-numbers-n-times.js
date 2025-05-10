const [N, ...rest] = require('fs').readFileSync(0).toString().trim().split('\n').map(arr => arr.split(' ').map(e => Number(e)));

for (let i = 0; i < N; i++) {
    let sum = 0;
    const [a, b] = rest[i];

    for(let j = a; j <= b; j++) {
        j % 2 === 0 ? sum += j : null;
    }

    console.log(sum)
}

