// Best: O(n) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
const insertionSort = array => {
  for (let i = 1; i < array.length; i++) {
    let point = i

    while (point > 0 && array[point] < array[point - 1]) {
      swap(array, point)
      point--
    }
  }

  return array
}
const swap = (array, i) => {
  array[i] ^= array[i - 1]
  array[i - 1] ^= array[i]
  array[i] ^= array[i - 1]
}
