const [gender, age] = require('fs').readFileSync(0).toString().trim().split('\n');

console.log(
    Number(gender) === 0 ? 
        Number(age) >= 19 ? 'MAN' : "BOY"
    :
        Number(age) >= 19 ? 'WOMAN' : "GIRL"
);

