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

  insert(val: number | string) {
    this.#values.push(val);
    this.#bubbleUp(this.#values.length - 1);
    return this.#values;
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
