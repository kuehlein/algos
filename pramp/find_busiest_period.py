# * ----------------------------------------------------------------------------
# * -------------------- * *BUSIEST TIME IN THE MALL* * ------------------------
# * ----------------------------------------------------------------------------

# The Westfield Mall management is trying to figure out what the busiest moment at
# the mall was last year. You’re given data extracted from the mall’s door detectors.
# Each data point is represented as an integer array whose size is 3. The values
# at indices 0, 1 and 2 are the timestamp, the count of visitors, and whether the
# visitors entered or exited the mall (0 for exit and 1 for entrance), respectively.
# Here’s an example of a data point: [ 1440084737, 4, 0 ].

# Note that time is given in a Unix format called Epoch, which is a nonnegative
# integer holding the number of seconds that have elapsed since `00:00:00 UTC`,
# Thursday, 1 January 1970.

# Given an array, `data`, of data points, write a function `find_busiest_period`
# that returns the time at which the mall reached its busiest moment last year.
# The return value is the timestamp, e.g. 1480640292. Note that if there is more
# than one period with the same visitor peak, return the earliest one.

# Assume that the array data is sorted in an ascending order by the timestamp.

# time: O(n)
# space: O(1)

from typing import List

def find_busiest_period(data: List[List[int]]) -> int:
    '''
    Calculate a running total, `count`, of the number of visitors in the mall at any given time. If `count` becomes greater than the current highest number of visitors, `max_count`, update `max_count`, but only if all of the data has been processed for any given moment in time.
    '''
    count = 0
    max_count = 0
    max_period = 0

    for i in range(len(data)):
        # update count
        if (data[i][2] == 1): # visitors entered the mall
            count += data[i][1]
        elif (data[i][2] == 0): # visitors existed the mall
            count -= data[i][1]

        # check for other data points with the same timestamp
        if (i < len(data) - 1 and data[i][0] == data[i + 1][0]):
            continue

        # update maximum
        if (count > max_count):
            max_count = count
            max_period = data[i][0]

    return max_period

# Example:

data = [
  [1487799425, 14, 1],
  [1487799425, 4,  0],
  [1487799425, 2,  0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1,  0],
  [1487901211, 7,  1],
  [1487901211, 7,  0]
]

print(find_busiest_period(data) == 1487800378)
