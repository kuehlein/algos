/**
 * * ---------------------------------------------------------------------------
 * * ------------------------ * *ARRAY QUADRUPLETS* * --------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Given an unsorted array of integers arr and a number s, write a function
 * `findArrayQuadruplet` that finds four numbers (quadruplet) in `arr` that sum up
 * to `s`. Your function should return an array of these numbers in an ascending
 * order. If such a quadruplet doesn’t exist, return an empty array.
 *
 * Note that there may be more than one quadruplet in arr whose sum is `s`.
 * You’re asked to return the first one you encounter (considering the results
 * are sorted).
 *
 * Explain and code the most efficient solution possible, and analyze its time
 * and space complexities.
 */

/**
 * * *Constraints* *
 *
 *  - [time limit] 5000ms
 *
 *  - [input] integer[] - `arr`
 *    - 1 ≤ arr.length ≤ 100
 *
 *  - [input] integer - `s`
 *
 *  - [output] integer[]
 */


// time: O(n^3)
// space: O(1)

/**
 * Uses two for loops (i - left, j - right) to form a window which the inner while
 * loop will traverse with a left and right pointer. Each of these four values will
 * be checked to see if they sum up to `s`, and if so, they are sorted in ascending
 * order and returnd. If there is no four integers that sum up to `s`, return an
 * empty array.
 *
 * @param {number[]} arr - array that is to be searched for four values to sum up to `s`
 * @param {number} s - target sum of four number in `arr`
 * @returns {number[]}
 */
const findArrayQuadruplet = (arr, s) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; j > i + 1; j--) {
      let left = i + 1
      let right = j - 1
      while (left < right) {
        if (arr[i] + arr[j] + arr[left] + arr[right] === s) {
          return [arr[i], arr[j], arr[left], arr[right]].sort((a, b) => a - b)
        } else {
          left++
          right--
        }
      }
    }
  }
  return []
}

const arr = [2, 7, 4, 0, 9, 5, 1, 3]

console.log(findArrayQuadruplet(arr, 20)) // [0, 4, 7, 9]

/**
 * The ordered quadruplet of (7, 4, 0, 9)
 * whose sum is 20. Notice that there
 * are two other quadruplets whose sum is 20:
 * (7, 9, 1, 3) and (2, 4, 9, 5), but again you’re
 * asked to return the just one quadruplet (in an
 * ascending order)
*/
