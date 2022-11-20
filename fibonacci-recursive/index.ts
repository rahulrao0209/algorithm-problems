/*
    Problem:
    Write a recursive function called fib which accepts a number and returns nth number in the fibonacci sequence. Recall
    that the fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8... which starts with 1 and 1, and every
    number thereafter equals to the sum of the previous two numbers

    ex: fib(4) -> 3
*/

const fib = function (num: number): number {
  if (num === 1 || num === 2) return 1;

  return fib(num - 1) + fib(num - 2);
};

// Test cases
console.log(fib(3));
console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
