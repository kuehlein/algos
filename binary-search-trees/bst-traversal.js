// time: O(n)
// space: O(n)
const inOrderTraverse = (tree, array) => {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }

  return array;
};

// time: O(n)
// space: O(n)
const preOrderTraverse = (tree, array) => {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }

  return array;
};

// time: O(n)
// space: O(n)
const postOrderTraverse = (tree, array) => {
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }

  return array;
};

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

console.log(inOrderTraverse(tree, [])); // [1, 5, 8, 10, 15]
console.log(preOrderTraverse(tree, [])); // [ 10, 5, 1, 8, 15 ]
console.log(postOrderTraverse(tree, [])); // [ 1, 8, 5, 15, 10 ]
