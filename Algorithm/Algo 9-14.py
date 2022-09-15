# Leap Year Algorithm

# inp = eval(input("Enter Your Year to check it if it is a Leap :"))
# if inp % 400 == 0:
#     print(f"it is a {True}")
# elif inp % 4 == 0 and inp % 100 != 0 :
#     print(f"it is a {True}")
# else:
#     print(f"it is a {False}")

# --------------------------------------------------

# def count_substring(string, sub_string):
#     count = 0
#     indexs = 0
#     for x in range(len(string)):
#         finders = string.find(sub_string, indexs)
#         if finders != -1:
#             indexs = finders + 1
#             count += 1
#     return count


# print(count_substring("ABSHIZLMSHIZ", "HIZ"))

# --------------------------------------------------


# def count_substring(string, sub_string):
#     # newString = ""
#     count = 0
#     x = string.strip()
#     for count_sub in range(len(sub_string)):
#         count_sub += 1

#     string = x.split(sub_string)
#     print(string)

#     for x in range(len(string)):
#         count += 1
#     return count -1


# print(count_substring("ABSHIZLMSHIZ", "HIZ"))

# --------------------------------------------------

# def count_substring(string, sub_string):
#     x = string.rsplit(sub_string)
#     return len(x) - 1

# print(count_substring("ABSHIZLMSHIZ", "HIZ"))
