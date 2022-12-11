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

  insert(val: number | string) {
    this.#values.push(val);
    this.#bubbleUp(this.#values.length - 1);
    return this.#values;
  }

  extractMax() {
    if (this.#values.length === 0) return;
    this.#swap(0, this.#values.length - 1);
    const extractedValue = this.#values.pop();
    this.#bubbleDown(0);
    return extractedValue;
  }
}

const maxBinaryHeap = new MaxBinaryHeap();

console.log(maxBinaryHeap.insert(41));
console.log(maxBinaryHeap.insert(39));
console.log(maxBinaryHeap.insert(33));
console.log(maxBinaryHeap.insert(18));
console.log(maxBinaryHeap.insert(27));
console.log(maxBinaryHeap.insert(12));
console.log(maxBinaryHeap.insert(55));
console.log(maxBinaryHeap.extractMax());
console.log(maxBinaryHeap.insert(100));
