// Although all of the methods on the MinMaxStack are O(1) time and space
// the MinMaxStack itself is O(n) space because we are keeping 2 stacks
// to use O(1) space, condense the two stacks into one and wrap the value added
// in the `newMinMax` object as a `value`

class MinMaxStack {
  constructor() {
  this.stack = []
  this.minMaxStack = []
  }

  // O(1) time | O(1) space
  peek() {
    return this.stack[this.stack.length - 1]
  }

  // O(1) time | O(1) space
  pop() {
  this.minMaxStack.pop()
    return this.stack.pop()
  }

  // O(1) time | O(1) space
  push(number) {
  const newMinMax = { min: number, max: number }
  if (this.minMaxStack.length) {
  const prev = this.minMaxStack[this.minMaxStack.length - 1]
  newMinMax.min = Math.min(prev.min, number)
  newMinMax.max = Math.max(prev.max, number)
  }
  this.minMaxStack.push(newMinMax)
    this.stack.push(number)
  }

  // O(1) time | O(1) space
  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min
  }

  // O(1) time | O(1) space
  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max
  }
}

const mmStack = new MinMaxStack()
mmStack.push(5)
console.log(
  mmStack.peak(), // 5
  mmStack.min(),  // 5
  mmStack.max()   // 5
)
mmStack.push(7)
console.log(
  mmStack.peak(), // 7
  mmStack.min(),  // 5
  mmStack.max()   // 7
)
mmStack.push(2)
console.log(
  mmStack.peak(), // 2
  mmStack.min(),  // 2
  mmStack.max()   // 7
)
console.log(
  mmStack.pop(),  // 2
  mmStack.peak(), // 7
  mmStack.min(),  // 5
  mmStack.max()   // 7
)
console.log(
  mmStack.pop(),  // 7
  mmStack.peak(), // 5
  mmStack.min(),  // 5
  mmStack.max()   // 5
)
