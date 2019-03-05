// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.

// O(1) time | O(1) space --- *the array is a fixed size, thus constant time*
const miniMaxSum = arr => {
  let lowest = 0  // index
  let highest = 0 // index
  let sum = 0     // actual value

  for (let i = arr.length - 1; i > 0; i--) {
      if (arr[i] < arr[lowest]) {
          if (lowest !== highest) sum += arr[lowest]
          lowest = i
      } else if (arr[i] > arr[highest]) {
          if (lowest !== highest) sum += arr[highest]
          highest = i
      } else {
          sum += arr[i]
      }
  }
  if (lowest === highest) console.log(sum, sum) // the array has one value repeated
  else console.log(sum + arr[lowest], sum + arr[highest])
}

miniMaxSum([1, 2, 3, 4, 5]) // 10, 14
miniMaxSum([5, 5, 5, 5, 5]) // 20, 20
