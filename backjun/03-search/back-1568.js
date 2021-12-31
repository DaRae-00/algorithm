const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(num) {
  let N = num;
  let K = 1;
  let result = 0;

  while (N > 0) {
    if (N >= K) {
      N -= K;
      K += 1;
      result += 1;
    } else {
      K = 1;
    }
  }

  return result;
}

let N = null;

rl.on('line', function (line) {
  N = Number(line.trimRight());
}).on('close', function () {
  console.log(solution(N));
});
