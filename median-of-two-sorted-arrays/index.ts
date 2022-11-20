/*
    Problem Statement: Given two sorted arrays of size m and n respectively return the median of two sorted arrays
    Note - If the number of elements in the merged array is even, then the median is the average of n/2 and (n/2 + 1)th element
*/

const computeArrayMedian = function (arr: number[]) {
  const idx = Math.ceil(arr.length / 2) - 1;
  if (arr.length % 2 === 0) {
    return (arr[idx] + arr[idx + 1]) / 2;
  } else {
    return arr[idx];
  }
};

const findMedianSortedArrays = function (
  nums1: number[],
  nums2: number[]
): number {
  if (nums1.length === 0 && nums2.length === 0) return 0;

  let combinedArray: number[] = [];

  if (nums1.length === 0) {
    combinedArray = [...nums2];
    return computeArrayMedian(combinedArray);
  }

  if (nums2.length === 0) {
    combinedArray = [...nums1];
    return computeArrayMedian(combinedArray);
  }

  let pointer1 = 0;
  let pointer2 = 0;
  const maxIndex1 = nums1.length;
  const maxIndex2 = nums2.length;
  const maxIndex = nums1.length + nums2.length;
  let ele1 = nums1[0];
  let ele2 = nums2[0];

  for (let i = 0; i < maxIndex; i++) {
    if (pointer1 <= maxIndex1 - 1) {
      ele1 = nums1[pointer1];
    }

    if (pointer2 <= maxIndex2 - 1) {
      ele2 = nums2[pointer2];
    }

    if (ele1 <= ele2 && pointer1 <= maxIndex1 - 1) {
      combinedArray.push(ele1);
      pointer1 += 1;
    } else if (pointer2 <= maxIndex2 - 1) {
      combinedArray.push(ele2);
      pointer2 += 1;
    } else if (pointer1 <= maxIndex1 - 1) {
      combinedArray.push(ele1);
      pointer1 += 1;
    }
  }
  // console.log("array: ", combinedArray);
  return computeArrayMedian(combinedArray);
};

/* Test cases */
console.log("Output: ", findMedianSortedArrays([1, 2], [3, 4]));
console.log("Output: ", findMedianSortedArrays([1, 2, 10, 11], [3, 4, 20]));
console.log("Output: ", findMedianSortedArrays([1, 60], [3, 4, 20]));

/*
    Steps
    Create a new array by merging the two sorted arrays
    Calculate the median depending upon the size of the new merged array(even or odd length)
    
    Questions
    What if one of the arrays is empty?
    What if both the arrays are empty?
    What if the merged array has 2 or less items?
*/
