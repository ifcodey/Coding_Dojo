import math
import random

rands = random.random()
lst = []
def randInt(min = 0,max = 100):

        num = round(rands* (max - min))
        print (f"num :{num} - min:{min} ") 
        if num > min:
            print (f"from :{min} - :{max} ") 
            
            print (f"num :{num} - min:{min} ") 
            return num
        elif num < min :
            for i in range(20):
                lst.append(round(rands,1))
                for x in range(len(lst)):
                    if round(lst[x]* (max - min)) > min :
                        return num 



print(randInt()) 		# should print a random integer between 0 to 100
print(randInt(max=50)) 	# should print a random integer between 0 to 50
print(randInt(min=50)) 	# should print a random integer between 50 to 100
print(randInt(min=50, max=500))    # should print a random integer between 50 and 500

# ----------------------------------------

# def randInt(num1='' ,num2='' ):
#     if num1=="" and num2=='':
#         x=random.randint(0,100)
        
#     elif num1 != '' and num2 !='':
#         x=random.randint(int(num1),int(num2))
        
#     elif num2 != '':
#         x=random.randint(0,int(num2))
        
#     elif num1 !='':
#         x=random.randint(int(num1),100)
        
#     return x
# print(randInt())
# print(randInt(num1='2',num2='80'))
# print(randInt(num1='2'))
# print(randInt(num2=80))