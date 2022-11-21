/*
  Problem: 
  Write a function called someRecursive which accepts an array and a callback. The function returns true
  if a single value in the array returns true when passed to the callback. Otherwise it returns false.
*/

const isOdd = function (value: number) {
  return value % 2 !== 0;
};

const someRecursive = function (
  arr: number[],
  fn: (value: number) => boolean
): boolean {
  // Base case
  if (arr.length === 0) return false;

  if (fn(arr[0])) return true;

  return someRecursive(arr.slice(1), fn);
};

// Test cases
console.log(someRecursive([1, 2, 3, 4], isOdd));
console.log(someRecursive([4, 6, 8, 9], isOdd));
console.log(someRecursive([4, 6, 8], isOdd));
console.log(someRecursive([4, 6, 8], (val) => val > 10));
