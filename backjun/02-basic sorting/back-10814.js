const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  const [testCase, ...data] = input;

  data.sort((a, b) => {
    const f = Number(a.split(' ')[0]);
    const s = Number(b.split(' ')[0]);
    return f - s;
  });

  console.log(data.join('\n'));
});
