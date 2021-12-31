const fs = require('fs');
const input = fs
  .readFileSync('./dev/stdin')
  .toString()
  .split('\n')
  .map((a) => +a)[0];

let n = input;
let row = Array(n).fill(0);
let result = 0;

function check(x) {
  for (let j = 0; j < x; j++) {
    console.log('!!! row[x], row[j] : ', row[x], row[j]);
    if (row[x] === row[j]) {
      return false;
    }
    console.log(
      '!!! Math.abs(row[x] - row[j]) : ',
      Math.abs(row[x] - row[j]),
      x,
      j,
    );
    if (Math.abs(row[x] - row[j]) === x - j) {
      return false;
    }
  }

  return true;
}

function dfs(x) {
  console.log('!!! x : ', x);
  console.log('!!! result : ', result);

  if (x === n) {
    result += 1;
  } else {
    for (let i = 0; i < n; i++) {
      row[x] = i;
      console.log('!!! row[x] : ', row[x]);
      console.log('!!! check(x) : ', check(x));
      if (check(x)) {
        dfs(x + 1);
      }

      console.log('!!! for : ', i);
    }
  }
}

dfs(0);
console.log(result);
