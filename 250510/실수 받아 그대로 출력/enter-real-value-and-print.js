const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('', (answer) => {
    console.log(parseFloat(answer).toFixed(2));
    rl.close();
});