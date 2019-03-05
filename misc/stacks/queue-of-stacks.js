// make a queue out of two stacks

// O(n) time | O(1) space
class QueueOfStacks {
  constructor() {
    this.stack1 = []
    this.stack2 = []
  }

  // O(1) time | O(1) space *see flip for explanation*
  push(val) {
    if (this.stack2.length) this.flip(this.stack2, this.stack1)
    this.stack1.push(val)
  }

  // O(1) time | O(1) space *see flip for explanation*
  remove() {
    if (this.stack1.length) this.flip(this.stack1, this.stack2)
    return this.stack2.length ? this.stack2.pop() : null
  }

  // O(n) time | O(1) space --- this action makes things O(n) time, not adding or removing
  flip(full, empty) {
    for (let i = full.length - 1; i >= 0; i--) {
      empty.push(full.pop())
    }
  }
}

const queue = new QueueOfStacks()
queue.push(1)
queue.push(2)
queue.push(3)
queue.push(4)
queue.push(5)
console.log(queue.remove()) // 1
console.log(queue.remove()) // 2
queue.push(6)
console.log(queue.remove()) // 3
console.log(queue.remove()) // 4
console.log(queue.remove()) // 5
console.log(queue.remove()) // 6
queue.push(7)
console.log(queue.remove()) // 7
console.log(queue.remove()) // null
queue.push(8)
console.log(queue.remove()) // 8
