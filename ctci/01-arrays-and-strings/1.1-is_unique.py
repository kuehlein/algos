# * ----------------------------------------------------------------------------
# * --------------------------- * *IS UNIQUE* * --------------------------------
# * ----------------------------------------------------------------------------

# Implement an algorithm to determine if a string has all unique characters.

# *Follow up*
# What if you cannot use additional space?

# time: O(n)
# space: O(n) or O(1) - depending on whether or not you consider a fixed limit of
# characters to be constant

def isUnique(s: str) -> bool:
    '''
    For each `char` in input string `s`, compare it against a cache. If any given character is in the cache, return `False`, if every character has been seen without `False` being returned, return `True`.
    '''
    if len(s) > 128: # 128 for ascii, 256 for extended ascii
        return False
    cache = {}
    for char in s:
        if char in cache:
            return False
        cache[char] = True
    return True

# If the input is comprised solely of characters in the alphabet, this next
# approach is optimal:

# time: O(n)
# space: O(1)

def isUniqueBitVector(s: str) -> bool:
    '''
    Map each character to a place in an int to create a mask. If after ANDing the vector and the mask the result is not 0, this character has already been seen, so `False` should be returned. If every character is seen without returning `False`, return `True`.
    '''
    if len(s) > 26:
        return False
    vector = 0
    for char in s:
        mask = 1 << ord(char) - 76
        if vector & mask != 0:
            return False
        vector ^= mask
    return True

# Examples:

str1 = 'abcdefghijklmnopqrstuvwxyz'
print(isUnique(str1) == True)

str2 = 'abcdefga'
print(isUnique(str2) == False)

str3 = 'thisnorep'
print(isUnique(str3) == True)
