/* Write a function to count the number of unique numbers in a sorted array */

const countUniqueValues = function (arr: number[]) {
  if (arr.length === 0) return 0;

  let idx1 = 0;

  for (let idx2 = 1; idx2 < arr.length; idx2++) {
    if (arr[idx1] !== arr[idx2]) {
      idx1 += 1;
      arr[idx1] = arr[idx2];
    }
  }

  return idx1 + 1;
};

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1]));
