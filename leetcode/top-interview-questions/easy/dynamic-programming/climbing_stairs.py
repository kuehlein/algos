# * ----------------------------------------------------------------------------
# * ------------------------ * *CLIMBING STAIRS* * -----------------------------
# * ----------------------------------------------------------------------------

# You are climbing a stair case. It takes n steps to reach to the top. Each time
# you can either climb 1 or 2 steps. In how many distinct ways can you climb to
# the top?

# *Note*
# Given n will be a positive integer.

# time: O(n)
# space: O(1)

def climb_stairs(n: int) -> int:
    next_two = [1, 1]

    for i in range(2, n + 1):
        temp = next_two[0] + next_two[1]
        next_two[0] = next_two[1]
        next_two[1] = temp

    return next_two[1]


# Examples:

print(climb_stairs(1) == 1)
print(climb_stairs(2) == 2)
print(climb_stairs(3) == 3)
print(climb_stairs(4) == 5)
print(climb_stairs(5) == 8)
print(climb_stairs(6) == 13)


# *NOTE*
# This question is just a different way of asking "print the nth fibonacci number"
