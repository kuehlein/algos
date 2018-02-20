# time: O(n)
# space: O(1)
# where n is the length of the input array
def findThreeLargestNumbers(array):
    threeLargest = [None, None, None]
    for num in array:
        updateLargest(threeLargest, num)
    return threeLargest

def updateLargest(array, num):
    if array[2] is None or num > array[2]:
        shiftAndUpdate(array, num, 2)
    elif array[1] is None or num > array[1]:
        shiftAndUpdate(array, num, 1)
    elif array[0] is None or num > array[0]:
        shiftAndUpdate(array, num, 0)

def shiftAndUpdate(array, num, idx):
    for i in range(idx + 1):
        if i == idx:
            array[i] = num
        else:
            array[i] = array[i + 1]


print(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7])) # [18, 141, 541]
