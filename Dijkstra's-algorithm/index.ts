/*
    Problem Statement: Implement Dijkstra's shortest path algorithm
*/
import { PriorityQueue, PriorityQueueNode } from "./priorityQueue";

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

  // Find the shortest path using dijkstra's algorithm
  shortestPath(start: string, end: string) {
    const priorityQueue = new PriorityQueue();
    const distances: { [prop: string]: number } = {};
    const previous: { [prop: string]: string | null } = {};
    let smallest: string;

    // build up the initial state
    for (let vertex in this.#adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        priorityQueue.enqueue(new PriorityQueueNode(vertex, 0));
      } else {
        distances[vertex] = Infinity;
        priorityQueue.enqueue(new PriorityQueueNode(vertex, Infinity));
      }

      previous[vertex] = null;
    }

    // Run as long as there is something to visit
    while (priorityQueue.queueData.length) {
      smallest = "" + priorityQueue.dequeue()?.val;
      const shortestPath: string[] = [];

      if (smallest === end) {
        // Build up the path to return at the end
        while (previous[smallest]) {
          shortestPath.push(smallest);
          // @ts-ignore
          smallest = previous[smallest];
        }
        return shortestPath.concat(smallest).reverse();
      }

      if (smallest && distances[smallest] !== Infinity) {
        this.#adjacencyList[smallest].forEach((adjacentVertex) => {
          if (!smallest) return;

          // Calculate new distance to adjacent vertex
          const candidate = distances[smallest] + +adjacentVertex.weight;
          if (candidate < distances[adjacentVertex.name]) {
            // Updating new smallest distance to adjacent vertex
            distances[adjacentVertex.name] = candidate;
            // Updating previous object - Which tells us how we got to the adjacent vertex
            previous[adjacentVertex.name] = smallest;
            // Enqueue in priority queue with new priority
            priorityQueue.enqueue(
              new PriorityQueueNode(adjacentVertex.name, candidate)
            );
          }
        });
      }
    }
  }

  get graphData() {
    return this.#adjacencyList;
  }
}

// Test cases

// Initialize a graph
const graph = new Graph();

// Add new vertexes/nodes
// graph.addVertex("Mumbai");
// graph.addVertex("Bangalore");
// graph.addVertex("Chennai");
// graph.addVertex("Delhi");
// graph.addVertex("Kolkata");
// console.log(graph.graphData);

// // Add edges  between the vertexes/nodes
// graph.addEdge("Mumbai", "Delhi", 108);
// graph.addEdge("Delhi", "Bangalore", 150);
// graph.addEdge("Mumbai", "Bangalore", 42);

// console.log(graph.graphData);

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log("Shortest Path: ", graph.shortestPath("A", "E"));
