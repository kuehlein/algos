/**
 * * ---------------------------------------------------------------------------
 * * ----------------------- * *SHIFTED ARRAY SEARCH* * ------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * A sorted array of distinct integers `shiftArr` is shifted to the left by an unknown
 * offset and you don’t have a pre-shifted copy of it. For instance, the sequence
 * `1, 2, 3, 4, 5` becomes `3, 4, 5, 1, 2`, after shifting it twice to the left.
 *
 * Given `shiftArr` and an integer `num`, implement a function `shiftedArrSearch`
 * that finds and returns the index of `num` in `shiftArr`. If `num` isn’t in `shiftArr`,
 * `return -1`. Assume that the offset can be any value between `0` and `arr.length - 1`.
 */

/**
 * * *Constraints* *
 *
 *  - [time limit] 5000ms
 *
 *  - [input] integer[] - `arr`
 *
 *  - [input] integer - `num`
 *
 *  - [output] integer
 */

// time: O(log(n))
// space: O(1)

/**
 * Find the pivot point, the point where the largest and smallest values meet,
 * and preform a binary search on the half of the array on one side or the other
 * of that pivot, depending on the size of `num`.
 *
 * @param {number[]} shiftArr - shifted array
 * @param {number} num - value to find in `shiftedArr`
 * @returns {number}
 */
const shiftedArrSearch = (shiftArr, num) => {
  let pivot = findPivotPoint(shiftArr)

  if (pivot === 0 || num < shiftArr[0]) return binarySearch(shiftArr, pivot, shiftArr.length - 1, num)

  return binarySearch(shiftArr, 0, pivot - 1, num)
}

/**
 * Preform a binary search on input array `arr` to find the pivot point, the point
 * where the largest and smallest values meet. The largest value is returned
 * (`middle - 1`).
 *
 * @param {number[]} arr - shifted array
 * @returns {number}
 */
const findPivotPoint = arr => {
  let left = 0
  let right = arr.length - 1

  while (left <= right) {
    const middle = (left + right) >> 1
    if (middle === 0 || arr[middle] < arr[middle - 1]) return middle
    if (arr[middle] > arr[0]) left = middle + 1
    else right = middle - 1
  }
  return 0
}

/**
 * Preform a binary search on input array `arr` within the window of `left` and
 * `right`, to find the index of `num`. If the index is found, return it, otherwise
 * return `-1`.
 *
 * @param {number[]} arr - shifted array
 * @param {number} left - left-most index in window
 * @param {number} right - right-most index in window
 * @param {number} num - value to find in `arr`
 * @returns {number}
 */
const binarySearch = (arr, left, right, num) => {
  while (left <= right) {
    const middle = (left + right) >> 1
    if (arr[middle] < num) left = middle + 1
    else if (arr[middle] === num) return middle
    else right = middle - 1
  }
  return -1
}

// Examples:

const arr1 = [2]
console.log(shiftedArrSearch(arr1, 2) === 0)

const arr2 = [1, 2]
console.log(shiftedArrSearch(arr2, 2) === 1)

const arr3 = [0, 1, 2, 3, 4, 5]
console.log(shiftedArrSearch(arr3, 1) === 1)

const arr4 = [1, 2, 3, 4, 5, 0]
console.log(shiftedArrSearch(arr4, 0) === 5)

const arr5 = [9, 12, 17, 2, 4, 5]
console.log(shiftedArrSearch(arr5, 17) === 2)

const arr6 = [9, 12, 17, 2, 4, 5, 6]
console.log(shiftedArrSearch(arr6, 4) === 4)

