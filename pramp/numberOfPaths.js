/**
 * * ---------------------------------------------------------------------------
 * * -------------------------- * *NUMBER OF PATHS* * --------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * You’re testing a new driverless car that is located at the Southwest (bottom-left)
 * corner of an n×n grid. The car is supposed to get to the opposite, Northeast
 * (top-right), corner of the grid. Given n, the size of the grid’s axes, write
 * a function numOfPathsToDest that returns the number of the possible paths the
 * driverless car can take.
 */

/**
 *
 *  _______________________________________
 * |#######|#######|#######|#######|  END  |
 * |#######|#######|#######|#######| (4,4) |
 * |#######|#######|#######|#######|_______|
 * |#######|#######|#######|       |       |
 * |#######|#######|#######|       |       |
 * |#######|#######|#######|_______|_______|
 * |#######|#######|       |       |       |
 * |#######|#######|       |       |       |
 * |#######|#######|_______|_______|_______|
 * |#######|       |       |       |       |
 * |#######|       |       |       |       |
 * |#######|_______|_______|_______|_______|
 * | START |       |       |       |       |
 * | (0,0) | (0,1) |       |       |       |
 * |_______|_______|_______|_______|_______|
 *
 * *The car may only move in the open spaces*
 */

/**
 * For convenience, let’s represent every square in the grid as a pair (i,j).
 * The first coordinate in the pair denotes the east-to-west axis, and the second
 * coordinate denotes the south-to-north axis. The initial state of the car is
 * (0,0), and the destination is (n-1,n-1).
 *
 * The car must abide by the following two rules: it cannot cross the diagonal
 * border. In other words, in every step the position (i,j) needs to maintain
 * i >= j. See the illustration above for n = 5. In every step, it may go one
 * square North (up), or one square East (right), but not both. E.g. if the car
 * is at (3,1), it may go to (3,2) or (4,1).
 *
 * Explain the correctness of your function, and analyze its time and space
 * complexities.
 */

/**
 * * *Constraints* *
 *
 *  - [time limit] 5000ms
 *
 *  - [input] integer `n`
 *    - 1 ≤ n ≤ 100
 *
 *  - [output] integer
 */

/**
 * Time Complexity: first, notice that in order to calculate the number of paths
 * to a specific square, we need all the square south and west to it. This implies
 * that all squares beneath the diagonal are calculated. In addition, almost every
 * square value is used twice - for the square north to it and east to it (except
 * for the border squares, which are used once). This means that our time complexity
 * is O(n^2), since the recursive function is called once or twice for about half
 * of the squares, and each call takes O(1) time.
 *
 * Space Complexity: the memoization requires the space complexity to be also
 * O(n^2), since we save values for all squares.
 */

/**
 * Builds a memo for the recursive helper function, and invokes the helper.
 *
 * @param {number} n - size of the grid
 * @returns {number} number of paths
 */
const numOfPathsToDestRecursive = n => {
  const memo = buildMemo(n);
  return numOfPathsToDestHelperRecursive(n, 0, 0, memo);
};

/**
 * Build a memo containing all of the spaces for the grid filled in with values of 0.
 *
 * @param {number} n - size of the grid
 */
const buildMemo = n => {
  const memo = [];

  for (let i = 0; i <= n; i++) {
    memo.push([]);
    for (let j = 0; j <= i; j++) {
      memo[i][j] = 0;
    }
  }
  return memo;
};

/**
 * Recursively traverse east (`i` + 1) and/or north (`j` + 1) adding the output
 * of those recursive traversals to `memo`. If the base case (both `i` and `j` are
 * at the final spot) return `1`. These bubble up, being combined in the memo at each
 * space. The final call on the stack will return the total number of paths possible.
 *
 * @param {number} n - size of the grid
 * @param {number} i - the current x coordinate
 * @param {number} j - the current y coordinate
 * @param {Array<number[]>} memo - the cache of coordinates and the corresponding vals
 * @returns {number}
 */
const numOfPathsToDestHelperRecursive = (n, i, j, memo) => {
  if (i === n - 1 && j === n - 1) return 1;
  if (memo[i][j] > 0) return memo[i][j];

  if (i <= n - 1) memo[i][j] += numOfPathsToDestHelperRecursive(n, i + 1, j, memo);
  if (i > j) memo[i][j] += numOfPathsToDestHelperRecursive(n, i, j + 1, memo);

  return memo[i][j];
};

