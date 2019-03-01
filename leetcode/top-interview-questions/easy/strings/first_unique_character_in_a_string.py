# * ----------------------------------------------------------------------------
# * -------------- * *FIRST UNIQUE CHARACTER IN A STRING* * --------------------
# * ----------------------------------------------------------------------------

# Given a string, find the first non-repeating character in it and return it's index.
# If it doesn't exist, return -1.

# time: O(n)
# space: O(1)

def firstUniqChar(s: str) -> int:
    '''
    hi
    '''
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    res = len(s)
    for x in alphabet:
        index = s.find(x)
        if index == -1:
            continue
        if index == s.rfind(x):
            res = min(res, index)
    return -1 if res == len(s) else res


# time: O(n)
# space: O(1)

def firstUniqChar1(s: str) -> int:
    '''
    Build a bit vector that represents all characters that appear once. Then iterate
    through input string `s`, converting each character along the way into a mask
    and comparing the mask against the vector for a match. If there is a match,
    return the index where the match was found.
    '''
    vector = buildBitVector(s)
    for i in range(len(s)):
        mask = 1 << (ord(s[i]) - 97)
        if vector & mask != 0:
            return i
    return -1

def buildBitVector(s: str) -> int:
    '''
    Iterate through input string `s` building two bit vectors along the way. If
    the corresponding bit in `vector1` is `1`, the char is seen once already.
    If the corresponding bit in `vector2` is `1`, the char has only been seen once.
    AND the two vectors together in the return value to create a vector of values
    that have only been seen once.
    '''
    vector1 = 0
    vector2 = 67108863 # int('11111111111111111111111111', 2) - `1` for each letter of alphabet
    for char in s:
        mask = 1 << (ord(char) - 97)
        if vector1 & mask == 0:
            vector1 ^= mask
        elif vector2 ^ mask < vector2:
            vector2 ^= mask
    return vector1 & vector2

# Examples:

str1 = 'leetcode'
print(firstUniqChar(str1) == 0)

str2 = 'loveleetcode'
print(firstUniqChar(str2) == 2)
