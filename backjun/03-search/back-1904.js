const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const N = parseInt(input[0]);

const dp = new Array(1000001).fill(0);
dp[1] = 1;
dp[2] = 2;

for (let i = 3; i < N + 1; i++) {
  dp[i] = (dp[i - 2] + dp[i - 1]) % 15746;
}

console.log(dp[N]);
