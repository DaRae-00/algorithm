class Queue {
  constructor() {
    this._data = {};
    this._size = 0;
    this._front = 0;
    this._last = 0;
  }

  get size() {
    return this._size;
  }

  get data() {
    return Object.values(this._data);
  }

  enqueue(v) {
    this._data[this._last] = v;
    ++this._last;
    ++this._size;
  }

  dequeue() {
    if (this._size > 0) {
      const v = this._data[this._front];
      ++this._front;
      --this._size;
      return v;
    } else {
      return null;
    }
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

// 노드의 갯수
const v = 7;
// 간선의 갯수
const e = 8;
// 각 노드의 진입차수(0번 인덱스는 제외)
const indegree = [null, 0, 1, 1, 2, 1, 2, 1];
// 그래프
const graph = {
  1: [2, 5],
  2: [3, 6],
  3: [4],
  4: [7],
  5: [6],
  6: [4],
  7: [],
};

function topologySort() {
  // 알고리즘 수행 결과
  const result = [];
  const Q = new Queue();

  // 진입차수가 0인 노드를 찾아 큐에 넣어준다.
  indegree.forEach((e, i) => {
    if (e === 0) {
      Q.enqueue(i);
    }
  });

  while (Q.size > 0) {
    let curr = Q.dequeue();
    result.push(curr);
    graph[curr].forEach((e) => {
      // 해당 노드와 연결된 노드들의 진입차수 1씩 빼기.
      indegree[e] -= 1;
      // 새롭게 진입차수가 0이된 노드를 큐에 넣어준다.
      if (indegree[e] === 0) {
        Q.enqueue(e);
      }
    });
  }

  if (result.length === 7) {
    console.log(result.join(' -> '));
  } else {
    console.log('해당 그래프는 사이클이 있으므로 위상정렬을 할 수 없습니다.');
  }
}

topologySort();
