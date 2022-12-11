/*
    Problem Statement:
    Implement a max binary heap.
*/

class MaxBinaryHeap {
  #values = Array();

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
    let parentIndex = Math.floor((index - 1) / 2);

    if (this.#values[index] > this.#values[parentIndex])
      this.#swap(index, parentIndex);
    else return;

    index = parentIndex;
    this.#bubbleUp(index);
  }

  #bubbleDown(index: number) {
    if (index >= this.#values.length - 1) return;
    const leftChildIndex = 2 * index + 1;
    const rightChildIndex = leftChildIndex + 1;

    const parentValue = this.#values[index];
    const leftChildValue = this.#values[leftChildIndex];
    const rightChildValue = this.#values[rightChildIndex];

    // If both the child indexes are out of bounds return
    if (
      leftChildIndex >= this.#values.length &&
      rightChildIndex >= this.#values.length
    )
      return;

    // If the parent is larger than both the children return
    if (parentValue > leftChildValue && parentValue > rightChildValue) return;

    // Bubble down
    if (
      leftChildValue > rightChildValue ||
      rightChildIndex >= this.#values.length
    ) {
      this.#swap(leftChildIndex, index);
      this.#bubbleDown(leftChildIndex);
    } else {
      this.#swap(rightChildIndex, index);
      this.#bubbleDown(rightChildIndex);
    }
  }

  insert(val: number) {
    this.#values.push(val);
    this.#bubbleUp(this.#values.length - 1);
    return this.#values;
  }

  extractMax() {
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
      const priorityElement1 = this.#values[0];
      const priorityElement2 = this.#values[1];
      let extractedValue: number;
      if (priorityElement1 > priorityElement2) {
        extractedValue = this.#values[0];
        this.#values.splice(0, 1);
      } else {
        extractedValue = this.#values[1];
        this.#values.splice(1, 1);
      }

      return extractedValue;
    }

    this.#swap(0, this.#values.length - 1);
    const extractedValue = this.#values.pop();
    this.#bubbleDown(0);
    return extractedValue;
  }

  get heapData() {
    return this.#values;
  }
}

const maxBinaryHeap = new MaxBinaryHeap();

console.log(maxBinaryHeap.insert(0));
console.log(maxBinaryHeap.insert(1));
console.log(maxBinaryHeap.insert(2));
console.log(maxBinaryHeap.insert(3));
console.log(maxBinaryHeap.insert(4));
console.log(maxBinaryHeap.insert(5));
console.log(maxBinaryHeap.insert(6));
console.log(maxBinaryHeap.insert(7));

console.log(maxBinaryHeap.heapData);

console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.extractMax());

console.log(maxBinaryHeap.heapData);
