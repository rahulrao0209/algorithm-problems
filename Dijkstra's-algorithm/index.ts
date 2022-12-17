/*
    Problem Statement: Implement Dijkstra's shortest path algorithm
*/
type GraphNode = {
  name: string;
  weight: number | string;
};

type AdjacencyList = {
  [prop: string]: GraphNode[];
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
    this.#adjacencyList[vertex].forEach((adjVertex: GraphNode) =>
      this.removeEdge(vertex, adjVertex.name)
    );

    delete this.#adjacencyList[vertex];
  }

  addEdge(vertex1: string, vertex2: string, weight: string | number) {
    if (!(this.#adjacencyList[vertex1] || this.#adjacencyList[vertex2]))
      throw new Error("The vertex provided does not exist!");

    this.#adjacencyList[vertex1].push({ name: vertex2, weight });
    this.#adjacencyList[vertex2].push({ name: vertex1, weight });
  }

  removeEdge(vertex1: string, vertex2: string) {
    if (!(this.#adjacencyList[vertex1] || this.#adjacencyList[vertex2]))
      throw new Error("The vertex provided does not exist!");

    // Remove the edge by removing the connection from both the nodes
    this.#adjacencyList[vertex1] = this.#adjacencyList[vertex1].filter(
      (adjVertex) => adjVertex.name !== vertex2
    );

    this.#adjacencyList[vertex2] = this.#adjacencyList[vertex2].filter(
      (adjVertex) => adjVertex.name !== vertex1
    );
  }

  get graphData() {
    return this.#adjacencyList;
  }
}

// Test cases

// Initialize a graph
const graph = new Graph();

// Add new vertexes/nodes
graph.addVertex("Mumbai");
graph.addVertex("Bangalore");
graph.addVertex("Chennai");
graph.addVertex("Delhi");
graph.addVertex("Kolkata");
console.log(graph.graphData);

// Add edges  between the vertexes/nodes
graph.addEdge("Mumbai", "Delhi", 108);
graph.addEdge("Delhi", "Bangalore", 150);
graph.addEdge("Mumbai", "Bangalore", 42);
console.log(graph.graphData);
