const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function solution(arr) {
  const [testCase, ...data] = arr;
  const island = data.pop();
  const [A, B] = island.slice(' ').map((e) => Number(e));
  const graph = {};
  let min = 1000000000;
  let max = 0;

  data.forEach((d) => {
    const [a, b, c] = d.split(' ').map((e) => Number(e));

    if (!graph[a]) {
      graph[a] = [];
    }

    graph[a].push([b, c]);
  });
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  console.log(solution(input));
  process.exit();
});
