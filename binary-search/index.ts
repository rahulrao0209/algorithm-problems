/*
    Problem:
    Write a function called binary search which accepts a sorted array and a value and returns the index
    at which the value exists. Otherwise return -1

    ex: binarySearch([1, 2, 3, 4, 5], 2) -> 1
 */

const binarySearch = function (arr: number[], value: number) {
  if (arr.length === 0) return -1;

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (arr[middle] === value) return middle;

    if (value < arr[middle]) end = middle - 1;

    if (value > arr[middle]) start = middle + 1;
  }

  return -1;
};

// Test cases
console.log(binarySearch([1, 2, 3, 4, 5], 2));
console.log(binarySearch([1, 2, 3, 4, 5], 3));
console.log(binarySearch([1, 2, 3, 4, 5], 5));
console.log(binarySearch([1, 2, 3, 4, 5], 6));
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
);
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
);
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )
);
