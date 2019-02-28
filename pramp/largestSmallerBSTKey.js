/**
 * * ---------------------------------------------------------------------------
 * * -------------------- * *LARGEST SMALLER BST KEY* * ------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * Given a root of a Binary Search Tree (BST) and a number num, implement an
 * efficient function findLargestSmallerKey that finds the largest key in the tree
 * that is smaller than num. If such a number doesn’t exist, return -1. Assume
 * that all keys in the tree are nonnegative.
 *
 * Analyze the time and space complexities of your solution.
 */

/**
 *           20
 *         /    \
 *        9      25
 *      /   \
 *     5     12
 *         /    \
 *       11      14
 *
 * For num = 17, 14 would be returned since it’s the largest key in the tree that
 * is still smaller than 17.
 */

/**
 * * *Constraints* *
 *
 *  - [time limit] 5000ms
 *
 *  - [input] Node - `rootNode`
 *    - 1 ≤ arr.length ≤ MAX_INT
 *    - 0 ≤ arr[i] ≤ MAX_INT for every i, 0 ≤ i < MAX_INT
 *
 *  - [output] integer
 */

/**
 * time:
 *   - balanced tree: O(log(n))
 *   - degenerate tree: O(n)
 * space: O(1)
 */

 /**
 * * -------- | ------------------------------------------------ | -------------
 * * -------- | -------- * *BOILERPLATE FOR PROBLEM* * --------- | -------------
 * * -------- v ------------------------------------------------ v -------------
 */

// Constructor to create a new Node
function Node(key) {
  this.key = key;
  this.parent = null;
  this.left = null;
  this.right = null;
}

// Constructor to create a new BST
function BinarySearchTree() {
  this.root = null;
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {
  var root = this.root;

  // 1. If the tree is empty, create the root
  if (!root) {
      this.root = new Node(key);
      return;
  }

  // 2) Otherwise, create a node with the key
  //    and traverse down the tree to find where to
  //    to insert the new node
  var currentNode = root;
  var newNode = new Node(key);

  while (currentNode !== null) {
    if (key < currentNode.key) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        newNode.parent = currentNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

/**
 * * -------- ^ ------------------------------------------------ ^ -------------
 * * -------- | -------- * *BOILERPLATE FOR PROBLEM* * --------- | -------------
 * * -------- | ------------------------------------------------ | -------------
 */

/**
 * Search the BST for `num`, saving keys that are less than `num` along the way.
 * When the loop breaks, the largest smaller value will be saved in `result` and
 * returned.
 *
 * @param {number} num -
 * @returns {number}
 */
BinarySearchTree.prototype.findLargestSmallerKey = function(num) {
  let result = -1
  let current = this.root

  while (current !== null) {
    if (current.key < num) {
      result = current.key
      current = current.right
    } else {
      current = current.left
    }
  }
  return result
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

var result = bst.findLargestSmallerKey(17);

console.log("Largest smaller number is " + result);
