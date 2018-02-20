# time: O(n^2)
# space: O(n)
# where n is the input number
def getNthFib1(n):
    if n == 2:
        return 1
    elif n == 1:
        return 0
    else return getNthFib(n - 1) + getNthFib(n - 2)


# time: O(n)
# space: O(n)
# where n is the input number
def getNthFib2(n, cache = { 1: 0, 2: 1 }):
    if n in cache:
        return cache[n]
    else:
        cache[n] = getNthFib2(n - 1, cache) + getNthFib2(n - 2, cache)
        return cache[n]


# time: O(n)
# space: O(1)
# where n is the input number
def getNthFib3(n):
    lastTwo = [0, 1]
    counter = 3
    while counter <= n:
        nextFib = lastTwo[0] + lastTwo[1]
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter += 1
    return lastTwo[1] if n > 1 else lastTwo[0]


getNthFib1(5) # 5
