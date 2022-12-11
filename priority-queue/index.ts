/*
    Problem Statement:
    Implement a priority queue using a min binary heap data structure.
*/

class PriorityQueueNode {
  val: number | string;
  priority: number;

  constructor(val: number | string, priority: number) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  #values: PriorityQueueNode[] = [];

  constructor() {
    this.#values = [];
  }

  #swap(idx1: number, idx2: number) {
    [this.#values[idx1], this.#values[idx2]] = [
      this.#values[idx2],
      this.#values[idx1],
    ];
  }

  #bubbleUp(index: number) {
    if (index === 0) return;
    const parentIndex = Math.floor((index - 1) / 2);

    if (this.#values[index].priority < this.#values[parentIndex].priority)
      this.#swap(index, parentIndex);
    else return;

    index = parentIndex;
    this.#bubbleUp(index);
  }

  #bubbleDown(index: number) {
    if (index >= this.#values.length - 1) return;
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = leftChildIndex + 1;
    const parentPriority = this.#values[index]?.priority;
    const leftChildPriority = this.#values[leftChildIndex]?.priority;
    const rightChildPriority = this.#values[rightChildIndex]?.priority;
    const length = this.#values.length - 1;

    // If both the left and right indexes fall out of bounds return
    if (leftChildIndex > length && rightChildIndex > length) return;

    // If the parent priority is lower than both its children return
    if (
      parentPriority < leftChildPriority &&
      rightChildPriority &&
      parentPriority < rightChildPriority
    )
      return;

    // Bubble down
    if (leftChildPriority < rightChildPriority || rightChildIndex > length) {
      this.#swap(index, leftChildIndex);
      this.#bubbleDown(leftChildIndex);
    } else {
      this.#swap(index, rightChildIndex);
      this.#bubbleDown(rightChildIndex);
    }
  }

  enqueue(node: PriorityQueueNode) {
    this.#values.push(node);
    this.#bubbleUp(this.#values.length - 1);
    return this.#values;
  }

  dequeue() {
    if (this.#values.length === 0) return;

    /* 
      Edge case - If there are only two items in the queue/heap we cannot guarantee that 
      they're in the correct order because for a three node heap its correct for a parent
      to have both children either greater than smaller that itself but there is no such 
      condition being enforced between the children/siblings and as such it maybe the case
      that a heap/queue like [2, 1] where 2 would be removed even though the one with lower 
      value needs to be removed first
    */
    if (this.#values.length === 2) {
      const priorityElement1 = this.#values[0].priority;
      const priorityElement2 = this.#values[1].priority;

      let removedNode: PriorityQueueNode;
      if (priorityElement1 < priorityElement2) {
        removedNode = this.#values[0];
        this.#values.splice(0, 1);
      } else {
        removedNode = this.#values[1];
        this.#values.splice(1, 1);
      }

      return removedNode;
    }

    this.#swap(0, this.#values.length - 1);
    const removedNode = this.#values.pop();
    this.#bubbleDown(0);
    return removedNode;
  }

  get queueData() {
    return this.#values.map((node) => `${node.val} ${node.priority}`);
  }
}

// Test cases

// Create a queue instance
const priorityQueue = new PriorityQueue();

// Add queue nodes
priorityQueue.enqueue(new PriorityQueueNode("Sunday", 0));
priorityQueue.enqueue(new PriorityQueueNode("Monday", 1));
priorityQueue.enqueue(new PriorityQueueNode("Tuesday", 2));
priorityQueue.enqueue(new PriorityQueueNode("Wednesday", 3));
priorityQueue.enqueue(new PriorityQueueNode("Thursday", 4));
priorityQueue.enqueue(new PriorityQueueNode("Friday", 5));
priorityQueue.enqueue(new PriorityQueueNode("Saturday", 6));
console.log(priorityQueue.queueData);

// Remove/Extract a node
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.dequeue());
console.log(priorityQueue.queueData);
