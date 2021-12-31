const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  const data = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
  let count = 1;
  data.sort((a, b) => {
    console.log(`! -- a : ${a}, b: ${b}`);
    return a - b;
  });

  console.log(data);
});
