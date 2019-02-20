/**
 * * ---------------------------------------------------------------------------
 * * --------------- * *REMOVE DUPLICATES FROM SORTED ARRAY* * -----------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Given a sorted array nums, remove the duplicates in-place such that each element
 * appear only once and return the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 */

// time: O(n)
// space: O(1)
// where n is the length of the input array

/**
 * Iterate through each element of the sorted array `nums`. If there is a duplicate,
 * assign the value of the slower pointer to the faster pointer. The slower pointer
 * indicates where the next value belongs in the array without duplicates, where
 * the faster pointer is the current value in the loop. After the values are reassigned
 * and the loop ends, the remaining extra values are popped off the end, and the
 * new length is returned.
 *
 * @param {number[]} nums - sorted array with duplicates
 */
const removeDuplicates = nums => {
  if (nums.length === 0) return 0;

  let slower = 0;

  for (let faster = 1; faster < nums.length; faster++) {
    if (nums[slower] !== nums[faster]) {
      slower++;
      nums[slower] = nums[faster];
    }
  }

  popOffExtra(nums, slower);

  return nums.length;
};

/**
 * Given an array of numbers `arr`, pop off values from the end until the length
 * of `arr` matches the desired length `len`.
 *
 * @param {number[]} arr - sorted array with duplicates
 * @param {number} len - length of array without duplicates
 */
const popOffExtra = (arr, len) => {
  for (let i = arr.length - 1; i > len; i--) {
    arr.pop();
  }
};

// Example:

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
removeDuplicates(arr); // 5
console.log(arr); // [0, 1, 2, 3, 4]
