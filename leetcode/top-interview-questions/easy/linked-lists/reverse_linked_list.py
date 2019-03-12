# * ----------------------------------------------------------------------------
# * ----------------------- * *REVERSE LINKED LIST* * --------------------------
# * ----------------------------------------------------------------------------

# Reverse a singly linked list.

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# time: O(n)
# space: O(1)

from linked_list import LinkedList, Node # a simple linked list module in this folder

def reverseList(head: Node) -> Node:
    prev = None
    curr = head

    while curr:
        nex = curr.next
        curr.next = prev
        prev = curr
        curr = nex

    return prev


# Examples:

head = LinkedList([1, 2, 3, 4, 5]).head
res = reverseList(head) # 5 -> 4 -> 3 -> 2 -> 1 -> None
print(
    res.val == 5 and
    res.next.val == 4 and
    res.next.next.val == 3 and
    res.next.next.next.val == 2 and
    res.next.next.next.next.val == 1 and
    res.next.next.next.next.next == None
)
