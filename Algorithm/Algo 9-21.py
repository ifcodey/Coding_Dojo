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


    def insert(self, value, pos):
        # insert to the first of link list
        if pos == 1:
            Node1 = Node(value)
            Node1.next = self.head
            self.head = Node1
        else:
            current = self.head
            for i in range(pos - 1):
                current = current.next
            Node1 = Node(value)
            Node1.next = current.next
            current.next = Node1

        self.head = None
        current = current.next
        
# This for connect each node with each other
# insert Node At Tail

    def addTotal(self, val):
        if self.head == None:  # (==) like a (is)
            self.head = Node(val)
        else:
            current = self.head
            while current.next is not None:
                current = current.next
                current.next = Node(val)

# This for delete a note from link list

    def deleteNode(self, position):
        if position == 0:
            temp = self.head
            self.head = self.head.next
            temp = None
        else:
            current = self.head
            for x in range(position-1):
                current = current.next
            current.next = current.next.next


list_1 = LinkedList()

# list_1.head = Node("1")
# list_1.head.next = Node("2")
# list_1.head.next.next = Node("3")
# list_1.head.next.next.next = Node("4")

list_1.addTotal("zoza")
list_1.traverse()
list_1.deleteNode(2)
