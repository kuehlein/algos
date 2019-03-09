# * ----------------------------------------------------------------------------
# * ------------------ * *NUMBER OF WAYS TO MAKE CHANGE* * ---------------------
# * ----------------------------------------------------------------------------

# Given an array of positive integers representing coin denominations and a single
# non-negative integer representing a target amount of money, implement a function
# that returns the number of ways to make change for that target amount using the
# given coin denominations. Note that an unlimited amount of coins is at your disposal.

# time: O(n * m)
# space: O(n)
# where n is the input `n` and m is the number of denominations

from typing import List

def number_of_ways_to_make_change(n: int, denoms: List[int]) -> int:
    '''
    Use a list of length `n + 1` to track the running total of all possible ways to make change at each index in the list. Each numerial list index represents an amount of money, 0 - n. For each given denomination, add to this running total. Return the last index in this array after iterating through all denominations.
    '''
    all_ways = [0 for i in range(n + 1)]
    all_ways[0] = 1

    for denom in denoms:
        for i in range(n + 1):
            if denom <= i:
                all_ways[i] += all_ways[i - denom]

    return all_ways[n]

# Example:

print(number_of_ways_to_make_change(6, [1, 5]) == 2)
