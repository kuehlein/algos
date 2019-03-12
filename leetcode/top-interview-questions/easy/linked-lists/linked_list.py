from typing import List

class Node():
    def __init__(self, val: int) -> None:
        self.val = val
        self.next = None

    def __str__(self) -> str:
        return 'A Node with a value `val` and a pointer to the next node in the list `next`.'

class LinkedList():
    def __init__(self, vals: List[int]) -> None:
        self.head = self.build_ll(vals)

    def __str__(self) -> str:
        return 'A simple linked list class that contains the head of a singly linked list.'

    def build_ll(self, vals: List[int]) -> List[int]:
        head = Node(vals[0])
        current = head
        for i in range(1, len(vals)):
            current.next = Node(vals[i])
            current = current.next
        return head
