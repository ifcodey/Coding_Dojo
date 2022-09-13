
# solution 1

# x = "malayalam"
# w = ""
# for i in x:
#     w = i + w
# if (x == w):
#     print("yes")
# else:
#     print("no")


# solution 2

# def check(str):
#     text = ''
#     for i in range(len(str)-1,-1,-1):
#         text += str[i]
#     if text == str:
#         print(str,"is accept")
#     else:
#         print(str,"is not accept")
# check('noon')


# solution 3

# def check(word):
#     if word == word[::-1]:
#         return True
# print("The condition is ",check("noon"))
# print("The condition is ",check("radar"))

# solution 4

# def check(arr):
#     par_1 = ""
#     par_2 = ""
#     for x in range(0, int(len(arr)/2), 1):
#         par_1 += arr[x]
#     for xx in range(len(arr)-1, int(len(arr)/2), -1):
#         par_2 += arr[xx]

#     if (par_1 == par_2):
#         print("true")
#     else:
#         print("false")

# check('radar')

