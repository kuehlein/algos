/**
 * * ---------------------------------------------------------------------------
 * * ------------------------- * *SENTENCE REVERSE* * --------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * You are given an array of characters arr that consists of sequences of
 * characters separated by space characters. Each space-delimited sequence of
 * characters defines a word.
 *
 * Implement a function reverseWords that reverses the order of the words in the
 * array in the most efficient manner.
 *
 * Explain your solution and analyze its time and space complexities.
 */

/**
 * * *Constraints* *
 *
 *  - [time limit] 5000ms
 *
 *  - [input] char[] `arr`
 *    - 1 ≤ arr.length ≤ 100
 *
 *  - [output] char[]
 */

// NAIVE APPROACH
// time: O(n + m)
// space: O(n)
// where n is the length of the input array and m is the number of words (spaces count as a word)

/**
 * @param {string[]} arr - the array of chars that is to be reversed
 * @returns {string[]} - the input array, but reversed
 */
const reverseWords1 = arr => {
  const allWords = buildStack(arr)
  return assembleReversed(allWords)
}

const buildStack = arr => {
  let stack = []
  let word = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      word.length ? stack.push(word, [" "]) : stack.push([" "])
      word = []
    } else {
      word.push(arr[i])
    }
  }
  stack.push(word)
  return stack
}

const assembleReversed = words => {
  let reversed = []
  const numWords = words.length

  for (let i = 0; i < numWords; i++) {
    reversed = reversed.concat(words.pop())
  }
  return reversed
}

// OPTIMAL SOLUTION
// time: O(n) --- O(2(n/2) + n) || O(2n)
// space: O(1)
// where n is the length of the input array

/**
 * @param {string[]} arr - the array of chars that is to be reversed
 * @returns {string[]} - the input array, but reversed
 */
const reverseWords2 = arr => {
  mirrorReverse(arr, 0, arr.length - 1)
  let wordStart = null

  for (let i = 0; i < arr.length; i++) {
    if (wordStart !== null) {
      if (arr[i] === " ") {
        mirrorReverse(arr, wordStart, i - 1)
        wordStart = null
      } else if (i === arr.length - 1) {
        mirrorReverse(arr, wordStart, i)
      }
    } else if (arr[i] !== " ") {
      wordStart = i
    }
  }
  return arr
}

const mirrorReverse = (arr, i, j) => {
  while (i < j) {
    swap(arr, i, j)
    i++
    j--
  }
}

const swap = (arr, i, j) => {
  const temp = arr[j]
  arr[j] = arr[i]
  arr[i] = temp
}

// Examples:

// input:
const arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

console.log(reverseWords2(arr))

// output:
// [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'e', 'r', 'f', 'e', 'c', 't' ]
