/**
 * * ---------------------------------------------------------------------------
 * * -------------------------- * *SINGLE NUMBER* * ----------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Given a non-empty array of integers, every element appears twice except for one.
 * Find that single one.
 */

// time: O(n)
// space: O(1)
// where n is the size of the input array

/**
 * Iterate over an input array XORing each value to a total. The total is returned.
 * XORing the same value twice onto the total will essentially remove the value
 * from the total, leaving us with the only value that was not duplicated.
 *
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => {
  let total = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    total ^= nums[i];
  }
  return total;
};

// Example:

console.log(singleNumber([2, 2, 1])); // 1
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
