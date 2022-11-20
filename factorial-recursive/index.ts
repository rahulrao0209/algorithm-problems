/* 
    Problem: 
    Write a function to calculate the factorial of a number recursively.
*/

const getFactorial = function (num: number): number {
  /* Invalid input */
  if (num < 0) return 1;

  /* Base cases */
  if (num === 0) return 1;
  if (num === 1) return 1;

  return num * getFactorial(num - 1);
};

// Test cases
console.log(getFactorial(3));
console.log(getFactorial(4));
console.log(getFactorial(5));
console.log(getFactorial(6));
console.log(getFactorial(8));
console.log(getFactorial(20));
console.log(getFactorial(1));
console.log(getFactorial(0));
