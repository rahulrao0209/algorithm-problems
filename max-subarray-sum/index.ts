const maxSubarraySum = function (arr: number[], num: number) {
  if (arr.length < num) return undefined;

  /*
        First run an initial loop through the given 'num' of values
        to get an initial max value.
    */
  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  /*
        Now start a new loop to move from ahead from the index at
        which the first max value was initialzed, i.e num
        To use the sliding window, just subtract the first value and
        add the next value in(which would seem like a window is sliding over the array)!
   */
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - num];

    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
};

// Test cases
console.log(
  "Max subarray sum: ",
  maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
);
console.log("Max subarray sum: ", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2));
console.log("Max subarray sum: ", maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4));
console.log("Max subarray sum: ", maxSubarraySum([4, 2, 1, 6], 1));
console.log("Max subarray sum: ", maxSubarraySum([], 1));

/*
    Problem
    Write a function called maxSubarraySum which accepts an array of integers
    and a number called num(n). The function should calculate the max sum of 
    n consecutive elements in an array.

    ex: array = [2, 6, 9, 2, 1, 8, 5, 6, 3], val = 3
    answer: 19

    Solution using the sliding window method. O(n) time
*/
