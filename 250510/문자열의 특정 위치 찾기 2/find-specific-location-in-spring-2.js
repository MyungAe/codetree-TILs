const target = require('fs').readFileSync(0).toString().trim();
const strings = ['apple', 'banana', 'grape', 'blueberry', 'orange'];

const correct = strings.filter(str => str[2] === target || str[3] === target);
const str = correct.join('\n');

if (str) console.log(correct.join("\n"));
console.log(correct.length);