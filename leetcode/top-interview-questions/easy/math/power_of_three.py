# * ----------------------------------------------------------------------------
# * ------------------------- * *POWER OF THREE* * -----------------------------
# * ----------------------------------------------------------------------------

# Given an integer, write a function to determine if it is a power of three.

# *Follow up*
# Could you do it without using any loop / recursion?

# With loop
# time: O(n)
# space: O(1)
# where n is the power that three is raised by

def isPowerOfThreeLoop(n: int) -> bool:
    '''
    While input int `num` is greater than `1`, set `n` to equal `n / 3`. If at any point along the way, `n / 3` does not divide evenly, return `False`, otherwise return `True`.
    '''
    if n < 1:
        return False
    while n > 1:
        if n % 3 != 0:
            return False
        n /= 3
    return True


# Without loop
# time: O(1)
# space: O(1)

from math import log10

def isPowerOfThree(n: int) -> bool:
    '''
    Find the logarithm (base 10) of input int `n` and `3`, then divide the result of the former with the result of the latter. If there is a remaineder, return `False`, otherwise return `True`.
    '''
    if n < 1:
        return False
    x = log10(n) % log10(3)
    return x == x // 1

# Examples:

print(isPowerOfThree(27) == True)
print(isPowerOfThree(0) == False)
print(isPowerOfThree(9) == True)
print(isPowerOfThree(45) == False)
