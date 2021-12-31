const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(arr) {
  const testCase = arr.shift();

  for (let i = 1; i < testCase; i++) {
    let minIdx = i;

    for (let j = i; j < testCase; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
      }
    }

    if (arr[minIdx] !== arr[i]) {
      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
  }

  return arr.join('\n');
}

const input = [];

rl.on('line', function (line) {
  input.push(parseInt(line.trimRight()));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
