/**
 * Given a binary tree, design an algorithm that creates a linked list of all the
 * nodes at each depth.
 *
 * e.g. if you have a binary tree with a depth of D, your linked list will have D nodes
 */

// where n is the number of nodes on the binary tree input...
// time: O(n) - to traverse each node on the tree
// space: O(n) - for building the linked list and the space on the callstack during traversal

/**
 * List of Depths class
 */
class ListOfDepths {
  constructor(binaryTree) {
    // linked list that contains the values of the given binary tree at each depth
    this.list = this._listDepts(binaryTree)
  }

  /**
   * Invokes a recursive helper function to traverse the binary tree input.
   *
   * @param {*} binaryTree - the input binary tree to be traversed
   * @returns {linked list} linked list
   */
  _listDepts(binaryTree) {
    const list = this._newNode()
    this._listDepthsHelper(bt, list)
    return list
  }

  /**
   * Recursively traverses a binary tree input, pushing values to a linked list
   * input along the way.
   *
   * @param {*} binaryTree - the input binary tree to be traversed
   * @param {*} list - the linked list that we are adding the binary tree values to
   */
  _listDepthsHelper(binaryTree, list) {
    if (binaryTree === null) return
    list.vals.push(binaryTree.val)
    this._listDepthsHelper(binaryTree.left, this._checkForNode(list))
    this._listDepthsHelper(binaryTree.right, this._checkForNode(list))
  }

  /**
   * Creates a new node for a linked list.
   *
   * @returns {node} linked list node
   */
  _newNode() {
    return ({
      vals: [],
      next: null
    })
  }

  /**
   * Checks if the input linked list has a `next` node. If so, returns that node,
   * and if not, creates one and returns it.
   *
   * @param {*} list - the linked list that we are adding the binary tree values to
   * @returns {node} linked list node
   */
  _checkForNode(list) {
    if (list.next) return list.next
    list.next = this._newNode()
    return list.next
  }
}

// input:
const bt = {
  val: 5,
  left: {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 3, left: null, right: null },
  },
  right: {
    val: 8,
    left: { val: 6, left: null, right: null },
    right: { val: 10, left: null, right: null },
  }
}

const lod = new ListOfDepths(bt)

console.log(JSON.stringify(lod.list, null, 2))

// output:
/*

{
  "vals": [
    5
  ],
  "next": {
    "vals": [
      2,
      8
    ],
    "next": {
      "vals": [
        1,
        3,
        6,
        10
      ],
      "next": {
        "vals": [],
        "next": null
      }
    }
  }
}

*/
