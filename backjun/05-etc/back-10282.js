const fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [testCase, ...params] = input;
const data = params.reverse();

function setGraph(arr) {
  const g = new Map();

  arr.forEach((a) => {
    const [x, y, dist] = a.split(' ').map((b) => +b);
    if (!g.get(y)) {
      g.set(y, []);
    }

    g.get(y).push([dist, x]);
  });

  return g;
}

function dijkstra(graph, dists, start) {
  const q = [[0, start]];
  dists[start] = 0;

  while (q.length > 0) {
    const [dist, node] = q.shift();
    const currDist = dists[node];

    if (currDist < dist) continue;

    const linkedNodes = graph.get(node);
    if (!!linkedNodes) {
      linkedNodes.forEach((a) => {
        const [linkedDist, linkedNode] = a;
        const sumDist = dist + linkedDist;

        if (dists[linkedNode] > sumDist) {
          dists[linkedNode] = sumDist;
          q.push([sumDist, linkedNode]);
        }
      });

      //q.sort((a, b) => a[0] - b[0]);
    }
  }
}

for (let i = 0; i < parseInt(testCase); i++) {
  const [n, d, c] = data
    .pop()
    .split(' ')
    .map((a) => +a);

  const dists = new Array(n + 1).fill(Infinity);
  const graph = setGraph(data.splice(-d));
  dijkstra(graph, dists, c);

  const virus = dists.filter((a) => a !== Infinity);
  console.log(virus.length, Math.max(...virus));
}
