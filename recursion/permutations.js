// time: O(n * n!)
// space: O(n * n!)
// where n is the length of the input array
const getPermutations = array => {
  const permutations = [];
  permutationsHelper(0, array, permutations);
  return permutations;
};

const permutationsHelper = (i, array, permutations) => {
  if (i === array.length - 1) {
    permutations.push(array.slice());
  } else {
    for (let j = i; j < array.length; j++) {
      swap(i, j, array);
      permutationsHelper(i + 1, array, permutations);
      swap(i, j, array);
    }
  }
};

const swap = (i, j, array) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

console.log(permutations([1, 2, 3]));

/*
[ [ 1, 2, 3 ],
  [ 1, 3, 2 ],
  [ 2, 1, 3 ],
  [ 2, 3, 1 ],
  [ 3, 2, 1 ],
  [ 3, 1, 2 ] ]
*/
