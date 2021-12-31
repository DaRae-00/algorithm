const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(arr) {
  const [testCase, ...data] = arr;

  const O = {};
  data.forEach((d) => (O[d] ? (O[d] += 1) : (O[d] = 1)));

  const A = [];
  for (const key in O) {
    A.push({ key: key, value: O[key] });
  }

  A.sort(
    (a, b) => b.value - a.value || (a.key < b.key ? -1 : a.key > b.key ? 1 : 0),
  );

  return A[0].key;
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  console.log(solution(input));
});
