const edges = [
  ['A', 'B', 3],
  ['A', 'D', 11],
  ['A', 'C', 5],
  ['B', 'C', 9],
  ['B', 'E', 1],
  ['C', 'D', 13],
  ['C', 'F', 15],
  ['E', 'F', 7],
];

const parent = {
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
  E: 'E',
  F: 'F',
};

function getParent(x) {
  if (parent[x] === x) return x;
  return getParent(parent[x]);
}

function union(x, y) {
  const a = getParent(x);
  const b = getParent(y);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

function find(x, y) {
  const a = getParent(x);
  const b = getParent(y);

  return a === b;
}

function kuruskal() {
  edges.sort((a, b) => a[2] - b[2]);
  console.log(edges);

  let result = 0;

  edges.forEach((a) => {
    console.log('집합 : ', parent);
    const [x, y, cost] = a;
    if (!find(x, y)) {
      union(x, y);
      result += cost;
      console.log(`node ${x}, node ${y} 연결 => 비용 ${cost}`);
    } else {
      console.log(`node ${x}, node ${y} 사이클 발생`);
    }
  });

  return result;
}

console.log(kuruskal());
