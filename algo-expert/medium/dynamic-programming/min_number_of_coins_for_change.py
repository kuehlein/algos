# * ----------------------------------------------------------------------------
# * ---------------- * *MIN NUMBER OF COINS FOR CHANGE* * ----------------------
# * ----------------------------------------------------------------------------

# Given an array of positive integers representing coin denominations and a single
# non-negative integer representing a target amount of money, implement a function
# that returns the smallest number of coins needed to make change for that target
# amount using the given coin denominations. Note that an unlimited amount of coins
# is at your disposal. If it is impossible to make change for the target amount,
# return -1.

# time: O(n * m)
# space: O(n)
# where n is the target value and m is the number of denominations available

def min_number_of_coins_for_change(n: int, denoms: int) -> int:
    '''
    Build a list of values of how many coins of each denomination are needed to make 1 - n dollars starting with the lowest denomination, all the way to the highest. This solution uses dynamic programming to build a list of values that are overwritten as more denominations are examined. By the time we see all of the denomination, `num_coins[n]` will hold the answer, if there is one.
    '''
    num_coins = [float('inf') for amount in range(n + 1)]
    num_coins[0] = 0

    for denom in denoms:
        for amount in range(len(num_coins)):
            if denom <= amount:
                num_coins[amount] = min(num_coins[amount], num_coins[amount - denom] + 1)
    return num_coins[n] if num_coins[n] != float('inf') else -1

# Example:

print(min_number_of_coins_for_change(7, [1, 5, 10]) == 3) # ($1 * 2, $5 * 1)
