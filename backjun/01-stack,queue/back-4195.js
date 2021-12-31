const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let friend = {};
let count = {};

rl.on('line', (l) => {
  input.push(l);
}).on('close', () => {
  console.log(solution(input));
  process.exit();
});

const makeSet = (name) => {
  if (!friend[name]) {
    friend[name] = name;
    count[name] = 1;
  }
};

function find(name) {
  if (friend[name] === name) {
    return name;
  } else {
    friend[name] = find(friend[name]);
    return friend[name];
  }
}

function union(n1, n2) {
  let f1 = find(n1);
  let f2 = find(n2);

  if (count[f1] < count[f2]) {
    [f1, f2] = [f2, f1];
    count[f2] += 1;
    friend[f1] = f2;
  }

  count[f1] += count[f2];
  friend[f2] = f1;

  return f1;
}

function solution(input) {
  const [testCase, ...data] = input;
  let start = 1;
  let end = 0;
  const ans = [];

  for (let i = 0; i < Number(testCase); i++) {
    end += Number(data[start - 1]) + 1;
    let items = data.slice(start, end);
    let result = null;
    start += end;

    items.forEach((el) => {
      const [n1, n2] = el.split(' ');
      makeSet(n1);
      makeSet(n2);
      result = union(n1, n2);
      ans.push(count[result]);
    });

    friend = {};
    count = {};
  }

  return ans.join('\n');
}
