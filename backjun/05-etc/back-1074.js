const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let result = 0;
let targetX = 0;
let targetY = 0;

function solve(x, y, depth) {
  if (depth === 0) {
    console.log(result);
    return;
  }

  const size = Math.floor(Math.pow(2, depth - 1) / 2);
  const skip = Math.pow(4, depth - 1);

  if (targetX < x && targetY < y) {
    solve(x - size, y - size, depth - 1);
  } else if (targetX >= x && targetY < y) {
    result += skip;
    solve(x + size, y - size, depth - 1);
  } else if (targetX < x && targetY >= y) {
    result += skip * 2;
    solve(x - size, y + size, depth - 1);
  } else {
    result += skip * 3;
    solve(x + size, y + size, depth - 1);
  }
}

function solution(input) {
  const [N, r, c] = input[0].split(' ').map((v) => parseInt(v));

  result = 0;
  targetX = c;
  targetY = r;
  const size = 2 ** N;

  solve(size / 2, size / 2, N);
}

let input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  solution(input);
  process.exit();
});
