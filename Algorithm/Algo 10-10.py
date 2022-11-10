# def tribonacci(number):
#     if number == 0 or number == 1:
#         return 0
#     elif number == 2:
#         return 1
#     else:
#         return (tribonacci(number-1) + tribonacci(number-2) + tribonacci(number-3))

# def printing(n):
#     for i in range(1, n):
#         print(tribonacci(i))

# printing(6)

class tribonacci:

    def __init__ (self, number):
        self.number = number

    def process(self):
        if self.number == 0 or self.number == 1:
            return 0
        elif self.number == 2:
            return 1
        else:
            return (tribonacci(self.number-1) + tribonacci(self.number-2) + tribonacci(self.number-3))


def printing(self,number):
    for i in range(1, self.number):
        print(tribonacci(i))

printing(6)
