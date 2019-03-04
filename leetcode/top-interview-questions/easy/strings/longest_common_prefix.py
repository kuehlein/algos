# * ----------------------------------------------------------------------------
# * --------------------- * *LONGEST COMMON PREFIX* * --------------------------
# * ----------------------------------------------------------------------------

# Write a function to find the longest common prefix string amongst an array of strings.

#If there is no common prefix, return an empty string "".

# *Note*
# All given inputs are in lowercase letters a-z.

# time: O(k + n * m)
# space: O(m)
# where k is the length of the input array, n is the length of the longest word
# and m is the length of the shortest word

from typing import List

def longestCommonPrefix(strs: List[str]) -> str:
    if not strs:
        return ''
    shortest = min(strs)
    longest = max(strs)
    for i, char in enumerate(shortest):
        if char != longest[i]:
            return shortest[:i]
    return shortest

# Examples:

arr1 = ['flower','flow','flight']
print(longestCommonPrefix(arr1) == 'fl')

arr2 = ['dog','racecar','car']
print(longestCommonPrefix(arr2) == '')
# *Explanation*
# There is no common prefix among the input strings.
