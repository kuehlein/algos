/**
 * * ---------------------------------------------------------------------------
 * * ------------------ * *GETTING A DIFFERENT NUMBER* * -----------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Given an array `arr` of unique nonnegative integers, implement a function
 * `getDifferentNumber` that finds the smallest nonnegative integer that is NOT
 * in the array.
 *
 * Even if your programming language of choice doesn’t have that restriction
 * (like Python), assume that the maximum value an integer can have is
 * `MAX_INT = 2^31-1`. So, for instance, the operation `MAX_INT + 1` would be
 * `undefined` in our case.
 *
 * Your algorithm should be efficient, both from a time and a space complexity
 * perspectives.
 *
 * Solve first for the case when you’re NOT allowed to modify the input `arr`.
 * If successful and still have time, see if you can come up with an algorithm
 * with an improved space complexity when modifying `arr` is allowed. Do so without
 * trading off the time complexity.
 */

/**
 * * *Constraints* *
 *
 *  - [time limit] 5000ms
 *
 *  - [input] integer[] - `arr`
 *    - 1 ≤ arr.length ≤ MAX_INT
 *    - 0 ≤ arr[i] ≤ MAX_INT for every i, 0 ≤ i < MAX_INT
 *
 *  - [output] integer
 */

// NAIEVE APPROACH
// time: O(n * log(n))
// space: O(n)

/**
 * Since we are not allowed to mutate the array, we make a copy of that array and
 * sort it. Then, we iterate through the sorted array and return the first index
 * where `i !== arr[i]` or `arr.length`.
 *
 * @param {number[]} arr - array of nonnegative integers
 * @returns {number}
 */
const getDifferentNumberNaieve = arr => {
  const arrSorted = arr.slice().sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    if (arrSorted[i] !== i) return i
  }
  return arr.length
}

// EFFICIENT APPROACH --- *if we are allowed to modify the array*
// time: O(n)
// space: O(1)

/**
 * Iterate through each element in the input array `arr` and fill a set with all
 * unique values found. Then, in a for loop, check the set for `i`, and the first
 * instance of `i` that is not found in the set is returned. If the for loop finishes
 * without returning, return the length of `arr`.
 *
 * @param {*} arr- array of nonnegative integers
 * @returns {number}
 */
const getDifferentNumberEfficient = arr => {
  const set = {} // treat this as a set

  for (let i = 0; i < arr.length; i++) {
    if (!set[arr[i]]) set[arr[i]] = true
  }

  for (let i = 0; i < arr.length; i++) {
    if (!set[i]) return i
  }
  return arr.length
}


// OPTIMAL APPROACH --- *if we are allowed to modify the array*
// time: O(n)
// space: O(1)

/**
 * Sort the input array `arr` in place, then search `arr` for a value that doesn't
 * correnspond with its index. The lowest nonnegative integer is returned.
 *
 * @param {*} arr - array of nonnegative integers
 * @returns {number}
 */
const getDifferentNumberOptimal = arr => {
  sortInPlace(arr)
  return searchForLowestValueNotInArr(arr)
}

/**
 * Iterate through input array `arr`, swapping the value at `arr[i]` with the value
 * at `arr[arr[i]]` until the array is sorted in place. It is not necessary for
 * the array to be completely sorted, so long as we are able to determine in
 * `searchForLowestValueNotInArr` can test if `arr[i] === i` and return the first
 * value that is falsy.
 *
 * despite there being nested loops, this is still O(n), a max of n swaps are made, and if
 *
 * @param {*} arr - array of nonnegative integers
 */
const sortInPlace = arr => {
  let swaps = 0

  for (let i = 0; i < arr.length && swaps < arr.length; i++) {
    while (arr[arr[i]] < arr.length && arr[i] < arr.length && arr[arr[i]] !== arr[i]) {
      swap(arr, arr[i], arr[arr[i]])
      swaps++
    }
  }
}

/**
 * Since the input array `arr` is comprised solely of integers, we can use bitwise
 * operations to swap `i` and `j` in place.
 *
 * @param {number[]} arr - array of nonnegative integers
 * @param {number} i - index in `arr`
 * @param {number} j - index in `arr`
 */
const swap = (arr, i, j) => {
  arr[i] ^= arr[j]
  arr[j] ^= arr[i]
  arr[i] ^= arr[j]
}

/**
 * Given a sorted array of nonnegative integers `arr`, iterate through arr comparing
 * the current index to the value at that index. If `i !== arr[i]`, return `i`,
 * as that is the lowest nonnegative integer that is not in the array. If the loop
 * finishes without finding a gap, return `arr.length` as that is the lowest nonnegative
 * integer not in the array.
 *
 * @param {*} arr - array of nonnegative integers
 * @returns {number}
 */
const searchForLowestValueNotInArr = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i) return i
  }
  return arr.length
}

// Examples:

const arr1 = [0]
console.log(getDifferentNumberNaieve(arr1) === 1) // 1

const arr2 = [0, 1, 2]
console.log(getDifferentNumberEfficient(arr2) === 3) // 3

const arr3 = [1, 3, 0, 2]
console.log(getDifferentNumberOptimal(arr3) === 4) // 4

const arr4 = [1000000]
console.log(getDifferentNumberNaieve(arr4) === 0) // 0

const arr5 = [1, 0, 3, 4, 5]
console.log(getDifferentNumberEfficient(arr5) === 2) // 2

const arr6 = [0, 1000000]
console.log(getDifferentNumberOptimal(arr6) === 1) // 1

const arr7 = [0, 999999, 1000000]
console.log(getDifferentNumberEfficient(arr7) === 1) // 1

const arr8 = [0, 5, 4, 1, 3, 6, 2]
console.log(getDifferentNumberOptimal(arr8) === 7) // 7