/**
 * The space complexity can be improved to O(n) if we choose an iterative solution,
 * which uses the same recursive relation. Notice that for calculating the paths
 * for square (i,j) we only need squares (i-1,j) and (i,j-1). Thus, by calculating
 * the number of paths row by row from south to north, and west to east in the rows,
 * the function needs to save only the last two rows.
 */

/**
 * Time Complexity: as we see, the function still calculates every square south-east
 * to the diagonal, leaving the time complexity to be O(n^2),
 *
 * Space Complexity: the space complexity is reduced to O(n) since we are memoizing
 * only the last two rows.
 */

// input: n - a positive integer representing the grid size.
// output: number of valid paths from (0,0) to (n-1,n-1).

/**
 * Using a cache of values build up with `buildLastRow`, build a representation
 * of the last two rows of the grid and the corresponding values. The final row
 * will hold a single value that contains the number of paths possible to reach
 * that space.
 *
 * @param {*} n - the size of the grid
 * @returns {number}
 */
const numOfPathsToDest = n => {
  if (n === 1) return 1;

  let lastRow = buildLastRow(n)
  const currentRow = [];

  for (let j = 1; j < n; j++) {
    for (let i = j; i < n; i++) {
      if (i === j) currentRow[i] = lastRow[i];
      else currentRow[i] = currentRow[i - 1] + lastRow[i];
    }
    lastRow = currentRow;
  }
  return currentRow[n - 1];
};

/**
 * Build a representation of the last row visited ((0,0)-(0,n-1)), filling each space
 * with `1`, the number of times each of those spaces will be visited.
 *
 * @param {*} n - the size of the grid
 * @returns {number[]}
 */
const buildLastRow = n => {
  const lastRow = []

  for (let i = 0; i < n; i++) {
    lastRow.push(1) // base case - the first row is all ones
  }
  return lastRow
}

/**
 * Example:
 *
 * input  = 4
 * outupt = 5
 *
 * Since there are five possibilities: “EEENNN”, “EENENN”, “ENEENN”, “ENENEN”, “EENNEN”,
 * where the 'E' character stands for moving one step East, and the 'N' character
 * stands for moving one step North (so, for instance, the path sequence “EEENNN”
 * stands for the following steps that the car took: East, East, East, North, North, North)
 **/

console.log(numOfPathsToDestRecursive(1)); // 1
console.log(numOfPathsToDestRecursive(2)); // 1
console.log(numOfPathsToDestRecursive(3)); // 2
console.log(numOfPathsToDestRecursive(4)); // 5
console.log(numOfPathsToDestRecursive(6)); // 42
console.log(numOfPathsToDestRecursive(17)); // 35357670

/**
 * Combinatorial Remark (optional read): There is a closed formula that answers
 * this question, called the Catalan Number Formula. This formula is based on the
 * fact that every path from (0,0) to (n-1,n-1) is parallel to a sequence of n-1
 * pairs of parentheses which are correctly matched: Take a path sequence of N’s
 * and E’s. since the car begins at (0,0) and ends at (n-1,n-1), it needs to go
 * exactly n-1 times East, and n-1 times North. Put differently, all sequences
 * consist of n-1 E’s and n-1 N’s. Just like every balanced parenthesis string has
 * the same number of “(“ and “)” signs. Furthermore, in every pair (i,j), the first
 * coordinate is the number of times the car went east so far, and the second
 * coordinate is the number of times the car went north. This indicates that the
 * diagonal restriction means the number of E’s, in every prefix of the string is
 * equal or greater than the number of N’s. Just as in every balanced parenthesis
 * string, the number of “(“ is is equal or greater than the number of “)”. The
 * number of the balanced parenthesis strings of n-1 pairs, is given by the Catalan
 * Number Formula. The proof for its correctness is beyond our scope, but is
 * located in the Catalan Number Wikipedia page:
 * <https://en.wikipedia.org/wiki/Catalan_number>
 *
 * Note that although this formula is mathematically closed, calculating the Binomial
 * Coefficient, is done in O(n) runtime complexity, so calculating the number
 * directly doesn’t improve the asymptotic runtime complexity. But direct calculation
 * spares the need for saving previous values, so the space complexity may be reduced
 * to O(1) this way.
 */
