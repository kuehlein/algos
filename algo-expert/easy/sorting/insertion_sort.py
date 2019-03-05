# * ----------------------------------------------------------------------------
# * ------------------------- * *INSERTION SORT* * -----------------------------
# * ----------------------------------------------------------------------------

# Write a function that takes in an array of integers and returns a sorted version
# of that array. Use the insertion sort algorithm to sort that array.

# Best:    O(n)   time | O(1) space
# Average: O(n^2) time | O(1) space
# Worst:   O(n^2) time | O(1) space

from typing import List

def insertionSort(array: List[int]) -> List[int]:
    '''
    For each index of input `array`, check to see if the value at that index is greater than the value immediately to the left. If not, swap those two values, repeating this until that original value is in its sorted position.
    '''
    for i in range(1, len(array)):
        j = i
    while j > 0 and array[j] > array[j - 1]:
        swap(array, j)
        j -= 1
    return array

def swap(arr: List[int], i: int) -> None:
    '''
    Using bitwise XOR operator, swap `i` with the index just to its left using no additional space.
    '''
    arr[i] ^= arr[i - 1]
    arr[i - 1] ^= arr[i]
    arr[i] ^= arr[i - 1]
