/**
 * Implement a function to check if a binary tree is balanced. For the purposes
 * of this question, a balanced tree is defined to be a tree such that the heights
 * of the two subtrees of any node never differ by more than one.
 */

// time: O(v + e) - traversing each node once
// space: O(v) - where v is the longest length of a path searched

/**
 * Check a in input binary tree's left and right children for their heights and
 * find the difference. If it is greater than one, the tree is not balanced, return
 * `false`. If it is, recurse down to the next level and begin again. This function
 * will check every length of each subtree to make sure they are balanced, and if so
 * return `true`.
 *
 * @param {*} tree - the tree being traversed
 * @returns {boolean}
 */
const isBalanced = tree => {
  if (tree === null) return true
  const diff = getHeight(tree.left) - getHeight(tree.right)
  if (Math.abs(diff) > 1) return false
  else {
    const left = isBalanced(tree.left)
    const right = isBalanced(tree.right)
    return !!left && !!right
  }
}

/**
 * Finds the heights of the left subtree and right subtree recursively. If there
 * is no subtree, `-1` is returned. The max depth of the subtree is returned `+ 1`
 * for the current level.
 *
 *
 * @param {*} tree - the tree being traversed
 * @returns {number}
 */
const getHeight = tree => tree !== null
  ? Math.max(getHeight(tree.left), getHeight(tree.right)) + 1
  : -1

// Examples:

// inputs:
const balancedTree = {
  val: 5,
  left: {
    val: 3,
    left: { val: 1, left: null, right: null },
    right: { val: 4, left: null, right: null }
  },
  right: {
    val: 8,
    left: { val: 6, left: null, right: null },
    right: {
      val: 10,
      left: null,
      right: null
    }
  }
}

const unbalancedTree = {
  val: 5,
  left: {
    val: 3,
    left: { val: 1, left: null, right: null },
    right: { val: 4, left: null, right: null }
  },
  right: {
    val: 8,
    left: { val: 6, left: null, right: null },
    right: {
      val: 10,
      left: null,
      right: {
        val: 15,
        left: null,
        right: { val: 20, left: null, right: null }
      }
    }
  }
}

// outputs:
console.log(isBalanced(balancedTree)) // false
console.log(isBalanced(unbalancedTree)) // true
