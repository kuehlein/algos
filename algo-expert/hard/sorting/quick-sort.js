/* eslint-disable */

// Best: O(nlog(n)) time | O(log(n)) space
// Average: O(nlog(n)) time | O(log(n)) space
// Worst: O(n^2) time | O(log(n)) space
function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

// ! First Loop
// array:    [4, 2, 3, 5, 1]
// startIdx: 0
// endIdx:   4
// pivot:    0
// leftIdx:  1
// rightIdx: 4

// [4, 2, 3, 5, 1]

// !

// quicksort takes a pivot index, and makes sure that vals to the left are less,
// and values to the right are greater, changing the window with each recursive loop
// effectively sorting the array

// array:    - thing to be sorted
// startIdx: - start of window
// endIdx:   - end of window
// pivot:    - value to be sorted during this recursive loop
// leftIdx:  - current val being checked against pivot (less than pivot)
// rightIdx: - current val being checked against pivot (greater than pivot)

function quickSortHelper(array, startIdx, endIdx) {
  if (startIdx >= endIdx) return; // base case --- start and end points cannot overlap
  const pivotIdx = startIdx; // index that is being sorted into place this loop
  let leftIdx = startIdx + 1; // left-most index in window
  let rightIdx = endIdx; // right-most index in window
  while (rightIdx >= leftIdx) { // while there is still a window to loop through
    if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) { // if left is where right should be and vice versa, swap --- left is greater than pivot and right is less
      swap(array, leftIdx, rightIdx);
    }
    if (array[leftIdx] <= array[pivotIdx]) leftIdx++; // if left sorted with respect to piviot, move one
    if (array[rightIdx] >= array[pivotIdx]) rightIdx--; // if right is sorted with respect to pivot, move one
  }
  // by this time the right will be less than the pivot (the loop has ended --- right is less than left)
  if (pivotIdx !== rightIdx) swap(array, pivotIdx, rightIdx); // if array[pivot] not lowest val in window,
  if (rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)) { // ((where left and right crossed - 1) - left most of window < right most of window - (where right and left crossed + 1))
    quickSortHelper(array, startIdx, rightIdx - 1); // first half of new window
    quickSortHelper(array, rightIdx + 1, endIdx); // second half of new window
  } else {
    quickSortHelper(array, rightIdx + 1, endIdx); // first half of new window
    quickSortHelper(array, startIdx, rightIdx - 1); // second half of new window
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

console.log(quickSort([5, 2, 3, 1, 4])); // [1, 2, 3, 4, 5]


const quickSort1 = arr => {
  if (arr.length < 2) return arr
  quickSortHelper1(arr, 0, arr.length - 1)
  return arr
}

const quickSortHelper1 = (arr, startIdx, endIdx) => {
  if (startIdx === endIdx) return
  let pivot = startIdx
  let leftIdx = startIdx + 1
  let rightIdx = endIdx
  while (leftIdx <= rightIdx) {
    if (arr[leftIdx] > arr[pivot] && arr[rightIdx] < arr[pivot]) {
      swap(arr, leftIdx, rightIdx)
    }
    if (arr[leftIdx] <= arr[pivot]) leftIdx++
    if (arr[rightIdx] >= arr[pivot]) rightIdx++
  }
  // ...
}

const swap1 = (arr, i, j) => {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
