const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(arr) {
  const [testCase, ...data] = arr;
  const [N, K] = testCase.split(' ').map((e) => Number(e));

  const dp = Array.from(Array(N + 1), () => new Array(K + 1).fill(0));

  for (let i = 1; i < N + 1; i++) {
    let [W, V] = data[i - 1].split(' ').map((e) => Number(e));

    for (let j = 1; j < K + 1; j++) {
      if (j < W) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - W] + V);
      }
    }
  }

  console.log(dp[N][K]);
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  solution(input);
  process.exit();
});
