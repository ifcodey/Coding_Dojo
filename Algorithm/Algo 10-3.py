
class Queue:
    def __init__(self, queue):
        self.queue = queue

    def contains(self, val):
        for i in self.queue:
            if i == val:
                return True
            else:
                return False

    def font(self):
        return self.queue[0]

    def enqueue(self, val):
        self.queue.insert(0, val)
        return "Adding Done"

    def dequeue(self):
        return self.queue.pop(0)

    def print(self):
        for i in range(len(self.queue)) :
            pass

methoder = Queue([1, 2, 3, 5])

print(methoder.contains(1))
print(methoder.dequeue())
print(methoder.enqueue(10))
print(methoder.font())
