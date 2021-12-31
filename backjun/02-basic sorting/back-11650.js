const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const [testCase, ...data] = input;

  const coordinates = data.map((d) => {
    const c = d.split(' ');
    return [parseInt(c[0]), parseInt(c[1])];
  });

  coordinates.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const result = coordinates.map((c) => `${c[0]} ${c[1]}`);

  return result.join('\n');
}

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
