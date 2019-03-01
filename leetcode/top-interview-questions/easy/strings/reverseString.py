# * ----------------------------------------------------------------------------
# * ------------------------- * *REVERSE STRING* * -----------------------------
# * ----------------------------------------------------------------------------

# Write a function that reverses a string. The input string is given as an array
# of characters char[].

# Do not allocate extra space for another array, you must do this by modifying the
# input array in-place with O(1) extra memory.

# You may assume all the characters consist of printable ascii characters.

# time: O(n)
# space: O(1)

from typing import List

def reverseString(s: List[str]) -> None:
  '''
  Using a left and right pointer, swap all of the values in the input list `s`.
  '''
  left = 0
  right = len(s) - 1
  while left < right:
    s[left], s[right] = s[right], s[left]
    left += 1
    right -= 1


# Examples:

arr1 = ['h', 'e', 'l', 'l', 'o']
reverseString(arr1)
print(arr1 == ['o', 'l', 'l', 'e', 'h'])

arr2 = ['h', 'a', 'n', 'n', 'a', 'h']
reverseString(arr2)
print(arr2 == ['h', 'a', 'n', 'n', 'a', 'h'])
