// time: O(n)
// space: O(d)
// where n is the number of nodes and d is the depth of the tree
function validateBst(tree, min = -Infinity, max = Infinity) {
  if (tree === null) return true;
  if (tree.value < min || tree.value >= max) return false;

  const leftValid = validateBst(tree.left, min, tree.value);

  return leftValid && validateBst(tree.right, tree.value, max);
}

const tree = {
  value: 10,
  left: {
    value: 5,
    left: {
      value: 1,
      left: null,
      right: null
    },
    right: {
      value: 8,
      left: null,
      right: null
    }
  },
  right: {
    value: 15,
    left: null,
    right: null
  }
};

console.log(validateBst(tree)); // true
