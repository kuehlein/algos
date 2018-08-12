// Best: O(nlog(n)) time | O(nlog(n)) space
// Average: O(nlog(n)) time | O(nlog(n)) space
// Worst: O(nlog(n)) time | O(nlog(n)) space
function mergeSort(array) {
  if (array.length <= 1) return array;
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);
  return mergeSortedArrays(mergeSort(left), mergeSort(right));
}

function mergeSortedArrays(left, right) {
  const sorted = new Array(left.length + right.length);
  let k = 0;
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    sorted[k++] = left[i] <= right[j] ? left[i++] : right[j++];
  }
  while (i < left.length) {
    sorted[k++] = left[i++];
  }
  while (j < right.length) {
    sorted[k++] = right[j++];
  }
  return sorted;
}

// Best: O(nlog(n)) time | O(n) space
// Average: O(nlog(n)) time | O(n) space
// Worst: O(nlog(n)) time | O(n) space
function mergeSortOptimalSpace(array) {
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelperOptimalSpace(array, 0, array.length - 1, auxiliaryArray);
  return array;
}

function mergeSortHelperOptimalSpace(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelperOptimalSpace(auxiliaryArray, startIdx, middleIdx, mainArray);
  mergeSortHelperOptimalSpace(auxiliaryArray, middleIdx + 1, endIdx, mainArray);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    mainArray[k++] =
      auxiliaryArray[i] <= auxiliaryArray[j]
        ? auxiliaryArray[i++]
        : auxiliaryArray[j++];
  }
  while (i <= middleIdx) {
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    mainArray[k++] = auxiliaryArray[j++];
  }
}

console.log(mergeSort([4, 2, 3, 5, 1])); // [1, 2, 3, 4, 5]
