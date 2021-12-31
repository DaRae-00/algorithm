const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
let result = '';

rl.on('line', function (line) {
  input = line
    .trimRight()
    .split('')
    .map((v) => Number(v));
}).on('close', function () {
  nums.forEach((n) => {
    input.forEach((i) => {
      if (i == n) {
        result += i.toString();
      }
    });
  });
  console.log(result);
});
