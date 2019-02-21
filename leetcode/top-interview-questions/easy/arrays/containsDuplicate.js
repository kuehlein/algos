/**
 * * ---------------------------------------------------------------------------
 * * ----------------------- * *CONTAINS DUPLICATES* * -------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Given an array of integers, find if the array contains any duplicates.
 *
 * Your function should return true if any value appears at least twice in the
 * array, and it should return false if every element is distinct.
 */

// time: O(n)
// space: O(n)
// where n is the size of the input array

/**
 * Iterate over input array `nums` searching for duplicate value. Each seen value
 * gets put into a cache and every iteration this cache is checked. If the current
 * element is in the cache, return false because it has already been seen. If the
 * loops breaks, the value hasn't been seen, so return true.
 *
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = nums => {
  const cache = {};

  for (let i = nums.length - 1; i >= 0; i--) {
    if (cache[nums[i]]) return true;
    cache[nums[i]] = true;
  }
  return false;
};

// Example:

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
