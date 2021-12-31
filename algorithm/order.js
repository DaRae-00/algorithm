const tree = {};

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function pre_order(node) {
  console.log(node.data);

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

  console.log(node.data);

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

  console.log(node.data);
}

const nodes = ['A B C', 'B D .', 'C E F', 'E . .', 'F . G', 'D . .', 'G . .'];

nodes.forEach((n) => {
  const [node, left, right] = n.split(' ');
  tree[node] = new Node(node, left, right);
});

console.log(tree);

pre_order(tree['A']);
console.log('_______________________________');
in_order(tree['A']);
console.log('_______________________________');
post_order(tree['A']);
