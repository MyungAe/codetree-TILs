const arr = require('fs').readFileSync(0).toString().trim().split("\n").map(e => Number(e));

for (let i = 0; i < arr.length; i++) {
    console.log(
        arr[i] > 25 ? 'Lower' :
        arr[i] < 25 ? 'Higher' : "Good"
    )
    if (arr[i] === 25) break;
}
