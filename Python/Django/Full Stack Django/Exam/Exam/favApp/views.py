from urllib import request
from django.shortcuts import render, redirect, HttpResponse
from .models import *
from django.contrib import messages
import bcrypt


# **********************************
#         > editArb Page <
# **********************************

def edit(request, id):

    trees = Arbortary.objects.get(id=id)

    context = {
    'trees':trees
    }
    return render(request,'editArb.html',context)


def update(request,id):
    trees = Arbortary.objects.get(id=id)
    trees.species = request.POST.get('species1')
    trees.location = request.POST.get('location1')
    trees.reason = request.POST.get('reason1')
    trees.date = request.POST.get('date1')
    trees.save()
    return redirect('/user')

def Runedit(request):
    return render(request, 'editArb.html')

# **********************************
#         > user Page <
# **********************************


def user_runPage(request):
    user = User.objects.get(id=request.session['userid'])
    context = {
        'user': user,
    }

    return render(request, 'user.html', context)


def delete(request, id):
    c = Arbortary.objects.get(id=id)
    # print('--------------')
    # print(c)
    # print('--------------')
    c.delete()
    return redirect('/dashbord')

# **********************************
#         > show Page <
# **********************************


def show_runPage(request, id, id2):
    arb_id = Arbortary.objects.get(id=id)
    # id2 = int(request.POST['hider'])
    user_id = User.objects.get(id=id2)
    # print('-------------')
    # print(user_id)
    # print('-------------')
    context = {
        'arbortary': arb_id,
        'user': user_id,

    }
    return render(request, 'show.html', context)


# **********************************
#         > addArb Page <
# **********************************
def addArb_runPage(request):
    return render(request, 'addArb.html')


def addArb_create(request):

    # -------------------------
    # Validator for Arbortary Table
    # -------------------------
    errors = Arbortary.objects.basic_validator(request.POST)
    # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/new/tree')

    # -------------------------
    # CRUD Operation in Data
    # -------------------------

    user_id = User.objects.get(id=request.session['userid'])
    new_arb = Arbortary.objects.create(
        species=request.POST['species'],
        location=request.POST['location'],
        reason=request.POST['reason'],
        date=request.POST['date'],

        # this forginKey depend in user id ->make a auto increment

        planded_by=user_id,
    )
    lastone = Arbortary.objects.last()

    return redirect(f'/dashbord')


# **********************************
#         > dashbord Page <
# **********************************


def Maindashbord(request, id):
    user_id = User.objects.get(id=id)
    context = {
        'users': user_id,
        'species': Arbortary.objects.all(),
    }
    return render(request, 'dashbord.html', context)


def dashbord(request):
    user_id = User.objects.get(id=request.session['userid'])
    context = {
        'users': user_id,
        'species': Arbortary.objects.all(),
    }
    return render(request, 'dashbord.html', context)

# **********************************
#         > Login Page <
# **********************************


def MainPage(request):
    return render(request, 'Login.html')

# **********************************
# This function to get data from form and then record a data with
# 1 - Validation
# 2 - Security
# **********************************


def register(request):
    # ---------------
    # Validator for User Table
    # ---------------
    errors = User.objects.basic_validator(request.POST)

    # users = User.objects.all()
    # for user in users:
    #     errors['email'] = "This email already exists in our data"

    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')

    # ---------------
    # Security User password
    # ---------------
    password = request.POST['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    print(pw_hash)

    # ---------------
    # CRUD Operation in Data
    # ---------------

    new_user = User.objects.create(
        firstname=request.POST['fname'],
        lastname=request.POST['lname'],
        email=request.POST['email'],
        password=pw_hash,
    )
    new_user.save()

    # Get a last item in Data  == Login User
    GetUserReg = User.objects.last()
    request.session['UserReg'] = GetUserReg.firstname

    # define a session and give it a initial value of id and firstname.
    request.session['userid'] = GetUserReg.id

    return redirect('/')


def login(request):
    # ------------------------------------------
    # Used Filter for dealing with get response.however, this if data empty with give us error or
    # if there data repeated with give us error
    # ------------------------------------------
    user = User.objects.filter(email=request.POST['email'])
    if user:
        logged_user = user[0]

        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            # ------------------------------------------
            # define a session and give it a initial value of id and firstname.
            # ------------------------------------------
            request.session['userid'] = logged_user.id
            request.session['UserReg'] = logged_user.firstname

            return redirect(f'/dashbord/{logged_user.id}')

    return redirect('/')

# Delete a Session after (logout)


def logout(request):
    del request.session['userid']
    del request.session['UserReg']
    return redirect('/')
