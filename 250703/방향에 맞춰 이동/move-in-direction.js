const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const moves = input.slice(1);

// Please Write your code here.
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

let location = [0, 0];
const directionMap = {
    'N' : 0,
    'E' : 2,
    'S' : 1,
    'W' : 3
};

moves.forEach(element => {
    const [direction, value] = element.split(' ');
    location[0] += dx[directionMap[direction]] * value;
    location[1] += dy[directionMap[direction]] * value;
})

console.log(location.join(" "));