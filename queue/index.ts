/*
    Problem Statement: 
    Implement a queue data structure using a singly linked list data structure.
    Note: Queues can also be implemented using the standard JavaScript array data structure using
    a combination of push/shift or unshift/pop methods however this technique is not as efficient as 
    creating your own class because shift and unshift methods need the whole array to re-indexed.
*/

class QueueNode {
  val: string | number;
  next: QueueNode | null;

  constructor(val: number | string) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  first: QueueNode | null;
  last: QueueNode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /* Add an item to the queue */
  enqueue(val: number | string) {
    const newNode = new QueueNode(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      const lastNode = this.last;
      lastNode!.next = newNode;
      this.last = newNode;
    }

    this.size += 1;
    return this.size;
  }

  /* Remove an item from the queue */
  dequeue() {
    if (!this.first) return null;

    const removedNode = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = this.first;
    } else {
      const nextNode = this.first.next;
      this.first = nextNode;
    }

    this.size -= 1;
    return removedNode.val;
  }

  /* Print all the values of items in the queue */
  print() {
    let result = "";
    if (!this.first) return result;

    let currentNode: QueueNode | null = this.first;
    while (currentNode) {
      result += `${currentNode.val} `;
      currentNode = currentNode.next;
    }

    return result;
  }
}

/* Test cases */
const queue = new Queue();

console.log(queue.enqueue("Netlify"));
console.log(queue.enqueue("Youtube"));
console.log(queue.enqueue("Smashing-Magzine"));

console.log(queue.print());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.print());
