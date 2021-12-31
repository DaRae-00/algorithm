const readline = require('readline');
const process = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(arr) {
  const [testCase, ...data] = arr;
  const [N, C] = testCase.split(' ').map((e) => Number(e));
  const X = data.map((e) => Number(e)).sort((a, b) => a - b);

  let max = X[N - 1] - X[0];
  let min = 1;
  let d = 0;
  let result = 0;

  while (min <= max) {
    let mid = Math.floor((max + min) / 2);
    let start = X[0];
    let cnt = 1;

    for (let i = 1; i < N; i++) {
      d = X[i] - start;
      if (mid <= d) {
        ++cnt;
        start = X[i];
      }
    }

    if (cnt >= C) {
      result = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return result;
}

const input = [];
rl.on('line', (l) => {
  input.push(l.trimRight());
}).on('close', () => {
  console.log(solution(input));
});
