from platform import node


class Node:
    def __init__(self, value):
        self.value = value
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def traverse(self):
        current = self.head
        while current is not None:
            print(current.value)
            current = current.next


# This for connect each node with each other

    def addTotal(self, val):
        if self.head == None:  # (==) like a (is)
            self.head = Node(val)
        else:
            current = self.head
            while current.next is not None:
                current = current.next
                current.next = Node(val)


list_1 = LinkedList()

# list_1.head = Node("1")
# list_1.head.next = Node("2")
# list_1.head.next.next = Node("3")
# list_1.head.next.next.next = Node("4")

list_1.addTotal("zoza")
list_1.addTotal("zoo")
list_1.traverse()


