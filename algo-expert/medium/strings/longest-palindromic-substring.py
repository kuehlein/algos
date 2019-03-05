# time: O(n^3)
# space: O(1)
# where n is the size of the input string
def longestPalindromicSubstring1(string):
    longest = ''
    for i in range(len(string)):
        for j in range(i, len(string)):
            substring = string[i:j + 1]
            if len(substring) > len(longest) and isPalindrome(substring):
                longest = substring
    return longest

def isPalindrome(string):
    left = 0
    right = len(string) - 1
    while left < right:
        if string[left] != string[right]:
            return False
        left += 1
        right -= 1
    return True

# time: O(n^2)
# space: O(1)
# where n is the size of the input string
def longestPalindromicSubstring2(string):
    currentLongest = [0, 1]
    for i in range(1, len(string)):
        odd = getLongestPalindromeFrom(string, i - 1, i + 1)
        even = getLongestPalindromeFrom(string, i - 1, i)
        longest = max(odd, even, key = lambda x: x[1] - x[0])
        currentLongest = max(longest, currentLongest, key = lambda x: x[1] - x[0])
    return string[currentLongest[0]:currentLongest[1]]

def getLongestPalindromeFrom(string, left, right):
    while left >= 0 and right < len(string):
        if string[left] != string[right]:
            break
        else:
            left -= 1
            right += 1
    return [left + 1, right]


longestPalindromicSubString1('abaxyzzyxf') # xyzzyx
