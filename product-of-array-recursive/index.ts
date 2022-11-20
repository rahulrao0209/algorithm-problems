/*
    Problem:
    Write a recursive function called productOfArray which takes in an array of numbers,
    and returns a product of them all.
*/

const productOfArray = function (arr: number[]): number {
  if (arr.length === 0) return 1;

  return arr[0] * productOfArray(arr.slice(1));
};

// Test cases
console.log(productOfArray([1, 2, 3]));
console.log(productOfArray([1, 2, 3, 10]));
