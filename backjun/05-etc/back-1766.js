const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Heap {
  constructor() {
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  }

  getPIdx(i) {
    return Math.floor((i - 1) / 2);
  }

  getLCIdx(i) {
    return i * 2 + 1;
  }

  getRCIdx(i) {
    return i * 2 + 2;
  }

  p(i) {
    return this.heap[this.getPIdx(i)];
  }

  lC(i) {
    return this.heap[this.getLCIdx(i)];
  }

  rC(i) {
    return this.heap[this.getRCIdx(i)];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

class MinHeap extends Heap {
  insert(v) {
    this.heap.push(v);
    this.heapifyUp();
  }

  heapifyUp() {
    let idx = this.heap.length - 1;

    while (true) {
      let parent = this.p(idx);

      if (!!parent && parent > this.heap[idx]) {
        this.swap(this.getPIdx(idx), idx);
        idx = this.getPIdx(idx);
      } else break;
    }
  }

  remove() {
    const v = this.heap[0];
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.heapifyDown();
    return v;
  }

  heapifyDown() {
    let idx = 0;

    while (true) {
      let leftChild = this.lC(idx);
      let rightChild = this.rC(idx);
      let curr = this.heap[idx];

      if (
        (!!leftChild && leftChild < curr) ||
        (!!rightChild && rightChild < curr)
      ) {
        let smaller = this.getLCIdx(idx);

        if (!!rightChild && rightChild < curr && leftChild > rightChild) {
          smaller = this.getRCIdx(idx);
        }

        this.swap(idx, smaller);
        idx = smaller;
      } else break;
    }
  }
}

function solution(arr) {
  const [testCase, ...data] = arr;
  const [N, M] = testCase.split(' ').map((e) => Number(e));
  const result = [];

  const indegree = new Array(N + 1).fill(0);
  const graph = {};

  // 초기화
  [...Array(N).keys()].forEach((n) => {
    graph[n + 1] = [];
  });

  // 더 쉼게 풀 수 있는 문제 추가
  data.forEach((d) => {
    let [A, B] = d.split(' ').map((e) => Number(e));
    graph[A].push(B);
    indegree[B] += 1;
  });

  const h = new MinHeap();

  for (let i = 1; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      h.insert(i);
    }
  }

  while (h.size > 0) {
    let curr = h.remove();
    result.push(curr);

    graph[curr].forEach((e) => {
      indegree[e] -= 1;
      if (indegree[e] === 0) {
        h.insert(e);
      }
    });
  }

  console.log(result.join(' '));
}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  solution(input);
  process.exit();
});
