const Y = Number(require('fs').readFileSync(0).toString().trim());

console.log(
    Y % 4 !== 0 || (Y % 100 === 0 && Y % 400 !== 0) ? 'false' : 'true'
)