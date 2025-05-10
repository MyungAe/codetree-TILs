let str = require('fs').readFileSync(0).toString().trim();

console.log(str.replace(1, 'a').replace(str.length - 2, 'a'));