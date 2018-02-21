# time: O(n)
# space: O(1)
#: where n is the size of the input array
def largestProduct(array):
    largest = [None, None, None]
    smallest = [None, None]
    for num in array:
        checkPositiveNumber(largest, num) if num > 0 else checkNegativeNumber(smallest, num)
    return findLargerProduct(largest, smallest)

def checkPositiveNumber(array, num):
    if array[2] is None or array[2] < num:
        swapNumber(array, num, 2)
    elif array[1] is None or array[1] < num:
        swapNumber(array, num, 1)
    elif array[0] is None or array[0] < num:
        swapNumber(array, num, 0)

def checkNegativeNumber(array, num):
    if array[1] is None or array[1] > num:
        swapNumber(array, num, 1)
    elif array[0] is None or array[0] > num:
        swapNumber(array, num, 0)

def swapNumber(array, num, idx):
    for i in range(idx + 1):
        if i == idx:
            array[idx] = num
        else:
            array[i] = array[i + 1]

def findLargerProduct(largest, smallest):
    positives = largest[2] * largest[1] * largest[0]
    negatives = largest[2] * smallest[1] * smallest[0]
    return positives if positives > negatives else negatives

print(largestProduct([-11, -12, 1, -13, 2, 3, 10, 4, 5, 5, 6, 7, 8, 10, 10]))
