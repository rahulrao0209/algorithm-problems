/*
    Problem:
    Write a function called selectionSort which takes an array and returns
    a an array sorted in ascending order.
*/

const swap = function (idx1: number, idx2: number, arr: number[]) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

const selectionSort = function (arr: number[]) {
  if (arr.length === 0) return arr;

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== 1) swap(min, i, arr);
  }
  return arr;
};

// Test cases
console.log(selectionSort([1, 3, 10, 2, 11, 7, 8, 4, 0]));
console.log(selectionSort([5, 7, 1, 2, 11, 21, 8, 10, 3, 100]));
console.log(selectionSort([29, 31, 16, 11, 8, 4, 3, 0]));
