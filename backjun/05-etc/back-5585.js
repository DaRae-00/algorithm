const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .split('\n')
  .map((a) => +a);

function solution(input) {
  let change = 1000 - input.shift();
  let count = 0;

  [500, 100, 50, 10, 5, 1].forEach((a) => {
    count += parseInt(change / a);
    change %= a;
  });

  console.log(count);
}

solution(input);
