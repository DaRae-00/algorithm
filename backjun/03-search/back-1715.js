const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Heap {
  constructor() {
    this.heap = [];
  }

  get h() {
    return this.heap;
  }

  get size() {
    return this.heap.length;
  }

  getLeftChildIdx(parentIdx) {
    return parentIdx * 2 + 1;
  }

  getRightChildIdx(parentIdx) {
    return parentIdx * 2 + 2;
  }

  getParentIdx(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
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
}

class MinHeap extends Heap {
  insert(v) {
    this.heap.push(v);
    this.heapifyUp();
  }

  remove() {
    const value = this.heap[0];
    this.swap(0, this.heap.length - 1);
    this.heap.pop();
    this.heapifyDown();

    return value;
  }

  heapifyUp() {
    let idx = this.heap.length - 1;

    while (true) {
      let parent = this.parent(idx);

      if (!!parent && parent > this.heap[idx]) {
        let parentIdx = this.getParentIdx(idx);
        this.swap(idx, parentIdx);
        idx = parentIdx;
      } else break;
    }
  }

  heapifyDown() {
    let idx = 0;

    while (true) {
      let left = this.leftChild(idx);
      let right = this.rightChild(idx);
      let parent = this.heap[idx];

      if ((!!left && left < parent) || (!!right && right < parent)) {
        let smallerIdx = this.getLeftChildIdx(idx);

        if (!!right && right < parent && right < left) {
          smallerIdx = this.getRightChildIdx(idx);
        }

        this.swap(idx, smallerIdx);
        idx = smallerIdx;
      } else break;
    }
  }
}

function solution(arr) {
  const [testCase, ...data] = arr;

  const H = new MinHeap();
  data.forEach((e) => {
    H.insert(e);
  });

  let result = 0;

  while (H.size > 1) {
    let one = H.remove();
    let two = H.remove();
    let sum = one + two;
    result += sum;

    H.insert(sum);
  }

  console.log(result);
}

const input = [];
rl.on('line', function (line) {
  input.push(Number(line.trimRight()));
}).on('close', function () {
  solution(input);
  process.exit();
});
