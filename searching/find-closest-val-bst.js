// Average: O(log(n)) time | O(1) space
// Worst: O(n) time | O(1) space
// where n is the number of nodes in the bst
const findClosestValueInBst = (tree, target) => {
  let queue = [tree]
  let current
  let closest = Infinity

  while (queue.length) {
    current = queue.shift()

    if (Math.abs(current.value - target) < Math.abs(closest - target)) {
      closest = current.value
    }
    if (current.left) queue.push(current.left)
    if (current.right) queue.push(current.right)
  }

  return closest
}
