// time: O(v + e)
// space: O(v)
// where v is the number of verticies on the input graph
// and e is the number of edges
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [this];
    let current;

    while (queue.length) {
      current = queue.shift();
      array.push(current.name);

      for (const child of current.children) {
        queue.push(child);
      }
    }

    return array;
  }
}
