function DFS(graph, startNode) {
  let visited = [];
  let nodes = [];

  nodes.push(startNode);

  while (nodes.length > 0) {
    const node = nodes.pop();

    if (!visited.includes(node)) {
      visited.push(node);
      if (graph[node]) {
        graph[node].forEach((e) => nodes.push(e));
      }
    }
  }

  return visited;
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

console.log(DFS(graph, 'A'));
