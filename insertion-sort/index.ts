/*
  Problem:
  Write a function called insertionSort which takes in an unsorted array of numbers
  and returns a sorted array.
*/

const insertionSort = function (arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    for (j; j >= 0 && arr[j] > current; j--) {
      if (current < arr[j]) arr[j + 1] = arr[j];
    }
    arr[j + 1] = current;
  }
  return arr;
};

// Test cases
console.log(insertionSort([1, 3, 10, 2, 11, 7, 8, 4, 6]));
console.log(insertionSort([1, 3, 10, 2, 11, 7, 8, 4, 0]));
console.log(insertionSort([1, 3, 10, 2, 11, 7, 8, 4, 0]));
