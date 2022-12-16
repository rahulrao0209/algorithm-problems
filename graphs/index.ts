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
cityGraph.addEdge("Delhi", "Lucknow");
console.log(cityGraph.graphData);

// Remove an edge
cityGraph.removeEdge("Mumbai", "Delhi");
console.log(cityGraph.graphData);

// Remove a vertex
cityGraph.removeVertex("Mumbai");
console.log(cityGraph.graphData);
