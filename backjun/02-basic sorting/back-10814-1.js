const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(input) {
  const [testCase, ...data] = input;

  const member = data.map((d, i) => {
    const [age, name] = d.split(' ');
    return [Number(age), i, name];
  });

  member.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const result = member.map((m) => `${m[0]} ${m[2]}`);

  return result.join('\n');
}

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
