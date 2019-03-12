# * ----------------------------------------------------------------------------
# * ------------------ * *DELETE NODE IN A LINKED LIST* * ----------------------
# * ----------------------------------------------------------------------------

# Write a function to delete a node (except the tail) in a singly linked list,
# given only access to that node.

# Given linked list -- head = [4,5,1,9], which looks like following:

# 4 -> 5 -> 1 -> 9

# *Note*
#   - The linked list will have at least two elements.
#   - All of the nodes' values will be unique.
#   - The given node will not be the tail and it will always be a valid
#     node of the linked list.
#   - Do not return anything from your function.

# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

# time: O(n)
# space: O(1)

from linked_list import LinkedList, Node # a simple linked list module in this folder

def delete_node(node: Node) -> None:
    '''
    Overwrite each value of a linked list, starting from the node we are given to delete.
    '''
    while node.next != None:
        node.val = node.next.val
        if node.next.next == None:
            node.next = None
        else:
            node = node.next


# Examples:

head1 = LinkedList([4, 5, 1, 9]).head
delete_node(head1.next) # 4 -> 1 -> 9
print(head1.val == 4 and head1.next.val == 1 and head1.next.next.val == 9 and head1.next.next.next == None)

head2 = LinkedList([4, 5, 1, 9]).head
delete_node(head2.next.next) # 4 -> 5 -> 9
print(head2.val == 4 and head2.next.val == 5 and head2.next.next.val == 9 and head2.next.next.next == None)
