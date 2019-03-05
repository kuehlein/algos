# time: O(n * K)
# space: O(1)
# where n is the size of the input array and k is the degree to which the array is messed
def sortKMessedArray(array, k):
    for i in range(len(array) - 1):
        for j in range(1, k + 1):
            print(i, j)
            if i + j < len(array) and array[i] > array[i + j]:
                swap(i, i + j, array)
    return array

def swap(i, j, array):
    temp = array[i]
    array[i] = array[j]
    array[j] = temp


print(sortKMessedArray([2, 4, 1, 3, 5], 2)) # [1, 2, 3, 4, 5]
