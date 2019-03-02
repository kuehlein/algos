# * ----------------------------------------------------------------------------
# * ------------------------- * *REVERSE STRING* * -----------------------------
# * ----------------------------------------------------------------------------

# Given a string, determine if it is a palindrome, considering only alphanumeric
# characters and ignoring cases.

# *Note*
# For the purpose of this problem, we define empty string as valid palindrome.

# time: O(n)
# space: O(1)

def isPalindrome(s: str) -> bool:
    '''
    Compare a `left` value in input string `s` to a `right` value. If either value is non-alphanumeric, cycle through the characters until one is found. As soon as two values don't match, return `False`, if all of the values are seen and we haven't returned yet,
    return `True`.
    '''
    left = 0
    right = len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True

# Examples:

str1 = "A man, a plan, a canal: Panama"
print(isPalindrome(str1) == True)

str2 = "race a car"
print(isPalindrome(str2) == False)
