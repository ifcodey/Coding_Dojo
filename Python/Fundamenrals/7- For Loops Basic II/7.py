# Biggie Size
# def biggieSize(Arr):
#     newList = []
#     for x in range(len(Arr)):
#         if Arr[x] > 0:
#             newList.append("big")
#         else:
#             newList.append(Arr[x])
#     return newList


# print(biggieSize([-1, 3, 5, -5]))

# --------------------------------------

# Count Positives
# def counter(Arr):
#     z = 0
#     for x in range(len(Arr)):
#         if Arr[x] > 0:
#             z += 1
#     Arr.pop()
#     Arr.append(z)
#     return Arr

# print(counter([-1, 1, 1, 1]))
# print(counter([1,6,-4,-2,-7,-2]))

# --------------------------------------

# Sum Total
# def sum_total(arr):
#     sum = 0
#     for x in range(len(arr)):
#         sum += arr[x]
#     return sum


# print(sum_total([1, 2, 3, 4]))
# print(sum_total([6,3,-2]))

# --------------------------------------

# Average
# def Average(arr):
#     sum = 0
#     Avg = 0
#     for x in range(len(arr)):
#         sum += arr[x]
#     Avg = sum/len(arr)
#     return Avg


# print(Average([1, 2, 3, 4]))

# --------------------------------------

# Length
# def length(arr):
#     count = 0
#     for x in range(len(arr)):
#         count += 1
#     return count
# print(length([37,2,1,-9]))
# print(length([]))

# --------------------------------------

# Minimum
# def minimum(arr):
#     min = 0
#     if len(arr) == 0:
#         return 0
#     else:
#         for x in range(len(arr)):
#             if min > arr[x]:
#                 min = arr[x]
#                 return min


# print(minimum([37, 2, 1, -9]))
# print(minimum([]))

# --------------------------------------

# Maximum
# def maximum(arr):
#     max = 0
#     if len(arr) == 0:
#         return 0
#     else:
#         for x in range(len(arr)):
#             if max < arr[x]:
#                 max = arr[x]
#                 return max

# print(maximum([37, 2, 1, -9]))
# print(maximum([]))

# --------------------------------------

# Ultimate Analysis
# def Ultimate(arr):
#     sum = 0
#     Avg = 0
#     count = 0
#     min = 0
#     max = 0

#     for x in range(len(arr)):
#         sum += arr[x]
#         count += 1
#     Avg = sum/len(arr)
#     if len(arr) == 0:
#         return 0
#     else:
#         for x in range(len(arr)):
#             if min > arr[x]:
#                 min = arr[x]
#             if max < arr[x]:
#                 max = arr[x]

#     return sum, Avg,min,max,count


# print(Ultimate([37, 2, 1, -9]))

# --------------------------------------

# Reverse List
# def reverseList(arr):
#     newlist = []
#     for x in range(len(arr)):
#         newlist.append(arr[(len(arr) - x)-1])
#     return newlist

# print(reverseList([37,2,1,-9]))
