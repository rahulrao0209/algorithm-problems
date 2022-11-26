/*
    Problem Statement: 
    Write a merge sort algorithm which given an unsorted array of numbers returns
    a sorted array.
    Time Complexity - O(nlogn)
    Space Complexity - O(n)
*/

/* Merge two sorted arrays using the merge function */
const merge = function (arr1: number[], arr2: number[]) {
  const mergedArray: number[] = [];
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    const element1 = arr1[pointer1];
    const element2 = arr2[pointer2];

    if (element1 < element2) {
      mergedArray.push(element1);
      pointer1++;
    } else {
      mergedArray.push(element2);
      pointer2++;
    }
  }

  if (pointer1 >= arr1.length) {
    return [...mergedArray, ...arr2.slice(pointer2)];
  }

  if (pointer2 >= arr2.length) {
    return [...mergedArray, ...arr1.slice(pointer1)];
  }

  return mergedArray;
};

const mergeSort = function (arr: number[]): number[] {
  // Base case
  if (arr.length === 0 || arr.length === 1) {
    return arr;
  }

  /*
    Split the array into halves and recursively call mergeSort on both
    until we reach the base cases for both halves, post which we can use 
    merge to merge them back.
  */
  const left = mergeSort(arr.slice(0, Math.floor(arr.length / 2)));
  const right = mergeSort(arr.slice(Math.floor(arr.length / 2)));

  return merge(left, right);
};

// Test cases
console.log(mergeSort([24, 16, 32, 81, 100, 9, 10, 7, 2, 1, 3]));
console.log(mergeSort([1, 3, 5, 2, 1, 0]));
