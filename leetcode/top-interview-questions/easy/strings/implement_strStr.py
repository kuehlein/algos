# * ----------------------------------------------------------------------------
# * ------------------------- * *IMPLEMENT strStr* * -----------------------------
# * ----------------------------------------------------------------------------

# Implement strStr().

# Return the index of the first occurrence of needle in haystack, or -1 if needle
# is not part of haystack.

# *Clarification*
# What should we return when needle is an empty string? This is a great question
# to ask during an interview. For the purpose of this problem, we will return `0`
# when needle is an empty string. This is consistent to C's `strstr()` and Java's
# `indexOf()`.

# time: O(n * m)
# space: O(1)
# where n is the length of `haystack` and m is the length of `needle`

def strStr(haystack: 'str', needle: 'str') -> 'int':
    '''
    Check if `needle` is in `haystack` and if so, iterate through each character character in `haystack` checking for substrings that may be equal if any characters match. Return the index of the start of the first match, or `-1` if there are no matches.
    '''
    if needle == "":
        return 0
    if needle in haystack:
        for i in range(len(haystack) - len(needle) + 1):
            if haystack[i] == needle[0]:
                if compareStr(haystack, needle, i):
                    return i
    return -1

def compareStr(haystack: str, needle: str, i: int) -> bool:
    '''
    Compare a segment of `haystack` against `needle` and check for identity. Return `False` at the first inequality. If there are none, return `True`.
    '''
    for j in range(len(needle)):
        if haystack[i + j] != needle[j]:
            return False
    return True

# Examples:

haystack1 = "hello"
needle1 = "ll"
print(strStr(haystack1, needle1) == 2)

haystack2 = "aaaaa"
needle2 = "bba"
print(strStr(haystack2, needle2) == -1)
