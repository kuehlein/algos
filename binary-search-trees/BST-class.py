class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    # Average: O(log(n)) time | O(1) space
    # Worst: O(n) time | O(1) space
    def insert(self, value):
        current = self
        while True:
            if value < current.value:
                if current.left is None:
                    current.left = BST(value)
                    break
                else:
                    current = current.left
            else:
                if current.right is None:
                    current.right = BST(value)
                    break
                else:
                    current = current.right
        return self

    # Average: O(log(n)) time | O(1) space
    # Worst: O(n) time | O(1) space
    def contains(self, value):
        current = self
        while current is not None:
            if value < current.value:
                current = current.left
            elif value > current.value:
                current = current.right
      else:
                return True
        return False

    # Average: O(log(n)) time | O(1) space
    # Worst: O(n) time | O(1) space
    def remove(self, value, parent = None):
        current = self
        while current is not None:
      if value < current.value:
        parent = current
        current = current.left
      elif value > current.value:
        parent = current
        current = current.right
      else:
        if current.left is not None and current.right is not None:
          current.value = current.right.getMinValue()
          current.right.remove(current.value, current)
        elif parent is None:
          if current.left is not None:
            current.value = current.left.value
            current.right = current.left.right
            current.left = current.left.left
          elif current.right is not None:
            current.value = current.right.value
            current.left = current.right.left
            current.right = current.right.right
          else:
            current.value = None
        elif parent.left == current:
          parent.left = current.left if current.left is not None else current.right
        elif parent.right == current:
          parent.right = current.left if current.left is not None else current.right
        break
        return self

  def getMinValue(self):
    current = self
    while current.left is not None:
      current = current.left
    return current.value
