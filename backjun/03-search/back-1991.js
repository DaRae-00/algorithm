const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tree = {};
const preOrder = [];
const inOrder = [];
const postOrder = [];

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function pre_order(node) {
  preOrder.push(node.data);

  if (node.left !== '.') {
    pre_order(tree[node.left]);
  }

  if (node.right !== '.') {
    pre_order(tree[node.right]);
  }
}

function in_order(node) {
  if (node.left !== '.') {
    in_order(tree[node.left]);
  }

  inOrder.push(node.data);

  if (node.right !== '.') {
    in_order(tree[node.right]);
  }
}

function post_order(node) {
  if (node.left !== '.') {
    post_order(tree[node.left]);
  }

  if (node.right !== '.') {
    post_order(tree[node.right]);
  }

  postOrder.push(node.data);
}

function solution(arr) {
  const [testCase, ...nodes] = arr;

  nodes.forEach((n) => {
    const [node, left, right] = n.split(' ');
    tree[node] = new Node(node, left, right);
  });

  pre_order(tree['A']);
  console.log(preOrder.join(''));
  in_order(tree['A']);
  console.log(inOrder.join(''));
  post_order(tree['A']);
  console.log(postOrder.join(''));
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  solution(input);
  process.exit();
});
