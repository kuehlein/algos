// time: O(n)
// space: O(n)
const twoNumberSum1 = (array, targetSum) => {
  const cache = {}

  for (let i = 0; i < array.length; i++) {
    const val = targetSum - array[i]

    if (array[i] in cache) {
      return [Math.min(array[i], cache[array[i]]), Math.max(array[i], cache[array[i]])]
    } else {
      cache[val] = array[i]
    }
  }

  return []
}

// time: O(nlog(n))
// space: O(1)
const twoNumberSum2 = (array, targetSum) => {
  array.sort((a, b) => a - b)
  let left = 0
  let right = array.length - 1

  while (left < right) {
    if (array[left] + array[right] > targetSum) {
      right--
    } else if (array[left] + array[right] < targetSum) {
      left++
    } else {
      return [array[left], array[right]]
    }
  }

  return []
}

console.log(twoNumberSum1([-21, 301, 12, 4, 65, 56, 210, 356, 9, -47], 163)) // [-47, 210]
