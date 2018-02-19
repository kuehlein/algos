// time: O(n^2)
// space: O(n)
// where n is the size of the array
function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b)
	const sums = []
	for (let i = 0; i < array.length - 2; i++) {
		let left = i + 1
		let right = array.length - 1
		while (left < right) {
			const current = array[left] + array[i] + array[right]
			if (current === targetSum) {
				sums.push([array[i], array[left], array[right]])
				left++
				right--
			} else if (current < targetSum) {
				left++
			} else if (current > targetSum) {
				right--
			}
		}
	}
	return sums
}

threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0) // [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
