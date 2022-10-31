# def array_median(arr):
#     arr = sorted(arr)
#     if len(arr) > 1:
#         if len(arr) % 2 != 0:
#             median = arr[len(arr)//2]
#         else:
#             median = (arr[len(arr) // 2 - 1] + arr[len(arr) // 2]) / 2
#     elif len(arr) == 1:
#         median = arr[0]
#     else:
#         median = "Array cannot be empty"
#     return median

# arr = [1,5,4,8,6,7,45]
# median = array_median(arr)
# print(median)

def array_median():
    _array = []
    arr = input("Enter array comma separated without curly brackects. Enter q to quit.\n")
    while(arr !='q'):
        arr = arr.split(",")
        arr = [int(arr[i]) for i in range(len(arr))]
        _array += arr
        arr = input("Enter array comma separated without curly brackects. Enter q to quit.\n")

    _array = sorted(_array)
    if len(_array) > 1:
        if len(_array) % 2 != 0:
            median = _array[len(_array)//2]
        else:
            median = (_array[len(_array) // 2 - 1] + _array[len(_array) // 2]) / 2
    elif len(_array) == 1:
        median = _array[0]
    else:
        median = "Array cannot be empty"
    return median

print(array_median())