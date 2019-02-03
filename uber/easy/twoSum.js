/**
 * Given an array of integers, return indices of the two numbers such that
 * they add up to a specific target.
 *
 * You may assume that each input would have exactly one solution, and you
 * may not use the same element twice.
 */

// time: O(n)
// space: O(n)

/**
 * @param {number[]} nums --- array of nums for possible sum
 * @param {number} target --- target sum
 * @return {number[]}     --- indicies
 */
const twoSum = (nums, target) => {
  const cache = {}

  for (let i = nums.length - 1; i >= 0; i--) {
      if (cache[nums[i]] !== undefined) return [i, cache[nums[i]]]
      else cache[target - nums[i]] = i
  }
};

console.log(twoSum([2, 7, 11, 15], 9)) // [1, 0]
