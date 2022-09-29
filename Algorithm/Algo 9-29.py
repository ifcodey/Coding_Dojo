# class operation:

#     stack = []
#     def pusher(stack,item):
#         stack.append(item)

#     def poper(stack):
#         if len(stack) == 0:
#             pass
#         stack.pop()

#     def peek(stack):
#         return stack[len(stack) - 1]

#     def minmim(stack):
#         return min(stack)


class stack:
    def __init__(self):
        self.myvals=[]
        self.min=[]

    def push(self,val):
        self.myvals.append(val)
        if not self.min:
            self.min.append(val)
        elif val <= self.min[-1]:
            self.min.append(val)

    def pop(self):
        if self.myvals[-1]==self.min[-1]:
            self.min.pop()
        self.myvals.pop()



my_stack=stack()
my_stack.push(0)
my_stack.push(-1)
my_stack.push(1)
my_stack.push(-2)
my_stack.push(-3)
my_stack.push(2)


my_stack.pop()
my_stack.pop()


print(my_stack.myvals)
print(my_stack.min[-1])