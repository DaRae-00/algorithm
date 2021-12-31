class UndirectGraph {
  _edges = {};

  get edges() {
    return this._edges;
  }

  addVertex(vertex) {
    this._edges[vertex] = {};
  }

  addEdge(vertex1, vertex2, weight) {
    this._edges[vertex1][vertex2] = weight;
    this._edges[vertex2][vertex1] = weight;
  }
}

class DirectGraph {
  _edges = {};

  get edges() {
    return this._edges;
  }

  addVertex(vertex) {
    this._edges[vertex] = {};
  }

  // 방향성을 나타내기 위해 출바라는 정점에만 간선 및 가중치를 준다
  addEdge(fromVertex, toVertex, weight) {
    this._edges[fromVertex][toVertex] = weight;
  }
}

const graph = new UndirectGraph();

graph.addVertex(1);
graph.addVertex(2);
graph.addEdge(1, 2, 1);
console.log(graph.edges);

const graph2 = new DirectGraph();

graph2.addVertex('A');
graph2.addVertex('B');
graph2.addVertex('C');
graph2.addEdge('A', 'B', 2);
graph2.addEdge('B', 'C', 1);
graph2.addEdge('C', 'A', 4);
console.log(graph2.edges);
