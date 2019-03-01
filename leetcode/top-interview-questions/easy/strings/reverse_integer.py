# * ----------------------------------------------------------------------------
# * ------------------------ * *REVERSE INTEGER* * -----------------------------
# * ----------------------------------------------------------------------------

# Given a 32-bit signed integer, reverse digits of an integer.

# *Note*
# Assume we are dealing with an environment which could only store integers within
# the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem,
# assume that your function returns 0 when the reversed integer overflows.

# time: O(n)
# space: O(1)

def reverse(x: int) -> int:
    '''
    Build a reversed version of input int `x`, by multiplying `reversed` by a factor
    of `10`, modding `x` for its "1's" value and adding that onto `reversed`.
    '''
    reversed = 0
    factor = 10
    sign = 1 if x > 0 else -1
    x *= sign
    while x != 0:
        reversed *= factor
        reversed += x % 10
        x //= 10
        if reversed > 2**31-1 or reversed < -2**31:
            return 0
    return reversed * sign


# Examples:

int1 = 123
print(reverse(int1) == 321)

int2 = -123
print(reverse(int2) == -321)

int3 = 120
print(reverse(int3) == 21)
