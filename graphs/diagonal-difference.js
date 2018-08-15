// Time: O(n)
// Space: O(1)
// where n is the length of the rows (the matrix is a square)
const diagonalDifference = arr =>
  Math.abs(traverseDiagonal(arr) - traverseDiagonal(arr, arr.length - 1));

const traverseDiagonal = (arr, direction) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let row;
    if (direction === 0) {
      row = 0;
    } else {
      row = direction-- || i;
    }
    sum += arr[row][i];
  }
  return sum;
};

const matrix = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];

console.log(diagonalDifference(matrix)); // 2
