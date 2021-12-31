let fs = require('fs');
let input = fs.readFileSync('./dev/stdin').toString().split('\n');

const [caseCount, ...etc] = input;
const data = etc.reverse();

for (let i = 0; i < parseInt(caseCount); i++) {
  const [n, d, start] = data
    .pop()
    .split(' ')
    .map((e) => +e);

  const map = setGraph(data.splice(-d));
  const distance = new Array(n + 1).fill(Infinity);
  dijkstra(map, distance, start);

  const virus = distance.filter((e) => e != Infinity);
  console.log(virus.length, Math.max(...virus));
}

function setGraph(inputs) {
  const graph = new Map();

  inputs.forEach((e) => {
    const [nodeEnd, nodeStart, dist] = e.split(' ').map((e) => +e);

    if (!graph.get(nodeStart)) {
      graph.set(nodeStart, []);
    }

    graph.get(nodeStart).push([nodeEnd, dist]);
  });

  return graph;
}

function dijkstra(map, distances, start) {
  const q = [[0, start]];
  q.sort((a, b) => a[0][0] - b[0][0]);
  distances[start] = 0;

  while (q.length > 0) {
    const [dist, node] = q.shift();

    if (distances[node] < dist) continue;

    const nodes = map.get(node);
    nodes?.forEach((e) => {
      const cost = dist + e[1];

      if (distances[e[0]] > cost) {
        distances[e[0]] = cost;
        q.push([cost, e[0]]);
      }
    });
  }
}
