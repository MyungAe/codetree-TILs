const [A, B] = require('fs').readFileSync(0).toString().trim().split(' ').map(e => Number(e));

let answer = '';
let target = A;
while(target <= B) {
    answer += target + " ";
    target % 2 === 0 ? target += 3 : target *= 2;
}

console.log(answer);