# * ----------------------------------------------------------------------------
# * -------------------------- * *VALID ANAGRAM* * -----------------------------
# * ----------------------------------------------------------------------------

# Given two strings s and t , write a function to determine if t is an anagram of s.

# *Note*
# You may assume the string contains only lowercase alphabets.

# *Follow up*
# What if the inputs contain unicode characters? How would you adapt your solution to such case?

# time: O(n)
# space: O(1)

def isAnagram(s: str, t: str) -> bool:
    '''
    Iterate through input string `s` and `t` in unison, hashing each ascii code to
    a prime number in `primes` and multiplying that value with a running total, this
    ensures that ascii codes don't collide. If the difference between totals is `0`,
    return `True`, if not `False`.
    '''
    if len(s) != len(t):
        return False
    primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
    codes1 = 1
    codes2 = 1
    for i in range(len(s)):
        codes1 *= primes[ord(s[i]) - 97]
        codes2 *= primes[ord(t[i]) - 97]
    return codes1 - codes2 == 0

# Examples:

str1a = 'anagram'
str1b = 'nagaram'
print(isAnagram(str1a, str1b) == True)

str1a = 'rat'
str1b = 'far'
print(isAnagram(str1a, str1b) == False)
