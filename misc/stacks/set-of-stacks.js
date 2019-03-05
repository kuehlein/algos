// given a limit, create a stack full of stacks, the inner stacks are limited by limit

class SetOfStacks {
  constructor(limit) {
    this.stackSet = []
    this.limit = limit
  }

  // O(1) time | O(1) space
  push(elem) {
    if (!this.stackSet.length || this.stackSet[this.stackSet.length - 1].length === this.limit) {
      this.stackSet.push([elem])
    } else {
      this.stackSet[this.stackSet.length - 1].push(elem)
    }
  }

  // O(1) time | O(1) space
  pop(stack = this.stackSet.length - 1) {
    let val = null
    if (this.stackSet.length) {
      val = this.stackSet[stack].pop()
      if (!this.stackSet[stack].length) {
        this.removeFromMiddle(stack)
      }
    }
    return val
  }

  // O(n) time | O(1) space
  removeFromMiddle(stack) {
    for (let i = stack + 1; i < this.stackSet.length; i++) {
      this.swap(i - 1, i)
    }
    this.stackSet.pop()
  }

  swap(i, j) {
    const temp = this.stackSet[i]
    this.stackSet[i] = this.stackSet[j]
    this.stackSet[j] = temp
  }
}

const plates = new SetOfStacks(3)
plates.push("plate")
plates.push("plate")
plates.push("plate")
plates.push("(((((((")
plates.push("(((((((")
plates.push("(((((((")
plates.push("&&&&&&&")
plates.push("&&&&&&&")
plates.push("&&&&&&&")
plates.push("4567890")
plates.push("4567890")
plates.push("4567890")
plates.push("DDDDDDD")
plates.push("DDDDDDD")
plates.push("DDDDDDD")
plates.push("{{{{}}}}")
plates.push("{{{{}}}}")
plates.push("{{{{}}}}")
plates.push("LAST!!!")
plates.push("LAST!!!")
plates.push("LAST!!!")
console.log(plates.stackSet)
console.log()
plates.pop(3)
console.log(plates.stackSet)
console.log()
plates.pop(3)
console.log(plates.stackSet)
console.log()
plates.pop(3)
console.log(plates.stackSet)
console.log()
