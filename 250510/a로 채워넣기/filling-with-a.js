let str = require('fs').readFileSync(0).toString().trim().split("");

str[1] = 'a';
str[str.length - 2] = 'a';

console.log(str.join(""));