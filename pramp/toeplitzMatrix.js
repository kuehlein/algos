/**
 * * ---------------------------------------------------------------------------
 * * ------------------------ * *TOEPLITZ MATRIX* * ----------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * A Toeplitz matrix is a matrix where every left-to-right-descending diagonal has
 * the same element. Given a non-empty matrix `arr`, write a function that returns
 * `true` if and only if it is a Toeplitz matrix. The matrix can be any dimensions,
 * not necessarily square.
 */

/**
 * * *Constraints* *
 *
 *  - [time limit] 5000ms
 *
 *  - [input] array.array.integer `arr`
 *      - 0 ≤ arr.length ≤ 20
 *      - 0 ≤ arr[i].length ≤ 20
 *      - 0 ≤ arr[i][j] ≤ 20
 *
 *  - [output] boolean
 */

// time: O(r * c)
// space: O(1)
// where row is the number of rows and c is the number of columns

/**
 *
 *
 * @param {number[][]} arr - matrix of integers
 * @returns {boolean} - whether or not input matrix is a toeplitz matrix
 */
const isToeplitz = arr => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[i - 1][j - 1]) return false
    }
  }
  return true
}

// Example:

const arr1 = [
  [1, 2, 3, 4],
  [5, 1, 2, 3],
  [6, 5, 1, 2]
]
console.log(isToeplitz(arr1) === true)

const arr2 = [
  [1, 2, 3, 4],
  [5, 1, 9, 3],
  [6, 5, 1, 2]
]
console.log(isToeplitz(arr2) === false)

