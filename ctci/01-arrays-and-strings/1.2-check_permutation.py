# * ----------------------------------------------------------------------------
# * ---------------------- * *CHECK PERMUTATION* * -----------------------------
# * ----------------------------------------------------------------------------

# Given two strings, write a method to decide if one is a permutation of the other.

# time: O(n)
# space: O(1)

def check_permutation(s1, s2):
    '''
    XOR both strings together, if the strings contain the same characters, they should cancel out and the result should be 0.
    '''
    if len(s1) != len(s2):
        return False
    total = 0
    for char1, char2 in zip(s1, s2):
        total ^= ord(char1) ^ ord(char2)
    return total == 0

# Examples:

str1a = 'dad'
str1b = 'add'
print(check_permutation(str1a, str1b) == True)

str2a = 'nope'
str2b = 'wrong'
print(check_permutation(str2a, str2b) == False)

str3a = 'zaaaaaaaasaaajaaiiiaaahaoaaaaaaaaiagaaraaaaaiaaaaaraaaaaaafaaaaaaaaaaab'
str3b = 'baaaaaaafaaaaiiiiiaaarraaaaaaajaaaaaaaaaaagaaaaaaaoasaaaaahaaaaaaaaaaaz'

print(check_permutation(str3a, str3b) == True)
