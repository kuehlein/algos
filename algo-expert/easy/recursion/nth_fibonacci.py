# * ----------------------------------------------------------------------------
# * ----------------------- * *GET NTH FIBONACCI* * ----------------------------
# * ----------------------------------------------------------------------------

# The Fibonacci sequence is defined as follows: the first number of the sequence
# is 0, the second number is 1, and the nth number is the sum of the (n - 1)th
# and (n - 2)th numbers. Write a function that takes in an integer n and returns
# the nth Fibonacci number.

# time: O(n^2)
# space: O(n)
# where n is the input number

def get_nth_fib1(n: int) -> int:
    '''
    Add the results of two recursive calls together, each base case will return a `1` or a `0`. These values will bubble up, returning the value at the nth position in the fibonacci sequence.
    '''
    if n == 2:
        return 1
    elif n == 1:
        return 0
    else:
      return get_nth_fib1(n - 1) + get_nth_fib1(n - 2)


# OPTIMIZED FOR TIME
# time: O(n)
# space: O(n)

def get_nth_fib2(n: int, cache = { 1: 0, 2: 1 }) -> int:
    '''
    Use a cache to avoid calculating values that have already been seen. This limits the number of recursive calls made, thus increasing the time complexity of the algorithm.
    '''
    if n in cache:
        return cache[n]
    else:
        cache[n] = get_nth_fib2(n - 1, cache) + get_nth_fib2(n - 2, cache)
        return cache[n]


# OPTIMIZED FOR TIME AND SPACE
# time: O(n)
# space: O(1)

def get_nth_fib3(n: int) -> int:
    '''
    Using a list to hold the last two numbers of the sequence, iteratively add both numbers together to produce the next number and shift the values over in the list. Each loop increment a counter until the counter reaches `n`. If this loop ran (if `n > 2`), return the second value in the list, if not return the first.
    '''
    last_two = [0, 1]
    counter = 3
    while counter <= n:
        temp = last_two[0] + last_two[1]
        last_two[0] = last_two[1]
        last_two[1] = temp
        counter += 1
    return last_two[1] if n > 1 else last_two[0]

# Examples:

print(get_nth_fib1(1) == 0)
print(get_nth_fib2(2) == 1)
print(get_nth_fib3(3) == 1)
print(get_nth_fib1(4) == 2)
print(get_nth_fib2(5) == 3)
print(get_nth_fib3(6) == 5)
print(get_nth_fib1(7) == 8)
print(get_nth_fib2(8) == 13)
print(get_nth_fib3(9) == 21)
