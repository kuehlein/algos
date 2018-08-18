// Time: O(n)
// Space: O(1)
// where n is the length of the input array
const minimumSwaps = arr => {
  let minSwaps = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (i < arr[i] - 1) {
      swap(arr, i, Math.min(arr.length - 1, arr[i] - 1));
      minSwaps++;
      i--;
    }
  }
  return minSwaps;
};

const swap = (arr, i, j) => {
  arr[i] ^= arr[j];
  arr[j] ^= arr[i];
  arr[i] ^= arr[j];
};

console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6])); // 5
