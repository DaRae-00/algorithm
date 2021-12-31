const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

function getDistance(p1, p2) {
  const a = p1[0] - p2[0];
  const b = p1[1] - p2[1];

  return Math.sqrt(a * a + b * b);
}

function getParent(parent, n) {
  if (parent[n] === n) return n;
  return getParent(parent, parent[n]);
}

function union(parent, p1, p2) {
  const a = getParent(parent, p1);
  const b = getParent(parent, p2);

  if (a < b) {
    parent[b] = a;
  } else {
    parent[a] = b;
  }
}

function find(parent, p1, p2) {
  const a = getParent(parent, p1);
  const b = getParent(parent, p2);

  return a === b;
}

function solution(input) {
  const edges = [];
  const parent = {};
  const locations = [];

  const [n, m] = input
    .shift()
    .split(' ')
    .map((a) => +a);
  const params = input.splice(0, n);

  params.forEach((a) => {
    const [x, y] = a.split(' ').map((b) => +b);
    locations.push([x, y]);
  });

  length = locations.length;

  for (let i = 0; i < length - 1; i++) {
    for (let j = i + 1; j < length; j++) {
      edges.push([i + 1, j + 1, getDistance(locations[i], locations[j])]);
    }
  }

  [...Array(n).keys()].forEach((a) => (parent[a + 1] = a + 1));
  [...Array(m).keys()].forEach((a) => {
    const [b, c] = input
      .shift()
      .split(' ')
      .map((d) => +d);
    union(parent, b, c);
  });

  edges.sort((a, b) => a[2] - b[2]);

  let result = 0;

  edges.forEach((a) => {
    const [p1, p2, cost] = a;

    if (!find(parent, p1, p2)) {
      union(parent, p1, p2);
      result += cost;
    }
  });

  console.log(result.toFixed(2));
}

solution(input);
