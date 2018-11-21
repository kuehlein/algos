// given a middle node in a linked list, delete that node

// O(1) time | O(1) space
const deleteMiddleNode = node => {
  node.value = node.next.value
  node.next = node.next.next
}

deleteMiddleNode(findNode(list2.head, 1))

console.log(list2)

// ---------------------------- for tests only -------------------------------
class LinkedList {
constructor() {
  this.head = null
  this.tail = null
}

addNode(value) {
  const node = new Node(value)

  if (this.head) {
    this.tail.next = node
    this.tail = node
  } else {
    this.head = node
    this.tail = node
  }
}
}

class Node {
constructor(value) {
  this.value = value
  this.next = null
}
}

const list2 = new LinkedList()
list2.addNode(1)
list2.addNode(3)
list2.addNode(5)
list2.addNode(7)

const findNode = (list, num) => {
let current = list
for (let i = 1; i <= num; i++){
  current = current.next
}
return current
}
