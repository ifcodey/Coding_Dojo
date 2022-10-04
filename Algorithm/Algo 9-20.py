class createNode:
    # *****************************************************************
    # This is Constractor for give a inial value for variable of class
    # self -> object pointer to my var in class
    # self.data -> the var in class createNode
    # self.data = data -> the var data in createNode = parameter coming from called a function
    # self.next = none -> the next address -> unknown and this just for create a node
    # (createNode class) -> just for create a node
    # *****************************************************************

    def __init__(self, data):
        self.data = data
        self.next = None

    # *****************************************************************
    # class linkList -> for insert , delete , reverse , print function
    # *****************************************************************


class linkList:


    # self.head ->var in this class = none -> we do this for set a value for first node and called it head
    # and the head get a defult value = none and this for  first address to node


    def __init__(self):
        self.head = None

    def InsertLast(self, e):
        # newnode -> is a var define it now -> equal a node that created with value send as parameter -> (e)
        newnode = createNode(e)

        # self.head -> none , let self.head - > a first node if there no head mean the list is empty
        if (self.head == None):
            self.head = newnode
            return newnode
        else:
            # let store a head in temp if exist in list -> to able to add node before it
            # self.head -> before start in node beacuse equal none => [ none - firstnode - other - none] 
            temp = self.head
        # if list is still there element in it -> go and connect a node with each other
            while (temp.next != None):
                temp = temp.next
        # after end -> let a node that create with value ((e) parameter ) a last node in link list
            temp.next = newnode


    
    def insertFirst(self, e2):
        # newnode is var -> for store on it a new node that created
        newnode = createNode(e2)
        # [newnode , head-node1-node2------node(n)]

        # we know the list depend on connecttion a node with each other -> so let us do a connect
        # with new node before set it a first value mean but it a self.head
        newnode.next = self.head
        # [newnode , (newnode.next = head)-node1-node2------node(n)]

        # self.head -> get a newnode to set it first node in linklist
        self.head = newnode
        # [head = newnode - (newnode.next = head) ------node(n)]


    def print1(self):
        # store a head in temp var
        temp = self.head
        # if still list not empty print a data
        while temp != None:
            print(temp.data)
            temp = temp.next


    def insertByPosition(self, elem, position):
        newnode = createNode(elem)
        if (position < 1):
            print('position shuold be > = 1')
        elif position == 1:
            newnode.next = self.head
            self.head = newnode
        else:
            # let put a head in temp var
            temp = self.head

            # for loop run from first node until to before our postion we want -> position -1  beacuse should  (position = current)
            # and at current we insert a newnode

            for i in range(1, position-1):
            # make a conntect with all node before ower position that want to insert to it newnode
                if (temp != None):
                    temp = temp.next

            # after loop the next positon is position we want to insert at it
            if temp != None:
            # this is a way do a connect to be sure not loose a connection between node after current position 
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


print("*************************************************")
list1 = linkList()  # create lnkedlist called list1
first = createNode(10)  # new node called first
list1.head = first  # let first node = head
print("*************************************************")
secound = createNode(20)  # create new node
first.next = secound  # let next first node = secound
print("*************************************************")
third = createNode(200)  # create new node
secound.next = third  # let next secound node = third
list1.InsertLast(70)  # insert from last in linkedlist
list1.insertFirst(900)  # insert from First in LinkedList
list1.insertByPosition(9850, 2)  # insert By Position
# list1.DeleteFirstNode() # DeleteTheFirstNode
list1.DeleteLastNode()  # DeleteTheLastNode
list1.DeleteByPosition(5)  # DeleteByPosition
list1.reverse()  # reverse the Linked List
list1.print1()  # print the linkedlist
