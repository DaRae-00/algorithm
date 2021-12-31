const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
let friend;
let count;

rl.on('line', (l) => {
  input.push(l);
}).on('close', () => {
  solution(input);
});

const makeSet = (name) => {
  if (!friend.has(name)) {
    friend.set(name, name);
    count.set(name, 1);
  }
};

function find(name) {
  if (friend.get(name) === name) {
    return name;
  } else {
    const target = find(friend.get(name));
    friend.set(name, target);
    return friend.get(name);
  }
}

function union(n1, n2) {
  let f1 = find(n1);
  let f2 = find(n2);

  if (f1 !== f2) {
    friend.set(f2, f1);
    count.set(f1, count.get(f1) + count.get(f2));
  }
}

function solution(input) {
  const [testCase, ...data] = input;
  let idx = 0;
  const ans = [];

  for (let i = 0; i < Number(testCase); i++) {
    friend = new Map();
    count = new Map();
    start = idx + 1;
    end = Number(data[idx]) + 1 + idx;

    let items = data.slice(start, end);

    items.forEach((el) => {
      const [n1, n2] = el.split(' ');
      makeSet(n1);
      makeSet(n2);
      union(n1, n2);
      console.log(count.get(find(n1)));
      idx++;
    });
    idx++;
  }
}
