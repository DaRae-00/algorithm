class Queue {
  constructor() {
    this._data = {};
    this._size = 0;
    this._first = 0;
    this._last = 0;
  }

  get length() {
    return this._size;
  }

  enqueue(v) {
    this._data[this._last] = v;
    this._last += 1;
    this._size += 1;
  }

  dequeue() {
    const value = this._data[this._first];
    this._first += 1;
    this._size -= 1;
    return value;
  }

  find(v) {
    for (let key in this._data) {
      if (this._data[key] == v) {
        return v;
      }
    }
    return null;
  }
}

function BFS(graph, startNode) {
  let visited = new Queue();
  let nodes = new Queue();

  nodes.enqueue(startNode);

  while (nodes.length > 0) {
    let node = nodes.dequeue();

    if (!visited.find(node)) {
      visited.enqueue(node);
      if (graph[node]?.length > 0) {
        graph[node].forEach((e) => nodes.enqueue(e));
      }
    }
  }

  while (visited.length > 0) {
    console.log(visited.dequeue());
  }
}

const graph = {
  A: ['B', 'C'],
  B: ['A', 'D'],
  C: ['A', 'G', 'H', 'I'],
  D: ['B', 'E', 'F'],
  E: ['D'],
  F: ['D'],
  G: ['C'],
  H: ['C'],
  I: ['C', 'J'],
  J: ['I'],
};

BFS(graph, 'A');
