const input = require('fs')
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ');

class Queue {
  constructor() {
    this.data = {};
    this.length = 0;
    this.first = 0;
    this.last = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(v) {
    this.data[this.last] = v;
    ++this.last;
    ++this.length;
  }

  dequeue() {
    const v = this.data[this.first];
    delete this.data[this.first];
    ++this.first;
    --this.length;
    return v;
  }
}

function solution(arr) {
  const [N, K] = arr.map((e) => Number(e));

  const visited = {};
  const nodes = new Queue();

  nodes.enqueue(N);
  visited[N] = 0;

  while (nodes.size > 0) {
    const node = nodes.dequeue();

    if (node === K) {
      return visited[node];
    }

    [node - 1, node + 1, node * 2].forEach((e) => {
      if (!visited[e] && e <= 100000 && e >= 0) {
        visited[e] = visited[node] + 1;
        nodes.enqueue(e);
      }
    });
  }
}

console.log(solution(input));
