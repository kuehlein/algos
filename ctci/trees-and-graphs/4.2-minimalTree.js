/**
 * Given an input array of sorted (least to greatest), unique integers, make a binary tree with as few levels as possible.
 */

// where n is the length of the input array...
// time: O(n * log(n)) time it takes to traverse the tree
// space: O(n * log(n)) --- n for the tree itself, log(n) for the space on the callstack

/**
 * Minimal Binary Tree Class
 */
class MinimalTree {
  constructor(arr) {
    // the minimal tree itself
    this.tree = this._buildTree(arr)
  }

  /**
   * @param {number[]} arr - the array that is to be turned into a minimal binary tree
   * @returns {tree} binary tree
   */
  _buildTree(arr) {
    return this._buildMinimalTreeHelper(arr, 0, arr.length - 1)
  }

  /**
   * Recursively invokes itself, splitting the window of available values to be
   * placed into the binary tree. Every middle value inb the window becomes the
   * new value of a binary tree, and the left and right values are assigned to
   * the return value of the recursive call of this function.
   *
   * @param {number[]} arr - the array that is to be turned into a minimal binary tree
   * @param {number} start - start of the current window
   * @param {number} end - end of the current window
   * @returns {tree} binary tree
   */
  _buildMinimalTreeHelper(arr, start, end) {
    if (end < start) return null
    const mid = (start + end) >> 1
    const tree = this._newNode(arr[mid])
    tree.left = this._buildMinimalTreeHelper(arr, start, mid - 1)
    tree.right = this._buildMinimalTreeHelper(arr, mid + 1, end)
    return tree
  }

  /**
   *
   * @param {number} val - the value being placed in a new binary tree
   * @returns {tree} binary tree
   */
  _newNode(val) {
    return ({
      val,
      left: null,
      right: null
    })
  }
}

const arr = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
const tree = new MinimalTree(arr)

console.log(JSON.stringify(tree.tree, null, 2))
