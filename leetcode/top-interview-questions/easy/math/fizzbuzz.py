# * ----------------------------------------------------------------------------
# * --------------------------- * *FIZZ BUZZ* * --------------------------------
# * ----------------------------------------------------------------------------

# Write a program that outputs the string representation of numbers from 1 to n.

# But for multiples of three it should output “Fizz” instead of the number and
# for the multiples of five output “Buzz”. For numbers which are multiples of both
# three and five output “FizzBuzz”.

# time: O(n)
# space: O(n)

from typing import List

def fizzBuzz(n: int) -> List[str]:
    '''
    Use modulus to determine if `'Fizz'`, `'Buzz'` or `'FizzBuzz'` should be appended
    to the list. Return this list.
    '''
    strs = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            strs.append('FizzBuzz')
        elif i % 3 == 0:
            strs.append('Fizz')
        elif i % 5 == 0:
            strs.append('Buzz')
        else:
            strs.append(f'{i}')
    return strs


# Examples:

li = ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
print(fizzBuzz(15) == li)
