// Best: O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
function bubbleSort(array) {
  let window = 0
  let i = 0

  while (window < array.length - 1) {
    if (array[i] > array[i + 1]) {
      swap(array, i)
    } else {
      i++

      if (i === array.length) {
        i = 0
        window++
      }
    }
  }

  return array
}
function swap(array, i) {
  array[i] ^= array[i + 1]
  array[i + 1] ^= array[i]
  array[i] ^= array[i + 1]
}
