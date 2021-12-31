const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Heap {
  constructor() {
    this.heap = [];
  }

  getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }

  getLeftChildIdx(idx) {
    return idx * 2 + 1;
  }

  getRightChildIdx(idx) {
    return idx * 2 + 2;
  }

  parent(idx) {
    return this.heap[this.getParentIdx(idx)];
  }

  leftChild(idx) {
    return this.heap[this.getLeftChildIdx(idx)];
  }

  rightChild(idx) {
    return this.heap[this.getRightChildIdx(idx)];
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

class MinHeap extends Heap {
  insert(data) {
    this.heap.push(data);
    this.heapifyUp();
  }

  heapifyUp() {
    let idx = this.heap.length - 1;

    while (true) {
      let P = this.parent(idx);

      if (!!P && P > this.heap[idx]) {
        let pIdx = this.getParentIdx(idx);
        this.swap(pIdx, idx);
        idx = pIdx;
      } else break;
    }
  }

  remove() {
    const value = this.heap[0];
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.heapifyDown();
    return value;
  }

  heapifyDown() {
    let idx = 0;

    while (true) {
      let leftC = this.leftChild(idx);
      let rigthC = this.rightChild(idx);
      let curr = this.heap[idx];

      if ((!!leftC && leftC < curr) || (!!rigthC && rigthC < curr)) {
        let smaller = this.getLeftChildIdx(idx);

        if (!!rigthC && rigthC < curr) {
          smaller = this.getRightChildIdx(idx);
        }

        this.swap(idx, smaller);

        idx = smaller;
      } else break;
    }
  }
}

function solution(arr) {}

const input = [];
rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  solution(input);
  process.exit();
});
