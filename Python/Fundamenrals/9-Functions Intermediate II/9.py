
#1 Update Values in Dictionaries and Lists
# ---------------------------------------------

x = [ [5,2,3], [10,8,9] ] 
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'}
]

sports_directory = {
'basketball' : ['Kobe', 'Jordan', 'James', 'Curry']
,'soccer' : ['Messi', 'Ronaldo', 'Rooney']
}
z = [ {'x': 10, 'y': 20} ]

x[1][0] = 15
print(x)

students [0]['last_name'] = "Bryant"
print(students)

sports_directory ['soccer'][0] = "Andres"
print(sports_directory)

z[0]['y'] =30
print(z)


#2 Iterate Through a List of Dictionaries
# ---------------------------------------------

students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
     ]

def iterateDictionary(some_list):
     for x in range(len(some_list)):
          print(f"First name - {some_list[x]['first_name']} Last Name- {some_list[x]['last_name']}")


iterateDictionary(students) 

#3 Get Values From a List of Dictionaries
# ---------------------------------------------
inp = input("Choose : 1- first_name or 2- last_name:\n")
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
     ]

try:
     def iterateDictionary( keys , some_list ):
          for x in range(len(some_list)):
               print(f"{some_list[x][keys]}")

except:
     print("Error in value you enter it")


iterateDictionary(inp,students) 

# ---------------------------------------------
# Other Solution for 3
# def iterateDictionary2(key_name, some_list):
#     if key_name=='first_name':
#         for i in range(len(some_list)):
#             print(some_list[i][key_name])
#     elif key_name=='last_name':
#         for i in range(len(some_list)):
#             print(some_list[i][key_name])
# ---------------------------------------------

#4 Iterate Through a Dictionary with List Values
# ---------------------------------------------
dojo = {
   'locations': ['San Jose', 'Seattle', 'Dallas', 'Chicago', 'Tulsa', 'DC', 'Burbank'],
   'instructors': ['Michael', 'Amy', 'Eduardo', 'Josh', 'Graham', 'Patrick', 'Minh', 'Devon']
}
def printInfo(dojo):

    print(len(dojo['locations']), "locations\n------------")
    for locat in dojo['locations']:
        print(locat)

    print("\n",len(dojo['instructors']), "instructors\n------------")
    for instruc in dojo['instructors']:
       print(instruc)

printInfo(dojo)


