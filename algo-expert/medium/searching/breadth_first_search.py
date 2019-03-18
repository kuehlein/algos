# * ----------------------------------------------------------------------------
# * ---------------------- * *BREADTH FIRST SEARCH* * --------------------------
# * ----------------------------------------------------------------------------

# You are given a `Node` class that has a name and an array of optional children
# Nodes. When put together, Nodes form a simple tree-like structure. Implement the
# `breadthFirstSearch` method on the `Node` class, which takes in an empty array,
# traverses the tree using the Breadth-first Search approach (specifically
# navigating the tree from left to right), stores all of the Nodes' names in the
# input array, and returns it.

from typing import List

class Node:
    def __init__(self, name: str):
        self.children = []
        self.name = name

    def addChild(self, name: str):
        self.children.append(Node(name))
        return self

    # time: O(v + e)
    # space: O(v)
    def breadthFirstSearch(self, array) -> List[str]:
        '''
        Using a queue, pop off the first value and add all of the children to it. At each iteration record the value currently seen.
        '''
        queue = [self]
        while len(queue) > 0:
            current = queue.pop(0)
            array.append(current.name)
            for child in current.children:
                queue.append(child)
        return array

# Example:

test = Node('A')
test.addChild('B').addChild('C').addChild('D').addChild('L').addChild('M')
test.children[0].addChild('E').addChild('F').addChild('O')
test.children[1].addChild('P')
test.children[2].addChild('G').addChild('H')
test.children[0].children[0].addChild('Q').addChild('R')
test.children[0].children[1].addChild('I').addChild('J')
test.children[2].children[0].addChild('K')
test.children[4].addChild('S').addChild('T').addChild('U').addChild('V')
test.children[4].children[0].addChild('W').addChild('X')
test.children[4].children[0].children[1].addChild('Y').addChild('Z')

ans= ['A', 'B', 'C', 'D', 'L', 'M', 'E', 'F', 'O', 'P', 'G', 'H', 'S', 'T', 'U', 'V', 'Q', 'R', 'I', 'J', 'K', 'W', 'X', 'Y', 'Z']
print(test.breadthFirstSearch([]) == ans)
