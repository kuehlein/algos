/*
 * Given an array of integers, find the smallest absolute difference between any two
 * elements in the array.
 */

// Time: O(nlog(n))
// Space: O(1)
// where n is the length of the input array
const minimumAbsoluteDifference = arr => {
  arr.sort((a, b) => a - b);
  let smallestDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    const currentDiff = Math.abs(arr[i - 1] - arr[i]);
    if (currentDiff < smallestDiff) smallestDiff = currentDiff;
  }
  return smallestDiff;
};

const arr = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75];

console.log(minimumAbsoluteDifference(arr)); // 1
