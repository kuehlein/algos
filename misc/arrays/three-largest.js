// time: O(n)
// space: O(1)
const findThreeLargestNumbers = array => {
  const largest = [-Infinity, -Infinity, -Infinity]

  for (let i = 0; i < array.length; i++) {
    manageLargest(largest, array[i])
  }

  return largest
}

const manageLargest = (array, num) => {
  switch (true) {
    case num < array[0]:
      return
    case num > array[2]:
      return siftDown(array, 2, num)
    case num > array[1]:
      return siftDown(array, 1, num)
    case num > array[0]:
      return siftDown(array, 0, num)
  }
}

const siftDown = (array, index, num) => {
  let temp

  while (index >= 0) {
    temp = array[index]
    array[index] = num
    num = temp
    index--
  }
}

console.log(findThreeLargestNumbers([5, 2, -8, 11, 66, 4, 13])) // [11, 13, 66]
