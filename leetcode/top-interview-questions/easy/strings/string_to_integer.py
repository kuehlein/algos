# * ----------------------------------------------------------------------------
# * ----------------------- * *STRING TO INTEGER* * ----------------------------
# * ----------------------------------------------------------------------------

# Implement atoi which converts a string to an integer.

# The function first discards as many whitespace characters as necessary until the
# first non-whitespace character is found. Then, starting from this character, takes
# an optional initial plus or minus sign followed by as many numerical digits as
# possible, and interprets them as a numerical value.

# The string can contain additional characters after those that form the integral
# number, which are ignored and have no effect on the behavior of this function.

# If the first sequence of non-whitespace characters in str is not a valid integral
# number, or if no such sequence exists because either str is empty or it contains
# only whitespace characters, no conversion is performed.

# If no valid conversion could be performed, a zero value is returned.

# *Note*
# Only the space character ' ' is considered as whitespace character.
# Assume we are dealing with an environment which could only store integers within
# the 32-bit signed integer range: [−2^31, 2^31 − 1]. If the numerical value is
# out of the range of representable values, INT_MAX (2^31 − 1) or INT_MIN (−2^31)
# is returned.

# time: O(n)
# space: O(1)

def myAtoi(s: str) -> int:
    '''
    Given an input string `s`, traverse the string recording the number in the string. As soon as a non-numberic character is seen, end the loop and return the number. If no number is seen, return `0`.
    '''
    num = 0
    point, sign = findStart(s)
    for i in range(point, len(s)):
        digit = ord(s[i]) - 48
        if digit >= 0 and digit <= 9:
            num *= 10
            num += digit
        else:
            break
    return composeNum(num, sign)

def findStart(s: str) -> int:
    '''
    Given an input string `s`, traverse a string from start to end recording where the whitespace stops. If the first value after the whitespace stops is either `-` or `+`, set `sign` to `-1` and `1` respectively, and return the two.
    '''
    point = 0
    sign = 1
    while point < len(s):
        if s[point] != ' ':
            if s[point] == '-':
                sign = -1
                point += 1
            elif s[point] == '+':
                point += 1
            break
        point += 1
    return [point, sign]

def composeNum(num: int, sign: int) -> int:
    '''
    Given and input int `num` and a `sign`, compose a number of the two. If the number is greater than `INT_MAX` or less than `INT_MAX` return `INT_MAX` and `INT_MIN` respectively. Although Python3 doesn't have an `INT_MAX` or `INT_MIN`, for the purpose of this question, we are behaving as if `INT_MAX = 2^31 - 1` and `INT_MIN = -2^31`
    '''
    if num > 2147483647:
        num = 2147483647
        if sign == -1:
            num += 1
    return num * sign

# Examples:

str1 = "42"
print(myAtoi(str1) == 42)

str2 = "   -42"
print(myAtoi(str2) == -42)
# *Explanation*
# The first non-whitespace character is '-', which is the minus sign.
# Then take as many numerical digits as possible, which gets 42.

str3 = "4193 with words"
print(myAtoi(str3) == 4193)
# *Explanation*
# Conversion stops at digit '3' as the next character is not a numerical digit.

str4 = "words and 987"
print(myAtoi(str4) == 0)
# *Explanation*
# The first non-whitespace character is 'w', which is not a numerical
# digit or a +/- sign. Therefore no valid conversion could be performed.

str5 = "-91283472332"
print(myAtoi(str5) == -2147483648)
# *Explanation*
# The number "-91283472332" is out of the range of a 32-bit signed integer.
# Thefore INT_MIN (−231) is returned.
