# time: O(v + e)
# space: O(v)
# where v is the number of verticies of the input graph
# and e is the number of edges of the input graph
class Node:
    def __init__(self, name):
        self.children = []
        self.name = name

    def addChild(self, name):
        self.children.append(Node(name))
        return self

    def depthFirstSearch(self, array):
        array.append(self.name)
		for child in self.children:
			child.depthFirstSearch(array)
		return array


test = Node('A')
test.addChild('B').addChild('C')
test.children[0].addChild('D')

# ['A', 'B', 'D', 'C']
