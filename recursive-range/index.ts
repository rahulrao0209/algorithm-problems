/*
    Problem:
    Write a recursive function called recursiveRange which accepts a number and adds up all the numbers from 0
    to the number passed to the function.
*/

const recursiveRange = function (num: number): number {
  // Base cases
  if (num === 0) return 0;

  if (num === 1) return 1;

  return num + recursiveRange(num - 1);
};

// Test cases
console.log(recursiveRange(3));
console.log(recursiveRange(6));
console.log(recursiveRange(10));
