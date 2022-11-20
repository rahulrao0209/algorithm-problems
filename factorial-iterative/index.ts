/*
    Problem:
    Write a function to calculate a factorial value iteratively.
*/

const getFactorial = function (num: number) {
  if (num < 0) return 1;
  
  if (num === 0) return 1;

  if (num === 1) return 1;

  let factorial: number = 1;
  for (let i = num; i > 1; i--) {
    factorial *= i;
  }

  return factorial;
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
