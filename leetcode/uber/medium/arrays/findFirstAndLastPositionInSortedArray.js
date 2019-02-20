/**
 * Given an array of integers nums sorted in ascending order, find the starting
 * and ending position of a given target value.
 *
 * Your algorithm's runtime complexity must be in the order of O(log n).
 *
 * If the target is not found in the array, return [-1, -1].
 */

// time: O(log(n))
// space: O(1)

/**
 * @param {number[]} nums --- array of nums to search
 * @param {number} target --- num in array to find indicies
 * @return {number[]}     --- first and last target num in nums
 */
const searchRange = (nums, target) => {
  const first = firstGreaterEqual(nums, target)
  if (nums[first] !== target) return [-1, -1]
  return [first, firstGreaterEqual(nums, target + 1) - 1]
}

// Find the first number that is greater than or equal to target.
// could return nums.length if target is greater than
// nums[nums.length - 1].
const firstGreaterEqual = (nums, target) => {
  let left = 0
  let right = nums.length
  while (left < right) {
    const middle = (right + left) >> 1
    if (nums[middle] < target) left = middle + 1
    else right = middle
  }
  return left
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)) // [3, 4]
