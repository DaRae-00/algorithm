const fs = require('fs');
const input = fs.readFileSync('./dev/stdin').toString().split('\n');

let graph = null;
let reverseGraph = null;
let dists = null;
let dropped = null;

function setGraph(params) {
  const g = new Map();
  const r = new Map();

  params.forEach((a) => {
    const [U, V, P] = a.split(' ').map((b) => +b);

    if (!g.get(U)) {
      g.set(U, []);
    }

    if (!r.get(V)) {
      r.set(V, []);
    }

    g.get(U).push([P, V]);
    r.get(V).push([P, U]);
  });

  return { g, r };
}

function dijkstra(start) {
  const q = [[0, start]];
  dists[start] = 0;

  while (q.length > 0) {
    const [dist, node] = q.shift();

    if (dists[node] < dist) continue;

    const nodes = graph.get(node);

    if (!!nodes) {
      nodes.forEach((a) => {
        const [linkedDist, linkedNode] = a;
        const cost = dist + linkedDist;

        if (dists[linkedNode] > cost && !dropped[node][linkedNode]) {
          dists[linkedNode] = cost;
          q.push([cost, linkedNode]);
          q.sort((a, b) => a[0] - b[0]);
        }
      });
    }
  }
}

function BFS(start, end) {
  const q = [end];
  const visited = [];

  while (q.length > 0) {
    const node = q.shift();

    if (node === start) continue;

    const nodes = reverseGraph.get(node);
    if (!!nodes && !visited.includes(node)) {
      visited.push(node);
      nodes.forEach((a) => {
        const [linkedDist, linkedNode] = a;
        const cost = linkedDist + dists[linkedNode];

        if (cost === dists[node]) {
          dropped[linkedNode][node] = true;
          q.push(linkedNode);
        }
      });
    }
  }
}

function solution(input) {
  while (input.length > 0) {
    const [N, M] = input
      .shift()
      .split(' ')
      .map((a) => +a);

    if (N === 0 && M === 0) break;

    const [S, D] = input
      .shift()
      .split(' ')
      .map((a) => +a);

    const params = input.splice(0, M);
    const { g, r } = setGraph(params);
    graph = g;
    reverseGraph = r;
    dists = Array(N).fill(Infinity);
    dropped = Array.from({ length: N }, () => Array(N).fill(false));

    dijkstra(S);
    BFS(S, D);
    dists = Array(N).fill(Infinity);
    dijkstra(S);
    const result = dists[D] === Infinity ? -1 : dists[D];
    console.log(result);
  }
}

solution(input);
