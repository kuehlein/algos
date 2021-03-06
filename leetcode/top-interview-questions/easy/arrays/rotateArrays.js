/**
 * * ---------------------------------------------------------------------------
 * * ------------------------- * *ROTATE ARRAYS* * -----------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 */

// time: O(n)
// space: O(1)
// where n is the size of the input array

/**
 * Reverses the sections of the arrays that are going to be swapped, then reverses
 * the array as a whole to "shift" them into place.
 *
 * @param {number[]} nums - array to rotate
 * @param {number} k - number of rotations
 * @returns {number[]} nums
 */
const rotate = (nums, k) => {
  if (nums.length < 2 || !(k % nums.length)) return nums;

  k %= nums.length; // if k is longer than the array, set k to the remainder

  reverse(nums, nums.length - k, nums.length - 1);
  reverse(nums, 0, nums.length - k - 1);
  reverse(nums, 0, nums.length - 1);
};

/**
 * Uses no extra space to reverse an array. This can only be done using integers.
 *
 * @param {*} arr - array to rotate
 * @param {*} i - starting index
 * @param {*} j - ending index
 */
const reverse = (arr, i, j) => {
  let left = i;
  let right = j;

  while (left < right) {
    arr[left] ^= arr[right];
    arr[right] ^= arr[left];
    arr[left++] ^= arr[right--];
  }
};

// Examples:

const arr1 = [1, 2, 3, 4, 5, 6, 7];
rotate(arr1, 3);
console.log(arr1); // [5,6,7,1,2,3,4]
// initial:    [1,2,3,4,5,6,7]
// rotation 1: [1,2,3,4,7,6,5]
// rotation 1: [4,3,2,1,7,6,5]
// rotation 1: [5,6,7,1,2,3,4] <= final

const arr2 = [-1, -100, 3, 99];
rotate(arr2, 2);
console.log(arr2); // [3,99,-1,-100]

const arr3 = [1, 2];
rotate(arr3, 0);
console.log(arr3); // [1, 2] --- no shift

const arr4 = [1,2]
rotate(arr4, 1);
console.log(arr4); // [2, 1] --- 1 shift

const arr5 = [1,2];
rotate(arr5, 2);
console.log(arr5); // [1, 2] --- no shift

const arr6 = [1,2]
rotate(arr6, 3);
console.log(arr6); // [2, 1] --- 1 shift
