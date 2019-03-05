# time: O(n^2)
# spaceL O(n)
# where n is the length of the input array
def threeNumberSum(array, target):
    sortedArray = sorted(array)
    matches = []
    for i in range(0, len(sortedArray) - 2):
        left = i + 1
        right = len(sortedArray) - 1
        while left < right:
            current = sortedArray[i] + sortedArray[left] + sortedArray[right]
            if current < target:
                left += 1
            elif current > target:
                right -= 1
            else:
                matches.append([sortedArray[i], sortedArray[left], sortedArray[right]])
                left += 1
                right -= 1
    return matches
