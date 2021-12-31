const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tree = {};
const levelMin = [];
const levelMax = [];
let root = -1;
let x = 1;
let levelDepth = 1;

class Node {
  constructor(data, left, right) {
    this.parent = -1;
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function inOrder(node, level) {
  levelDepth = Math.max(levelDepth, level);

  console.log('levelDepth : ', levelDepth);

  if (node.left !== -1) {
    inOrder(tree[node.left], level + 1);
  }

  levelMin[level] = Math.min(levelMin[level], x);
  levelMax[level] = Math.max(levelMax[level], x);

  console.log('lev min : ', x, levelMin);
  console.log('lev max : ', x, levelMax);
  x += 1;

  if (node.right !== -1) {
    inOrder(tree[node.right], level + 1);
  }
}

function solution(arr) {
  const [testCase, ...nodes] = arr;
  const N = Number(testCase);
  levelMin.push(N);
  levelMax.push(0);

  [...Array(N).keys()].forEach((n) => {
    tree[n + 1] = new Node(n + 1, -1, -1);
    levelMin.push(N);
    levelMax.push(0);
  });

  console.log('lev min : ', levelMin);
  console.log('lev max : ', levelMax);

  // 데이터 넣기
  nodes.forEach((n) => {
    const [node, left, right] = n.split(' ').map((e) => Number(e));
    tree[node].left = left;
    tree[node].right = right;

    if (left !== -1) {
      tree[left].parent = node;
    }
    if (right !== -1) {
      tree[right].parent = node;
    }
  });

  // 루트찾기
  [...Array(N).keys()].forEach((n) => {
    if (tree[n + 1].parent === -1) {
      root = n + 1;
    }
  });

  console.log('root : ', root);

  // 중위순회
  inOrder(tree[root], 1);

  console.log('lev min 2: ', levelMin);
  console.log('lev max 2: ', levelMax);

  let resultLevel = 1;
  let resultWidth = levelMax[1] - levelMin[1] + 1;

  [...Array(levelDepth + 1).keys()].forEach((n) => {
    if (n > 1) {
      let width = levelMax[n] - levelMin[n] + 1;
      if (resultWidth < width) {
        resultLevel = n;
        resultWidth = width;
      }
    }
  });

  console.log(`${resultLevel} ${resultWidth}`);
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  solution(input);
  process.exit();
});
