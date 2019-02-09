/**
 * * ---------------------------------------------------------------------------
 * * --------------------------- * *PANCAKE SORT* * ----------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Given an array of integers `arr`:
 *
 *  1. Write a function `flip(arr, k)` that reverses the order of the first `k`
 *     elements in the array `arr`.
 *
 *  2. Write a function `pancakeSort(arr)` that sorts and returns the input array.
 *     You are allowed to use only the function `flip` you wrote in the first step in
 *     order to make changes in the array.
 *
 * Analyze the time and space complexities of your solution.
 *
 * *Note* It’s called pancake sort because it resembles sorting pancakes on a
 *      * plate with a spatula, where you can only use the spatula to flip some of
 *      * the top pancakes in the plate. To read more about the problem, see the
 *      * Pancake Sorting Wikipedia page:
 *        [https://en.wikipedia.org/wiki/Pancake_sorting]
 */

/**
 * * *Constraints* *
 *
 *  - [time-limit] 5000ms
 *
 *  - [input] integer[] - `arr`
 *    - 1 ≤ arr.length ≤ 100
 *
 *  - [input] integer - `k`
 *    - 0 ≤ k
 *
 *  - [output] integer[]
 */


// time: O(n^3)
// space: O(1)

/**
 * Using a shrinking window (from right to left) find the highest value in the window
 * flip it into the first position using the `flip` function (passing the idex of the
 * highest value) and then flipping it to the last position in the window. After
 * the window closes, the array will be sorted.
 *
 * @param {number[]} arr - array to be sorted
 * @returns {number[]}
 */
const pancakeSort = arr => {
  for (let i = arr.length - 1; i > 0; i--) {
    const maxIdx = findHighest(arr, i)
    flip(arr, maxIdx)
    flip(arr, i)
  }
  return arr
}

/**
 * Find the highest value in the current window of the given array `arr`. `i` is
 * the final index in this window.
 *
 * @param {number[]} arr - the array that is being searched for the highest value
 * @param {number} i - index of the last position in the window
 * @returns {number} index of the highest number in the window
 */
const findHighest = (arr, i) => {
  let maxIdx = 0

  for (let j = 0; j <= i; j++) {
    if (arr[j] > arr[maxIdx]) maxIdx = j
  }
  return maxIdx
}

/**
 * Given a window, flip all values in that window using the `swap` function.
 *
 * @param {number[]} arr - array that is being flipped
 * @param {number} k - right-most index being flipped
 */
const flip = (arr, k) => {
  let left = 0
  let right = k

  while (left < right) {
    swap(arr, left, right)
    left++
    right--
  }
}

/**
 * Swap two values in a given array `arr` by mutation.
 *
 * @param {*} arr - array that contains the values being swapped
 * @param {*} i - left index to be swapped
 * @param {*} j - right index to be swapped
 */
const swap = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

// Example:

// input:
const arr = [1, 5, 4, 3, 2]

console.log(pancakeSort(arr))

// output:
// [1, 2, 3, 4, 5]
