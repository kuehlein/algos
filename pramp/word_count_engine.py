
# * ----------------------------------------------------------------------------
# * ----------------------- * *WORD COUNT ENGINE* * ----------------------------
# * ----------------------------------------------------------------------------

# Implement a document scanning function `wordCountEngine`, which receives a string
# `document` and returns a list of all unique words in it and their number of
# occurrences, sorted by the number of occurrences in a descending order. If two or
# more words have the same count, they should be sorted according to their order in
# the original sentence. Assume that all letters are in english alphabet. You
# function should be case-insensitive, so for instance, the words “Perfect” and
# “perfect” should be considered the same word.

# The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

# time: O(n + m)
# space: O(m)
# where n is the number of words and m is the number of unique words
# *Note*
# The average length of an english word is ~5, so we can regard this as a constant
# (i.e. O(5N) = O(N))

from typing import List
from collections import OrderedDict

def word_count_engine(document: str) -> List[List[str]]:
    '''
    Given an input string `document`, split the string into a list of "clean" words and cache their number of occurrences in an `OrderedDict`, deconstruct the dictionary into a list containing groupings of words mapped to an index, then format and filter this list into the final response.
    '''
    # Clean the document string and build a cache
    word_map, largest_count = clean_words(document)

    # Group the words by occurrence
    counter_list = sort_words(word_map, largest_count)

    # iterate through the list in reverse order
    # and add only non-null values to result
    return format_response(counter_list)

def clean_words(document: str) -> (dict, int):
    '''
    Given an input string `document`, split this string into lower-cased words, remove all non-alphabetic characters, and build a cache containing these words, as well as the total number of their appearances.
    '''
    word_map = OrderedDict()
    word_list = document.split()
    largest_count = 0

    for i in range(len(word_list)):
        char_array = []
        for char in word_list[i].lower():
            if (char.isalpha()):
                char_array.append(char)
        clean_word = ''.join(char_array)

        count = 0
        if (clean_word in word_map):
            count = word_map[clean_word] + 1
        else:
            count = 1
        if (count > largest_count):
            largest_count = count
        word_map[clean_word] = count

    return (word_map, largest_count)

def sort_words(word_map: dict, largest_count: int) -> List[List[str or None]]:
    '''
    Initialize the word counter list of lists. Since, in the worst case scenario, the number of lists is going to be as big as the maximum occurrence count, we need counter_list's size to be the same to be able to store these lists. Creating counter_list will allow us to “bucket-sort” the list by word occurrences.
    '''
    counter_list = [None for _ in range(largest_count + 1)]
    for word in word_map.keys():
        counter = word_map[word]
        if (counter_list[counter] == None):
            counter_list[counter] = []
        counter_list[counter].append(word)

    return counter_list

def format_response(counter_list: List[List[str or None]]) -> List[List[str]]:
    '''
    Iterate through the list in reverse order and add only non-null values to result.
    '''
    result = []
    for i in range(len(counter_list) - 1, -1, -1):
        if (counter_list[i] != None):
            for j in range(len(counter_list[i])):
                result.append([counter_list[i][j], str(i)])

    return result

# Example:

document = "Practice makes perfect. you'll only get Perfect by practice. just practice!"
ans = [ ["practice", "3"], ["perfect", "2"], ["makes", "1"], ["youll", "1"], ["only", "1"],  ["get", "1"], ["by", "1"], ["just", "1"] ]
print(word_count_engine(document) == ans)
