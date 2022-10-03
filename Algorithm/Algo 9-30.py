# queue = [1,3,4,5,8,50]
# queue.append(90)

# def contains(val):
#     for i in queue:
#         if i == queue:
#             return True
#         else:
#             return False
# print(contains(7))

# def font():
#     for i in range(len(queue)):
#         return queue[i-1]
# print(font())



class Qstack:
    def __init__(self,queue):
        self.queue = queue

    def contains(self, val):
        for i in self.queue:
            if i == val:
                return True
            else:
                return False

    def front(self):
        return self.queue[0]


methoder =Qstack([1,2,3,5])
methoder.front() 
print(methoder.front())
print(methoder.contains(1))
