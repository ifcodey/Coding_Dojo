# def checker(string):
#     stack = []

#     # top = len(string) - 1
#     counter1 = 0
#     counter2 = 0
#     for x in len(string):
#         if '(' and ')':
#             stack.push('1')
#         elif '[' and ']':
#             stack.push('1')
#         elif '{' and '}':
#             stack.push('1')

#         for i in len(stack):
#             i = i + 1
#             if i == 3:
#                 return True
#             else:
#                 return False


# checker(a(1)s[O(n)])

stack = []
opens = ['(', '<', '{', '[']
closes = [')', '>', '}', ']']

str = "welcome(())[][)]<>"

for char in str:
    if char in opens:
        stack.append(char)
    elif char in closes:
        position = closes.index(char)
        if stack[len(stack)-1] == opens[position]:
            stack.pop()
        else:
            print("Wrong Order")
            break
if len(stack) == 0:
    print("Correct order")
else:
    print("wrong order")
