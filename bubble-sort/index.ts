/*
  Problem:
  Write a function called bubbleSort which takes an array of 
  numbers and then returns the array in sorted ascending order.
  [1, 3, 10, 2, 11, 7, 8, 4, 0]
*/

const swap = function (idx1: number, idx2: number, arr: number[]) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

// Unoptimzed version
const bubbleSort = function (arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }

  return arr;
};

/* 
   Here we're subtracting the value of i from the number of
   iterations required by the inner loop because the last element of
   the array after each pass will already be sorted or in other words
   will already be in the correct position and hence does not need to
   be compared.
*/
const bubbleSortOptimized = function (arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
      }
    }
  }

  return arr;
};

/* 
  This function another optimization to bubble sort which
  can greatly improve the efficiency of the algorithm especially
  in cases where we have an almost sorted array. The idea here is
  to track for every iteration of the outerloop for any swaps.
  If there are no swaps in any given iteration, it means that
  the array is fully sorted and there is no need to check further!
*/
const bubbleSortOptimized2 = function (arr: number[]) {
  for (let i = 0; i < arr.length; i++) {
    let noSwaps = true;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1, arr);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }

  return arr;
};
// Test cases
console.log(bubbleSort([1, 3, 10, 2, 11, 7, 8, 4, 0]));
console.log(bubbleSortOptimized([1, 3, 10, 2, 11, 7, 8, 4, 0]));
console.log(bubbleSortOptimized2([1, 3, 10, 2, 11, 7, 8, 4, 0]));
