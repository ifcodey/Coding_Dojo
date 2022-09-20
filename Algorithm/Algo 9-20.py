class Node2:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList2:
    def __init__(self):
        self.head = None

    def InsertLast(self, e):
        newnode = Node2(e)
        if (self.head == None):
            self.head = newnode
            return newnode
        else:
            temp = self.head
            while (temp.next != None):
                temp = temp.next
            temp.next = newnode

    def insertFirst(self, e2):
        newnode = Node2(e2)
        newnode.next = self.head
        self.head = newnode

    def print1(self):
        temp = self.head
        while temp != None:
            print(temp.data)
            temp = temp.next

    def insertByPosition(self, elem, position):
        newnode = Node2(elem)
        if (position < 1):
            print('position shuold be > = 1')
        elif position == 1:
            newnode.next = self.head
            self.head = newnode
        else:
            temp = self.head
            for i in range(1, position-1):
                if (temp != None):
                    temp = temp.next
            if temp != None:
                newnode.next = temp.next
                temp.next = newnode
            else:
                print('out of range')

    def DeleteFirstNode(self):
        if (self.head != None):
            temp = self.head
            self.head = self.head.next
            temp = None

    def DeleteLastNode(self):
        if (self.head.next == None):
            self.head = None
        else:
            temp = self.head
            while temp.next.next != None:
                temp = temp.next
            lastnode = temp.next
            temp.next = None
            lastnode = None

    def DeleteByPosition(self, position):
        if position < 1:
            print('positon must be > = 1')
        elif position == 1 and self.head != None:
            nodefirst = self.head
            self.head = self.head.next
            nodefirst = None
        else:
            temp = self.head
            for i in range(1, position-1):
                if (temp != None):
                    temp = temp.next
            if (temp != None and temp.next != None):
                target = temp.next
                temp.next = temp.next.next
                target = None
            else:
                print('out of range')


    def reverse(self):

        if (self.head != None):
            prevNode = self.head
            tempNode = self.head
            curNode = self.head.next

            prevNode.next = None

            while (curNode != None):
                tempNode = curNode.next
                curNode.next = prevNode
                prevNode = curNode
                curNode = tempNode
            self.head = prevNode


print("##############################")
list1 = LinkedList2()  # create lnkedlist called list1
first = Node2(10)  # new node called first
list1.head = first  # let first node = head
secound = Node2(20)  # create new node
first.next = secound  # let next first node = secound
third = Node2(200)  # create new node
secound.next = third  # let next secound node = third
list1.InsertLast(70)  # insert from last in linkedlist
list1.insertFirst(900)  # insert from First in LinkedList
list1.insertByPosition(9850, 2)  # insert By Position
# list1.DeleteFirstNode() # DeleteTheFirstNode
list1.DeleteLastNode()  # DeleteTheLastNode
list1.DeleteByPosition(5)  # DeleteByPosition
list1.reverse() #reverse the Linked List
list1.print1()  # print the linkedlist