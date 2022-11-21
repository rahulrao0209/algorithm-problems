/*
  Problem: 
  Write a recursive function called flatten which accepts an array of arrays and returns a
  new array with all values flattened.
*/

const flatten = function (arr: number[] | any[]): number[] {
  const flatArray: number[] = [];

  const flattenHelper = function (arr: number[] | any[]): number[] {
    // Base case
    if (arr.length === 0) return [];

    if (typeof arr[0] === "number") {
      flatArray.push(arr[0]);
    } else {
      flatArray.concat(flattenHelper(arr[0]));
    }

    flatArray.concat(flattenHelper(arr.slice(1)));

    return flatArray;
  };
  flattenHelper(arr);

  return flatArray;
};

console.log(flatten([1, 2, [3, 4, [5, 6, 7]]]));
console.log(flatten([1, 2, 3, [4, 5]]));
console.log(flatten([1, [2, [3, 4], [[5]]]]));
console.log(flatten([[1], [2], [3]]));
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
console.log(flatten([[[[1, 2], 3, 4]]]));
console.log(flatten([1, 2]));
