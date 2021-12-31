const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
const root = [];
const rank = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});

// 초기화
const makeSet = (len) => {
  for (let i = 0; i < len + 1; i++) {
    root.push(i);
    rank.push(1);
  }
};

// root 노드 찾기
const find = (x) => {
  return root[x] === x ? x : find(root[x]);
};

const union = (x, y) => {
  let start = find(x);
  let end = find(y);

  if (start !== end) {
    if (rank[start] < rank[end]) {
      const temp = start;
      start = end;
      end = temp;
    }

    root[end] = start;

    if (rank[start] === rank[end]) {
      rank[start] += 1;
    }
  }
};

const solution = (input) => {
  const [len, count] = input[0].split(' ');
  makeSet(Number(len));

  for (let j = 0; j < Number(count); j++) {
    const [c, n1, n2] = input[j + 1].split(' ');
    const num1 = Number(n1);
    const num2 = Number(n2);
    const check = Number(c);

    if (check === 0) {
      if (num1 !== num2) {
        union(num2, num1);
      }
    } else {
      if (find(num1) === find(num2) || num1 === num2) {
        console.log('YES');
      } else {
        console.log('NO');
      }
    }
  }
};
