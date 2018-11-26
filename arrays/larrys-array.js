// https://www.hackerrank.com/challenges/larrys-array/problem

// Determine if the input array can be sorted using the following shifts:
/*
ABC -> BCA -> CAB -> ABC
*/
// the array is filled with natural numbers starting with 1 and incremented by 1
// e.g. [1, 2, 3, 4, 5, 6, etc.] *this is the input array sorted*

// O(n + m) time | O(1) space
// where n is the length of the array
// and m is the number of shifts that need to be made to sort the array
const larrysArray = arr => {
  const indices = {
    unsorted: 0, // unsorted index (unsorted + 1 === val at that index)
    i: 0
  }

  while (indices.unsorted < arr.length - 3) {
    if (arr[indices.i] > arr.length) return "NO" // not valid array

    if (arr[indices.i] === indices.unsorted + 1 && indices.i === indices.unsorted) {
      indices.unsorted++
      indices.i++
    } else {
      arr[indices.i] === indices.unsorted + 1
        ? handleMatch(arr, indices)
        : indices.i++
    }
  }
  return isValid(arr)
}

const handleMatch = (arr, indices) => {
  if (indices.i > indices.unsorted + 1) {
    shift(arr, indices.i - 2, 2)
    indices.i -= 2
  } else if (indices.i === indices.unsorted + 1) {
    shift(arr, indices.i - 1, 1)
    indices.i--
  }
}

const shift = (arr, i, numOfShifts) => {
  if (numOfShifts === 1) {
    swap(arr, i, i + 2) // ABC -> CBA
    swap(arr, i, i + 1) // CBA -> BCA
  } else if (numOfShifts === 2) {
    swap(arr, i, i + 1) // ABC -> BAC
    swap(arr, i, i + 2) // BAC -> CAB
  }
}

const swap = (arr, i, j) => {
  arr[i] ^= arr[j]
  arr[j] ^= arr[i]
  arr[i] ^= arr[j]
}

const isValid = arr => {
  // from last
  const last = arr[arr.length - 1]
  const second = arr[arr.length - 2]
  const third = arr[arr.length - 3]

  return second - third === 2 || third - last === 2 || last - second === 2
    ? "NO"
    : "YES"
}

const arr1 = [9, 6, 8, 12, 3, 7, 1, 11, 10, 2, 5, 4]
const arr2 = [17, 21, 2, 1, 16, 9, 12, 11, 6, 18, 20, 7, 14, 8, 19, 10, 3, 4, 13, 5, 15]
const arr3 = [5, 8, 13, 3, 10, 4, 12, 1, 2, 7, 14, 6, 15, 11, 9]
const arr4 = [8, 10, 6, 11, 7, 1, 9, 12, 3, 5, 13, 4, 2]
const arr5 = [7, 9, 15, 8, 10, 16, 6, 14, 5, 13, 17, 12, 3, 11, 4, 1, 18, 2]

console.log(larrysArray(arr1)) // "NO"
console.log(larrysArray(arr2)) // "YES"
console.log(larrysArray(arr3)) // "NO"
console.log(larrysArray(arr4)) // "YES"
console.log(larrysArray(arr5)) // "NO"
