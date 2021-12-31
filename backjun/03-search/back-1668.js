const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getCount(arr) {
  let count = 0;
  let big = 0;

  arr.forEach((n) => {
    if (n > big) {
      big = n;
      count += 1;
    } else return count;
  });

  return count.toString();
}

function solution(arr) {
  const result = [];
  const [testCase, ...data] = arr;
  result[0] = getCount(data);
  data.reverse();
  result[1] = getCount(data);

  return result.join('\r\n');
}

const input = [];
rl.on('line', function (line) {
  input.push(Number(line.trimRight()));
}).on('close', function () {
  console.log(solution(input));
});
