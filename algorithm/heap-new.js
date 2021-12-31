// 왼쪽 자식 노드 인덱스 = 부모 노드 인덱스 * 2 + 1
// 오른쪽 자식 노드 인덱스 = 부모 노드 인덱스 * 2 + 2
// 부모 노드 인덱스 = (자식 노드 인덱스 - 1) / 2

class Heap {
  constructor() {
    this.heap = [];
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

  size() {
    return this.heap.length;
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

  // 맨 아래 데이터를 삽입 한후, 삽입 된 데이터 값이 더 작다면 트리의 위쪽으로 올린다.
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

  // 맨 아래 데이터를 루트 노드로 끌어올린 후, 데이터 값이 더 크면 트리의 아래쪽으로 내린다.
  heapifyDown() {
    let idx = 0;

    while (true) {
      let left = this.leftChild(idx);
      let right = this.rightChild(idx);
      let parent = this.heap[idx];
      if ((!!left && left < parent) || (!!right && right < parent)) {
        let smallerIdx = this.getLeftChildIdx(idx);

        if (!!right && right < parent) {
          smallerIdx = this.getRightChildIdx(idx);
        }

        this.swap(idx, smallerIdx);
        idx = smallerIdx;
      } else break;
    }
  }
}

const mh = new MinHeap();
mh.insert(9);
mh.insert(8);
mh.insert(6);
mh.insert(3);
mh.insert(2);

console.log(mh.heap);
console.log('get root : ', mh.remove());
console.log(mh.heap);
