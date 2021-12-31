const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let symbols = [];

function calculation(str) {
  return Function('return (' + str + ')')();
}

function recursive(arr, n) {
  if (arr.length == n) {
    symbols.push(Object.assign([], arr));
    return;
  }

  arr.push(' ');
  recursive(arr, n);
  arr.pop();

  arr.push('+');
  recursive(arr, n);
  arr.pop();

  arr.push('-');
  recursive(arr, n);
  arr.pop();
}

function solution(input) {
  const [testCase, ...data] = input;

  for (let k = 0; k < testCase; k++) {
    symbols = [];
    const count = parseInt(data[k]);
    recursive([], count - 1);
    symbols.forEach((s) => {
      let j = '';
      for (let i = 0; i < count; i++) {
        j += (i + 1).toString();
        if (i < count - 1) {
          j += s[i];
        }
      }

      const a = calculation(j.replace(/ /g, ''));
      if (a === 0) {
        console.log(j);
      }
    });

    if (k !== testCase - 1) {
      console.log('');
    }
  }
}

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  solution(input);
  process.exit();
});
