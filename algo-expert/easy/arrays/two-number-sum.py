# time: O(n^2)
# space: O(1)
# where n is the length of the input array
def twoNumberSum1(array, targetSum):
    for i in range(len(array) - 1):
		firstNum = array[i]
		for j in range(i + 1, len(array)):
			  secondNum = array[j]
			  if firstNum + secondNum == targetSum:
				    return sorted([firstNum, secondNum])
	  return []


# time: O(n)
# space: O(n)
# where n is the length of the input array
def twoNumberSum2(array, targertSum):
    nums = {}
    for num in array:
        potentialMatch = targertSum - num
        if potentialMatch in nums:
            return sorted([potentialMatch, num])
        else:
            nums[num] = True
    return []


# time: O(n(log(n)))
# space: O(1)
# where n is the length of the input array
def twoNumberSum3(array, targetSum):
    array.sort()
    left = 0
    right = len(array) - 1
    while left < right:
        currentSum = array[left] array[right]
        if currentSum == targetSum:
            return [array[left], array[right]]
        elif currentSum < targetSum:
            left += 1
        elif currentSum > targetSum:
            right -= 1
    return []


twoNumberSum1([3, 5, -4, 8, 11, 1, -1, 6], 10) #[-1, 11]
