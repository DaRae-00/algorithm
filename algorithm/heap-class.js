const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Heap {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length;
  }

  print() {
    console.log(this.heap);
  }

  push(value) {
    let idx,
      parent = 0;

    this.heap.push(value);
    idx = this.heap.length - 1;
    parent = Math.floor((idx - 1) / 2);

    while (this.heap[parent] > value) {
      this.swap(idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }

    return this.print();
  }

  // 힙의 pop은 루트요소를 제거하고 맨 끝 요소를 위로 올림
  pop() {
    let idx = 0,
      value = 0,
      lastIdx = this.heap.length - 1;
    value = this.heap.pop();
  }
}

function solution(arr) {
  const heap = new Heap();
  arr.map((a) => {
    heap.push(a);
  });
}

const input = [];

rl.on('line', function (line) {
  input.push(line.trimRight());
}).on('close', function () {
  const arr = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
  solution(arr);
});
