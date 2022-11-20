/*
    Problem:
    Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
    This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
*/

const power = function (base: number, exponent: number): number {
  if (exponent === 0) return 1;

  if (exponent === 1) return base;

  return base * power(base, exponent - 1);
};

// Test cases
console.log(power(2, 0));
console.log(power(2, 1));
console.log(power(2, 3));
console.log(power(2, 4));
console.log(power(5, 5));
