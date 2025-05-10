const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('', (score) => {
    console.log(`Your score is ${score} point.`);
    rl.close();
})

