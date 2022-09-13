# Count Down
def countDown():
    for x in range(5,-1 ,-1):
      print(x)


# Print and Return
def listCheck(x):
    print(x[0])
    return x[1]
print("The Return Number :" + str(listCheck([1,2])))

# First Plus Length
sum = 0
def listSum(x):
    sum = x[0] + len(x)
    return (sum)

print("The Sum is :" + str(listSum([1,2,3,4,5])))

# Values Greater than Second


def listArr(Arr):
    newList = []
    count = 0   
    for x in range(len(Arr)):
        if Arr[x] > Arr[1]:
            newList.append(Arr[x])
            count += 1
    
    return newList , count


print(listArr([5, 2, 3, 2, 1, 4]))

# This Length, That Value 

def listReturn(size , value):
    newList = []
    for sizeArr in range(size):
        newList.append(value)
    return newList

print(listReturn(4,7))
print(listReturn(6,2))

