/**
 * * ---------------------------------------------------------------------------
 * * --------------------- * *ARRAY OF ARRAY PRODUCTS* * -----------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Given an array of integers arr, you’re asked to calculate for each index i the
 * product of all integers except the integer at that index (i.e. except arr[i]).
 * Implement a function arrayOfArrayProducts that takes an array of integers and
 * returns an array of the products.
 *
 * *Solve without using division*
 */

/**
 * * *Constraints* *
 *
 *  - [time limit] 5000ms
 *
 *  - [input] array.integer `arr`
 *    - 0 ≤ arr.length ≤ 20
 *
 *  - [output] array.integer
 */

// time: O(n^2)
// space: O(n)
// where n is the length of the input array

/**
 * For each element in the input array `arr`, iterate over `arr` and multiply each
 * value against a total that is not the current value at `i`, and push that new
 * value into `products` the return value.
 *
 * @param {number[]} arr
 * @returns {number[]} array of products
 */
const arrayOfArrayProducts1 = arr => {
  if (arr.length < 2) return [];

  const products = [];

  for (let i = 0; i < arr.length; i++) {
    let currentProduct = 1;
    for (let j = 0; j < arr.length; j++) {
      if (j !== i) {
        currentProduct *= arr[j];
      }
    }
    products.push(currentProduct);
  }
  return products;
};

/**
 * Time Complexity: two passes through arr and constant time work for each value
 * in it, bring us to linear O(N) runtime complexity.
 *
 * Space Complexity: from using an additional array of length n (i.e. productArr)
 * to hold the products, we get a linear O(N) space complexity.
 */

/**
 * Calculate the product of all values before and after each index, and return an
 * array of these values multiplied together for each index.
 *
 * @param {number[]} arr
 * @returns {number[]} array of products
 */
const arrayOfArrayProducts2 = arr => {
  if (arr.length < 2) return [];

  const productArr = findProductsBeforeEachVal(arr);
  let product = 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    productArr[i] *= product;
    product *= arr[i];
  }
  return productArr;
};

/**
 * Given an input array `arr`, find the products of all of the numbers before each
 * index, push that value into the same index in a new array.
 *
 * @param {number[]} arr
 * @returns {number[]} incomplete array of products
 */
const findProductsBeforeEachVal = arr => {
  const productArr = [];
  let product = 1;

  for (let i = 0; i < arr.length; i++) {
    productArr[i] = product;
    product *= arr[i];
  }
  return productArr;
};

// Examples:

const arr1 = [8, 10, 2];
console.log(arrayOfArrayProducts1(arr1)); // [20, 16, 80] => [10*2, 8*2, 8*10]

const arr2 = [2, 7, 3, 4];
console.log(arrayOfArrayProducts2(arr2)); // [84, 24, 56, 42] => [7*3*4, 2*3*4, 2*7*4, 2*7*3]

const arr3 = [];
console.log(arrayOfArrayProducts1(arr3)); // []

const arr4 = [1];
console.log(arrayOfArrayProducts2(arr4)); // []
