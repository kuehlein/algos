/**
 * * ---------------------------------------------------------------------------
 * * ---------------------- * *BST SUCCESSOR SEARCH* * -------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * In a Binary Search Tree (BST), an Inorder Successor of a node is defined as the
 * node with the smallest key greater than the key of the input node (see examples
 * below). Given a node inputNode in a BST, you’re asked to write a function
 * `findInOrderSuccessor` that returns the Inorder Successor of inputNode. If
 * `inputNode` has no Inorder Successor, return `null`.
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
 * In this diagram, the inorder successor of 9 is 11 and the inorder successor of 14 is 20.
 */

/**
 * * *Constraints* *
 *
 *  - [time limit] 5000ms
 *
 *  - [input] Node `inputNode`
 *
 *  - [output] Node
 */

/**
 * time:
 *   - balanced-tree: O(log(n))
 *   - degenerate-tree: O(n)
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
  //    to insert it
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

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your
// findInOrderSuccessor function on.
BinarySearchTree.prototype.getNodeByKey = function(key) {
  var currentNode = this.root;

  while (currentNode) {
    if (key === currentNode.key) return currentNode;
    if (key < currentNode.key) currentNode = currentNode.left;
    else currentNode = currentNode.right;
  }
  return null;
}

/**
 * * -------- ^ ------------------------------------------------ ^ -------------
 * * -------- | -------- * *BOILERPLATE FOR PROBLEM* * --------- | -------------
 * * -------- | ------------------------------------------------ | -------------
 */

/**
 * Check an input node in a binary tree `inputNode` for a right child. If a right
 * child exists the in order successor is in that right subtree, if not, it is
 * a parent of `inputNode`. Traverse the right subtree, or the parent nodes until
 * the successsor is found and return that node. If there is no successor, `null`
 * is returned instead.
 *
 * @param {Node} inputNode - A node in a binary search tree
 * @returns {Node | null}
 */
BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  if (inputNode.right !== null) {
    return inputNode.right.left ? traverseLeft(inputNode.right) : inputNode.right
  } else {
    return traverseParents(inputNode)
  }
}

/**
 * Given an input node `node`, iteratively traverse through all of its left children
 * until there are no more, then return that final left child.
 *
 * @param {Node} node - A node in a binary search tree
 * @returns {Node}
 */
const traverseLeft = node => {
  let current = node
  while (current.left) {
    current = current.left
  }
  return current
}

/**
 * Given an input node `node`, iteratively traverse its parents, checking to see
 * if any parent's `key` is greater than `node`'s `key`. If a parent's `key` is
 * greater, return that parent, if not return `null`.
 *
 * @param {Node} node - A node in a binary search tree
 * @returns {Node | null}
 */
const traverseParents = node => {
  const val = node.val
  let current = node

  while (current.parent) {
    if (current.key > val) return current
    current = current.parent
  }
  return null
}

// Example:

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(9);

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;

// Print the key of the successor node
if (succ) {
  console.log(`Inorder successor of ${test.key} is ${succ.key}`); // 11
} else {
  console.log("Inorder successor does not exist");
}
