// modified version of CTCI linkedListSum --- thier version added an extra unneccesary step:
// turn the result into a linked list like the input

// O(n) time | O(1) space
const linkedListSum = (list1, list2) => {
  let num1 = 0
  let num2 = 0
  let current1 = list1
  let current2 = list2
  let factor = 1

  while (current1 || current2) {
    if (current1) {
      num1 += current1.value * factor
      current1 = current1.next
    }
    if (current2) {
      num2 += current2.value * factor
      current2 = current2.next
    }
    factor *= 10
  }
  return num1 + num2
}

const list1 = new LinkedList()
list1.addNode(7)
list1.addNode(1)
list1.addNode(6)

const list2 = new LinkedList()
list2.addNode(5)
list2.addNode(9)
list2.addNode(2)

console.log(linkedListSum(list1.head, list2.head))


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
