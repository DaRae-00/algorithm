const readline = require('readline');
const process = require('process');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let graph = {};

class Queue {
  constructor() {
    this._data = {};
    this._size = 0;
    this._front = 0;
    this._last = 0;
  }

  get length() {
    return this._size;
  }

  enqueue(v) {
    this._data[this._last] = v;
    ++this._last;
    ++this._size;
  }

  dequeue() {
    const data = this._data[this._front];
    ++this._front;
    --this._size;
    return data;
  }

  find(v) {
    for (let key in this._data) {
      if (this._data[key] === v) {
        return v;
      }
    }

    return null;
  }
}

function BFS(startNode, endNode, N, C) {
  const nodes = new Queue();
  const visited = new Array(N + 1).fill(false);
  nodes.enqueue(startNode);
  visited[startNode] = true;

  while (nodes.length > 0) {
    const node = nodes.dequeue();

    if (graph[node].length > 0) {
      graph[node].forEach((e) => {
        const [b, c] = e;

        // 건너갈 수 있으면 확인
        if (!visited[b] && c >= C) {
          visited[b] = true;
          nodes.enqueue(b);
        }
      });
    }
  }

  return visited[endNode];
}

function solution(arr) {
  const [testCase, ...data] = arr;
  const [N, M] = testCase.split(' ').map((e) => Number(e));
  const island = data.pop();
  const [A, B] = island.split(' ').map((e) => Number(e));
  let min = 1000000000;
  let max = 0;
  let result = 0;

  data.forEach((e) => {
    const [a, b, c] = e.split(' ').map((e) => Number(e));

    if (!graph[a]) {
      graph[a] = [];
    }

    if (!graph[b]) {
      graph[b] = [];
    }

    graph[a].push([b, c]);
    graph[b].push([a, c]);

    min = Math.min(min, c);
    max = Math.max(max, c);
  });

  while (max >= min) {
    const mid = Math.floor((max + min) / 2);
    const check = BFS(A, B, N, mid);

    if (check) {
      result = mid;
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }

  return result;
}

const input = [];
rl.on('line', (l) => {
  input.push(l.trimRight());
}).on('close', () => {
  console.log(solution(input));
  process.exit();
});
