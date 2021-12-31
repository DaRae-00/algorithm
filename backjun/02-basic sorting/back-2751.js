const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(parseInt(line.trimRight()));
}).on('close', function () {
  const [testCase, ...data] = input;
  data.sort((a, b) => a - b);
  console.log(data.join('\n'));
});
