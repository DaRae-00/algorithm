const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function symbol(n, x, y) {}

function solution(input) {
  const [testCase, ...data] = input.map((v) => parseInt(v));

  const result = data.map((d) => {
    const count = parseInt(d);

    for (let i = 0; i < 3 * (count - 1); i++) {
      for (let j = 0; j < count; j++) {}
    }
  });
}

let input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  solution(input);
  process.exit();
});
