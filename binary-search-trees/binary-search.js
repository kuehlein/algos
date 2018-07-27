// time: O(log(n))
// space: O(1)
// where n is the number of nodes in the tree
const binarySearch = (array, target) => {
  let left = 0
  let right = array.length - 1

  while (left <= right) {
    const middle = Math.floor((left + right) / 2)

    if (array[middle] > target) {
      right = middle - 1
    } else if (array[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }

  return -1
}

console.log([1, 5, 23, 111], 111) // 3
