/**
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose
 * of this problem, assume that your function returns 0 when the reversed
 * integer overflows.
 */

// time: O(n) - where n is the length of the number as a string
// space: O(1)

/**
 * @param {number} num1 --- num to be reversed
 * @return {number}     --- reversed num
 */
const reverse = num1 => {
  if (num1 > Math.pow(2, 31) || num1 < Math.pow(-2, 31)) return 0

  let num2 = 0;
  let sign
  if (num1 < 0) {
    num1 *= -1
    sign = -1
  } else {
    sign = 1
  }

  while (num1) {
    const res = num1 % 10;
    num2 *= 10;
    num2 += res;

    num1 = Math.floor(num1 / 10)
  }
  return sign * num2
};

console.log(reverse(123)) // 321
console.log(reverse(-123)) // -321
