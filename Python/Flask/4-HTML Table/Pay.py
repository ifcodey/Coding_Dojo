from flask import Flask, render_template
htmlTab= Flask(__name__) #name of the page 

users = [
   {'first_name' : 'Michael', 'last_name' : 'Choi'},
   {'first_name' : 'John', 'last_name' : 'Supsupin'},
   {'first_name' : 'Mark', 'last_name' : 'Guillen'},
   {'first_name' : 'KB', 'last_name' : 'Tonel'}
]

@htmlTab.route("/")
def initial_render():
    return "write /user to load table data"

@htmlTab.route("/user")
def showTab():
    return render_template("index.html",usersTab=users)
    


if __name__ == "__main__":
    htmlTab.run(debug=True)