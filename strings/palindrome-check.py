# time: O(n)
# space: O(1)
# where n is the length of the string
def isPalindrome(string):
    left = 0
    right = len(string) - 1
    while left < right:
        if string[left] != string[right]:
            return False
		    left += 1
        right -= 1
    return True


isPalindrome('abcdcba') # True
