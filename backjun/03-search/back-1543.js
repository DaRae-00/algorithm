const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(arr) {
  const document = arr[0];
  const word = arr[1];

  let idx = 0;
  let result = 0;

  while (document.length - idx > word.length) {
    if (document.slice(idx, idx + word.length) === word) {
      result++;
      idx += word.length;
    } else {
      idx++;
    }
  }

  return result;
}

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  console.log(solution(input));
});
