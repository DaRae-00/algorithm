const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(arr) {
  const [testCase, data] = arr;
  const N = Number(testCase);
  const list = data.split(' ').map((e) => Number(e));

  const dp = new Array(N).fill(1);

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (list[j] < list[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  console.log(Math.max(...dp));
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  solution(input);
  process.exit();
});
