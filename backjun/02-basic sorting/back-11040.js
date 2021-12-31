const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  const target = input[0].split(' ').map((v) => parseInt(v))[1];
  const data = input[1].split(' ').map((v) => parseInt(v));

  data.sort((a, b) => a - b);
  console.log(data[target - 1]);
});
