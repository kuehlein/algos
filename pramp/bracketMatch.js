/**
 * * ---------------------------------------------------------------------------
 * * -------------------------- * *BRACKET MATCH* * ----------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * A string of brackets is considered correctly matched if every opening bracket
 * in the string can be paired up with a later closing bracket, and vice versa.
 * For instance, “(())()” is correctly matched, whereas “)(“ and “((” aren’t.
 * For instance, “((” could become correctly matched by adding two closing
 * brackets at the end, so you’d return 2.
 *
 * Given a string that consists of brackets, write a function bracketMatch that
 * takes a bracket string as an input and returns the minimum number of brackets
 * you’d need to add to the input in order to make it correctly matched.
 *
 * Explain the correctness of your code, and analyze its time and space complexities.
 */

/**
 * * *Constraints* *
 *
 *  - [time limit] 5000ms
 *
 *  - [input] string `text`
 *    - 1 ≤ text.length ≤ 5000
 *
 *  - [output] integer
 */


// time: O(n)
// space: O(n)

/**
 * @param {string} str - input string containing only ")" and "(" characters
 * @returns {number} - number of brackets needed to balance input string
 */
const bracketMatch = str => {
  const stack = []

  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - 1] === "(" && str[i] === ")") {
      stack.pop()
    } else {
      stack.push(str[i])
    }
  }
  return stack.length
}

// Examples:
console.log(bracketMatch("(()")) // 1
console.log(bracketMatch("(())")) // 0
console.log(bracketMatch("())(")) // 2
