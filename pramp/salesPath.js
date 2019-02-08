/**
 * * ---------------------------------------------------------------------------
 * * --------------------------- * *SALES PATH* * ------------------------------
 * * ---------------------------------------------------------------------------
 */

/**
 * The car manufacturer Honda holds their distribution system in the form of a
 * tree (not necessarily binary). The root is the company itself, and every node
 * in the tree represents a car distributor that receives cars from the parent
 * node and ships them to its children nodes. The leaf nodes are car dealerships
 * that sell cars direct to consumers. In addition, every node holds an integer
 * that is the cost of shipping a car to it.
 */

/**
 * * *For Example:* *
 *
 *                  0
 *             /    |    \
 *         /        |        \
 *       5          3          6
 *     /          /   \      /   \
 *    4          2     0    1     5
 *              /     /
 *             1    10
 *            /
 *           1
 */

/**
 * A path from Honda’s factory to a car dealership, which is a path from the root
 * to a leaf in the tree, is called a Sales Path. The cost of a Sales Path is the
 * sum of the costs for every node in the path. For example, in the tree above
 * one Sales Path is 0→3→0→10, and its cost is 13 (0+3+0+10).
 *
 * Honda wishes to find the minimal Sales Path cost in its distribution tree.
 * Given a node rootNode, write a function getCheapestCost that calculates the
 * minimal Sales Path cost in the tree.
 *
 * Implement your function in the most efficient manner and analyze its time and
 * space complexities.
 */

/**
 * * *Constraints* *
 *
 *   - [time-limit] 5000ms
 *
 *   - [input] Node rootNode
 *     - 0 ≤ rootNode.cost ≤ 100000
 *
 *   - [output] integer
 */

// where n is the number of nodes in the tree...
// time: O(n) - to visit n nodes
// space: O(1) - no extra space is used

/**
 * Invoke a helper function to recursively find solution.
 *
 * @param {n-ary tree} rootNode - a tree with a cost value any number of child nodes
 * @returns {number} minimal cost to visit a leaf node
 */
const getCheapestCost = rootNode => getCheapestCostHelper(rootNode, rootNode.cost)

/**
 * Recursively traverse nodes in the given tree to calculate the lowest cost path.
 * each iteration returns the cost of the node currently being visited, and its
 * lowest cost child node. When the callstack resolves, the lowest cost path will
 * be returned.
 *
 * @param {*} node - node we are currently visiting
 * @param {*} total - the running total of this path
 */
const getCheapestCostHelper = (node, total) => {
  let lowest = Infinity

  for (let i = 0; i < node.children.length; i++) {
    const val = getCheapestCostHelper(node.children[i], total + node.cost)

    lowest = Math.min(lowest, val)
  }
  return lowest === Infinity ? node.cost : lowest + node.cost
}

/******************************************
 * Use the helper code below to implement *
 * and test your function above           *
 ******************************************/

/**
 * Constructor to create a new Node.
 *
 * @param {number} cost - cost of shipping to a location
 */
const Node = cost => {
  this.cost = cost;
  this.children = [];
}

const tree = new Node(0)

// Depth: A
const childA0 = new Node(5) // 0th index
const childA1 = new Node(3) // 1st index
const childA2 = new Node(6) // 2nd index

// Depth: B
const childB0 = new Node(4)
const childB1 = new Node(2)
const childB2 = new Node(0)
const childB3 = new Node(1)
const childB4 = new Node(5)

// Depth: C
const childC0 = new Node(1)
const childC1 = new Node(10)

// Depth: D
const childD0 = new Node(1)

// ------------------------------------------------------------

tree.children.push(childA0, childA1, childA2) // A

tree.children[0].children.push(childB0)          // B
tree.children[1].children.push(childB1, childB2) // B
tree.children[2].children.push(childB3, childB4) // B

tree.children[1].children[0].children.push(childC0) // C
tree.children[1].children[1].children.push(childC1) // C

tree.children[1].children[0].children[0].children.push(childD0) // D

// ------------------------------------------------------------

console.log(getCheapestCost(tree)) // 7
