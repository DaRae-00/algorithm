const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Queue {
  constructor() {
    this.data = [];
  }

  get queue() {
    return this.data;
  }

  get length() {
    return this.data.length;
  }

  enqueue(v) {
    this.data.push(v);
  }

  dequeue() {
    if (this.data.length > 0) {
      return this.data.shift();
    } else null;
  }

  find(v) {
    return this.data.includes(v);
  }
}

function BFS(graph, startNode) {
  const visited = new Queue();
  const nodes = new Queue();

  nodes.enqueue(startNode);

  while (nodes.length > 0) {
    const node = nodes.dequeue();

    if (!visited.find(node)) {
      visited.enqueue(node);

      if (!!graph[node]) {
        graph[node].sort((a, b) => a - b).forEach((e) => nodes.enqueue(e));
      }
    }
  }

  return visited.queue;
}

function DFS(graph, startNode) {
  const visited = [];
  const nodes = [];

  nodes.push(startNode);

  while (nodes.length > 0) {
    const node = nodes.pop();

    if (!visited.includes(node)) {
      visited.push(node);

      if (!!graph[node]) {
        graph[node].sort((a, b) => b - a).forEach((e) => nodes.push(e));
      }
    }
  }

  return visited;
}

function solution(arr) {
  const graph = {};
  const [testCase, ...data] = arr;
  const [N, M, V] = testCase.split(' ').map((e) => Number(e));

  data.forEach((e) => {
    const [a, b] = e.split(' ').map((c) => Number(c));

    if (!graph[a]) {
      graph[a] = [];
    }

    if (!graph[b]) {
      graph[b] = [];
    }

    graph[a].push(b);
    graph[b].push(a);
  });

  const dfs = DFS(graph, V);
  const bfs = BFS(graph, V);

  console.log(`${dfs.join(' ')}\n${bfs.join(' ')}`);
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  solution(input);
  process.exit();
});
