# time: O(n * 2^n)
# space: O(n * 2^n)
# where n is the length of the input array
def powersetIterative(array):
    subsets = [[]]
    for elem in array:
        for i in range(len(subsets)):
            current = subsets[i]
            subsets.append(current + [elem])
    return subsets

def powersetRecursive(array, i = None):
    if i is None:
        i = len(array) - 1
    if i < 0:
        return [[]]
    elem = array[i]
    subsets = powersetRecursive(array, i - 1)
    for i in range(len(subsets)):
        currentSubset = subsets[i]
        subsets.append(currentSubset + [elem])
    return subsets

print(powersetIterative([1, 2, 3])) # [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
