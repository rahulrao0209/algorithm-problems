/*
    Problem statement:
    Given an unsorted array of integers, write a function that takes the array
    as a parameter and returns a sorted array using the radix sort algorithm
    Time complexity - O(nk) -> where n is number of numbers to sort and k is the word-size(number of digits) in the largest number
    Space complexity - O(n + k)
*/

/* Radix sort helper methods */

/* 
    Given a number and a position as inputs, return 
    the digit at the given position else return 0;
*/
const getDigit = function (num: number, position: number) {
  return (Math.floor(Math.abs(num) / Math.pow(10, position)) % 10) + 1;
};

/* Given a number as input, get the number of digits in that number */
const digitCount = function (num: number) {
  if (num === 0) return 1;
  return Math.floor(Math.abs(Math.log10(num))) + 1;
};

/* 
    Given an array of numbers returns the number having the max number of digits
    using the digitCount function 
*/
const getMaxDigits = function (nums: number[]) {
  let maxDigits = 0;
  for (let num of nums) {
    maxDigits = Math.max(maxDigits, digitCount(num));
  }
  return maxDigits;
};

/* Radix sort algorithm */
const radixSort = function (nums: number[]) {
  const maxDigits = getMaxDigits(nums);
  for (let i = 0; i < maxDigits; i++) {
    const digitBucket: number[][] = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < nums.length; j++) {
      const digit = getDigit(nums[j], i);
      digitBucket[digit].push(nums[j]);
    }
    // @ts-ignore
    nums = [].concat(...digitBucket);
  }

  return nums;
};

// Test cases
console.log(radixSort([1, 3, 434, 5435, 43, 343, 676, 54543534, 54, 36, 1]));
console.log(radixSort([3, 2, 1, 45, 66, 84, 12, 11, 3234]));
