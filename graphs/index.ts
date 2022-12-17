/*
    Problem Statement: Implement a graph data structure
*/

type AdjacencyList = {
  [prop: string]: any[];
};

class Graph {
  #adjacencyList: AdjacencyList;

  constructor() {
    this.#adjacencyList = {};
  }

  addVertex(vertex: string) {
    if (!this.#adjacencyList[vertex]) this.#adjacencyList[vertex] = [];
  }

  removeVertex(vertex: string) {
    if (!this.#adjacencyList[vertex])
      throw new Error("The vertex provided does not exist!");

    // Remove all the references/edges to the vertex from other vertices
    this.#adjacencyList[vertex].forEach((adjacentVertex: string) =>
      this.removeEdge(vertex, adjacentVertex)
    );

    delete this.#adjacencyList[vertex];
  }

  addEdge(vertex1: string, vertex2: string) {
    if (!(this.#adjacencyList[vertex1] || this.#adjacencyList[vertex2]))
      throw new Error("The vertex provided does not exist!");

    this.#adjacencyList[vertex1].push(vertex2);
    this.#adjacencyList[vertex2].push(vertex1);
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (!(this.#adjacencyList[vertex1] || this.#adjacencyList[vertex2]))
      throw new Error("The vertex provided does not exist!");

    // Find the indexes of the vertices to which the edge should be removed
    const vertex1Idx = this.#adjacencyList[vertex2].indexOf(vertex1);
    const vertex2Idx = this.#adjacencyList[vertex1].indexOf(vertex2);

    // Remove the edges
    this.#adjacencyList[vertex1].splice(vertex2Idx, 1);
    this.#adjacencyList[vertex2].splice(vertex1Idx, 1);
  }

  dfsRecursive(vertex: string) {
    if (!this.#adjacencyList[vertex])
      throw new Error("The vertex provided does not exist!");

    const result: string[] = [];
    const visitedVertexes: { [prop: string]: boolean } = {};

    const dfsHelper = (vertex: string) => {
      result.push(vertex);
      visitedVertexes[vertex] = true;

      this.#adjacencyList[vertex].forEach((adjacentVertex) => {
        if (!visitedVertexes[adjacentVertex]) dfsHelper(adjacentVertex);
      });
    };

    dfsHelper(vertex);
    return result;
  }

  dfsIterative(vertex: string) {
    if (!this.#adjacencyList[vertex])
      throw new Error("The vertex provided does not exist!");

    const result: string[] = [];
    const visitedVertexes: { [prop: string]: boolean } = {};
    const stack: string[] = [vertex];
    let currentVertex: string | undefined;

    while (stack.length) {
      currentVertex = stack.pop();
      if (currentVertex && !visitedVertexes[currentVertex]) {
        visitedVertexes[currentVertex] = true;
        result.push(currentVertex);

        currentVertex &&
          this.#adjacencyList[currentVertex].forEach((adjacentVertex) => {
            stack.push(adjacentVertex);
          });
      }
    }

    return result;
  }

  get graphData() {
    return this.#adjacencyList;
  }
}

// Test cases
const cityGraph = new Graph();

// Add vertices/nodes
cityGraph.addVertex("Mumbai");
cityGraph.addVertex("Delhi");
cityGraph.addVertex("Chennai");
cityGraph.addVertex("Lucknow");
console.log(cityGraph.graphData);

// Add edges/connections
cityGraph.addEdge("Mumbai", "Delhi");
cityGraph.addEdge("Mumbai", "Chennai");
cityGraph.addEdge("Delhi", "Lucknow");
console.log(cityGraph.graphData);

// DFS Recursive
console.log(cityGraph.dfsRecursive("Mumbai"));

// Remove an edge
cityGraph.removeEdge("Mumbai", "Delhi");
console.log(cityGraph.graphData);

// Remove a vertex
cityGraph.removeVertex("Mumbai");
console.log(cityGraph.graphData);

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log("DFS Recursive: ", graph.dfsRecursive("A"));
console.log("DFS Iterative: ", graph.dfsIterative("A"));
