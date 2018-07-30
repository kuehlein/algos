// time: O(n^2)
// space: O(1)
function findHighest(array, end) {
  let highestVal = -Infinity;
  let highestIdx;

  for (let i = 0; i < end + 1; i++) {
    if (array[i] > highestVal) {
      highestVal = array[i];
      highestIdx = i;
    }
  }

  return highestIdx;
}

function flip(array, k) {
  let left = 0;
  let right = k;

  while (left < right) {
    swap(array, left, right);
    left++;
    right--;
  }
}

function swap(array, i, j) {
  array[i] ^= array[j];
  array[j] ^= array[i];
  array[i] ^= array[j];
}

function pancakeSort(array) {
  let end = array.length - 1;
  let highest;

  while (end > 0) {
    highest = findHighest(array, end);
    flip(array, highest);
    flip(array, end);
    end--;
  }

  return array;
}

const testArr = [
  10,
  9,
  8,
  6,
  7,
  5,
  4,
  3,
  2,
  1,
  9,
  10,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1,
  10,
  9,
  8,
  7,
  6,
  5,
  4,
  3,
  2,
  1
];

console.log(pancakeSort(testArr));
