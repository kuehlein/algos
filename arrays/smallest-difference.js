// time: O(n(log(n)) + m(log(m)))
// space: O(1)
// where n is the first array and m is the second
function smallestDifference(arrayOne, arrayTwo) {
	arrayOne.sort((a, b) => a - b)
	arrayTwo.sort((a, b) => a - b)
  let idx1 = 0
	let idx2 = 0
	let smallest = Infinity
	let current = Infinity
	let smallestPair = []
	while (idx1 < arrayOne.length && idx2 < arrayTwo.length) {
		let first = arrayOne[idx1]
		let second = arrayTwo[idx2]
		if (first < second) {
			current = second - first
			idx1++
		} else if (second < first) {
			current = first - second
			idx2++
		} else return [first, second]
		if (smallest > current) {
			smallest = current
			smallestPair = [first, second]
		}
	}
	return smallestPair
}

smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]) // [28, 26]
