const strArr = require('fs').readFileSync(0).toString().trim().split(' ');
console.log(strArr.reverse().toString());