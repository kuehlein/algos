# * ----------------------------------------------------------------------------
# * -------------- * *FIRST UNIQUE CHARACTER IN A STRING* * --------------------
# * ----------------------------------------------------------------------------

# Given a string, find the first non-repeating character in it and return it's index.
# If it doesn't exist, return -1.

# time: O(n) - O(2n * 26)
#  - looping through each char in the alphabet is constant time, searching for
#    each character in `s` is n worst case, but average case turns out to be much
#    better because you are likely to encounter most characters early on in the string.
# space: O(1)

def firstUniqChar1(s: str) -> int:
    '''
    Iterate through the alphabet, finding the first and last occurrence of each character. If a character is not found, continue, if it is, check to see if the first and last occurrence are at the same index, and if so, return that index. If no index is found, return -1.
    '''
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    res = len(s)
    for char in alphabet:
        index = s.find(char)
        if index == -1:
            continue
        if index == s.rfind(char):
            res = min(res, index)
    return -1 if res == len(s) else res

# time: O(n)
# space: O(1)

def firstUniqChar2(s: str) -> int:
    '''
    Build a bit vector that represents all characters that appear once. Then iterate through input string `s`, converting each character along the way into a mask and comparing the mask against the vector for a match. If there is a match, return the index where the match was found.
    '''
    vector = buildBitVector(s)
    for i in range(len(s)):
        mask = 1 << (ord(s[i]) - 97)
        if vector & mask != 0:
            return i
    return -1

def buildBitVector(s: str) -> int:
    '''
    Iterate through input string `s` building two bit vectors along the way. If the corresponding bit in `vector1` is `1`, the char is seen once already. If the corresponding bit in `vector2` is `1`, the char has only been seen once. AND the two vectors together in the return value to create a vector of values that have only been seen once.
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
print(firstUniqChar1(str1) == 0)

str2 = 'loveleetcode'
print(firstUniqChar1(str2) == 2)
