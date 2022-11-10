
def powers(num, p):
    if p == 0:
        return 1
    elif p == 1:
        return num
    if p < 0:
        return (1/num*powers(num, p+1))
    return (num*powers(num, p-1))


x = powers(0, 2)
print(x)
