/*
    Problem Statement: 
    Write a function which given an unsorted array of numbers, returns a sorted array
    using the quicksort algorithm.
    Time complexity - O(nlogn)
    Space complexity - O(1)
*/

const swap = function (idx1: number, idx2: number, arr: number[]) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
};

/* 
   Given an array, this function should designate an element as a pivot.
   It should then rearrange elements in the array so that all values less than
   the pivot should be moved to the left and all values greater than the pivot 
   should be moved to the right. The order of the elements to the left and right
   of the pivot does not matter as long as the pivot is in the correct position.
   When complete, return the index of the pivot.
*/
const pivotHelper = function (arr: number[], start: number, end: number) {
  const pivot = arr[start];
  let pivotIndex = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIndex += 1;
      swap(i, pivotIndex, arr);
    }
  }

  swap(start, pivotIndex, arr);
  return pivotIndex;
};

const quickSort = function (
  arr: number[],
  start: number = 0,
  end: number = arr.length - 1
) {
  if (start < end) {
    const pivotIndex = pivotHelper(arr, start, end);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, end);
  }

  return arr;
};

// Test cases
console.log(quickSort([26, 23, 27, 44, 17, 47, 39, 42, 43, 1]));
