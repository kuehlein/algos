// remove duplicate values in a linked list

// O(n) time | O(n) space
const removeDups1 = list => {
  const cache = { [list.value]: true }
  let current = list

  while (current.next) {
    if (current.next.value in cache) current.next = current.next.next
    else {
      cache[current.val] = true
      current = current.next
    }
  }
}

const list1 = new LinkedList()
list1.addNode(1)
list1.addNode(2)
list1.addNode(3)
list1.addNode(1)
list1.addNode(1)
list1.addNode(1)
list1.addNode(1)
list1.addNode(2)
list1.addNode(5)

removeDups1(list1.head)

console.log(list1) // 1 -> 2 -> 3 -> 5

// ---------------------------------------------------------------------------

// O(n) time | O(1) space
const removeDups2 = list => {
  let current = list
  let slow = current
  let fast = current.next

  while (current.next) {
    if (fast.value === current.value) {
      slow.next = slow.next.next
      fast = slow.next
    } else if (!fast.next) {
      current = current.next
      slow = current
      fast = current.next
    } else {
      slow = slow.next
      fast = fast.next
    }
  }
}


const list2 = new LinkedList()
list2.addNode(1)
list2.addNode(2)
list2.addNode(3)
list2.addNode(1)
list2.addNode(1)
list2.addNode(1)
list2.addNode(1)
list2.addNode(2)
list2.addNode(5)

removeDups2(list2.head)

console.log(list2) // 1 -> 2 -> 3 -> 5

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

