/*
 * You are given the length of an array (n) and an array of sub-arrays (queries)
 * containing instructions on how to manipulate the array. Each set of
 * instructions has a starting index (queries[i][0]), an ending index (queries[i][1]),
 * and an amount (queries[i][2]) to add to each element between the prior bounds.
 * The array is 1-indexed, meaning that if queries[i][0] = 1, arr[0] is the position.
 * The range is inclusive. Return the maximum value in this array after manipulation.
 */

// Time: O(n + m)
// Space: O(n)
// Where n is the desired length of the array and m is the number of instructions given
const arrayManipulation = (n, queries) => findMax(buildArr(n, queries));

const buildArr = (n, queries) => {
  const arr = new Array(n).fill(0);
  for (let i = 0; i < queries.length; i++) {
    arr[queries[i][0] - 1] += queries[i][2];
    if (queries[i][1] < n) arr[queries[i][1]] -= queries[i][2];
  }
  return arr;
};

const findMax = arr => {
  let sum = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (max < sum) max = sum;
  }
  return max;
};

const queries = [[2, 3, 603], [1, 1, 286], [4, 4, 882]];

console.log(arrayManipulation(5, queries)); // 882
