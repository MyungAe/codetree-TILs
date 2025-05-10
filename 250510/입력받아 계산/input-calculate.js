const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('', (a) => {
    console.log(Number(a) + 2);
    rl.close();
})