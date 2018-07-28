// Best: O(n^2) time | O(1) space
// Average: O(n^2) time | O(1) space
// Worst: O(n^2) time | O(1) space
const selectionSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    let selected = i

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[selected]) selected = j
    }

    if (array[i] > array[selected]) swap(array, i, selected)
  }

  return array
}
const swap = (array, i, j) => {
  array[i] ^= array[j]
  array[j] ^= array[i]
  array[i] ^= array[j]
}
