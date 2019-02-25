/**
 * * ---------------------------------------------------------------------------
 * * -------------------------- * *SORT COLORS* * ------------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Given an array with n objects colored red, white or blue, sort them in-place
 * so that objects of the same color are adjacent, with the colors in the order
 * red, white and blue.
 *
 * Here, we will use the integers 0, 1, and 2 to represent the color red, white,
 * and blue respectively.
 *
 * Note: You are not suppose to use the library's sort function for this problem.
*/

// time: O(n)
// space: O(1)

/**
 * Iterate through each element in the array. Keep track of the index for the next
 * white element and the next blue element, swapping the value at i into these
 * places as neccessary.
 *
 * @param {*} arr - array to be sorted
 */
const sortColors = arr => {
  let white = 0
  let blue = arr.length - 1

  for (let i = 0; i < blue;) {
    if (arr[i] === 0) swap(arr, white++, i++)
    if (arr[i] === 1) i++
    if (arr[i] === 2) swap(arr, i, blue--)
  }
}

const swap = (arr, i, j) => {
  arr[i] ^= arr[j]
  arr[j] ^= arr[i]
  arr[i] ^= arr[j]
}

// Example:

const arr = [2,0,2,1,1,1,2,2,2,2,1,1,0,2,2,2,2,1,0,0,0]
sortColors(arr);
console.log(arr); // [ 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2 ]
