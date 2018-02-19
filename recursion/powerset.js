// time: O(2^n * n)
// space: O(2^n * n)
// where n is the length of the array
function powerset(array) {
	const subsets = [[]]
	for (const elem of array) {
		const length = subsets.length
		for (let i = 0; i < length; i++) {
			subsets.push(subsets[i].concat(elem))
		}
	}
	return subsets
}

powerset([1, 2, 3]) // [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]
