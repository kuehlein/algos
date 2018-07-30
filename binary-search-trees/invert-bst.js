// time: O(n)
// space: O(d)
// where n is the number of nodes and d is the depth of the tree
const invertBinaryTree = tree => {
  if (tree === null) return;
  swap(tree);

  invertBinaryTree(tree.left);
  invertBinaryTree(tree.right);

  return tree;
};

function swap(tree) {
  const temp = tree.left;
  tree.left = tree.right;
  tree.right = temp;
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

console.log(invertBinaryTree(tree));

/*
{ value: 10,
  left: { value: 15, left: null, right: null },
  right:
   { value: 5,
     left: { value: 8, left: null, right: null },
     right: { value: 1, left: null, right: null } } }
*/
