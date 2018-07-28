# time: O(nlog(n) + mlog(m))
# space: O(1)
# where n and m are the lengths of the two input arrays
def smallestDifference(arrayOne, arrayTwo):
    arrayOne.sort()
    arrayTwo.sort()
    i = 0
    j = 0
    smallest = float("inf")
    current = float("inf")
    smallestPair = []
    while i < len(arrayOne) and j < len(arrayTwo):
        first = arrayOne[i]
        second = arrayTwo[j]
        if first < second:
            current = second - first
            i += 1
        elif second < first:
            current = first - second
            j += 1
        else:
            return [first, second]
        if current < smallest:
            smallest = current
            smallestPair = [first, second]
    return smallestPair

print(smallestDifference(one, two))
