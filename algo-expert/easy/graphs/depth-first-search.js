// time: O(v + e)
// space: O(v)
// where v is the number of vertices of the input graph and e is the number of edges of the input graph
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(arr) {
    arr.push(this.name)
    for (const child of this.children) {
      child.depthFirstSearch(arr)
    }
    return arr
  }
}

const test = new Node("A")
test.addChild("B").addChild("C").addChild("D").addChild("E")
test.children[1].addChild("F")

console.log(test.depthFirstSearch([])) //["A", "B", "C", "F", "D", "E"]
