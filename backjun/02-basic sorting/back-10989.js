const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const [testCase, ...data] = input;
  data.sort((a, b) => a - b);
  return data.join('\n');
}

const input = [];

rl.on('line', function (line) {
  input.push(parseInt(line.trimRight()));
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
