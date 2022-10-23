from urllib import request
from django.shortcuts import render, redirect, HttpResponse
from .models import *
from django.contrib import messages
import bcrypt


# **********************************
# This function to get data from form and then record a data with
# 1 - Validation
# 2 - Security
# **********************************
def loginRun(request):
    return render(request, 'login.html')


def register(request):
    # ---------------
    # Validator for User Table
    # ---------------
    errors = Users.objects.basic_validator(request.POST)

    # ----------------------------------------
    # for email checker if exist in database
    # ----------------------------------------
    users = Users.objects.all()
    for user in users:
        errors['email'] = "This email already exists in our data"

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

    new_user = Users.objects.create(
        firstname=request.POST['fname'],
        lastname=request.POST['lname'],
        email=request.POST['email'],
        password=pw_hash,
    )
    new_user.save()

    # Get a last item in Data  == Login User
    GetUserReg = Users.objects.last()
    request.session['UserReg'] = GetUserReg.firstname

    # define a session and give it a initial value of id and firstname.
    request.session['userid'] = GetUserReg.id

    return redirect('/')


def login(request):
    # ------------------------------------------
    # Used Filter for dealing with get response.however, this if data empty with give us error or
    # if there data repeated with give us error
    # ------------------------------------------
    user = Users.objects.filter(email=request.POST['email'])
    if user:
        logged_user = user[0]

        if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
            # ------------------------------------------
            # define a session and give it a initial value of id and firstname.
            # ------------------------------------------
            request.session['userid'] = logged_user.id
            request.session['UserReg'] = logged_user.firstname

            return redirect('/shows')

    return redirect('/')

# Delete a Session after (logout)


def logout(request):
    del request.session['userid']
    del request.session['UserReg']
    return redirect('/')

# ===========================================================
# ******** All_Show Page ********
# ===========================================================
# go to All_Show page and run it defualt
def refresh_All(request):
    return redirect('/shows')

# ...........................................................
# go to All_Show page and give it a data from moduels


def allshow(request):
    context = {
        'user2': Show.objects.filter(id=request.session['userid']),
        'user': request.session['userid'],
        'allshow': Show.objects.all(),
    }
    return render(request, 'All_Show.html', context)


# ===========================================================
# ******** Add_Show Page ********
# ===========================================================

# go to All_Show page and give it a data from moduels
def refresh_Add(request):
    context2 = {
        'allshow': Show.objects.all(),
    }
    return render(request, 'Add_Show.html')

# ...........................................................
# come from Add_Show page and create a data



def addshow(request):

# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Validation
# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    errors = Show.objects.basic_validator(request.POST)
    # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/shows/new')
    else:
# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

        Show.objects.create(title=request.POST['title'], nets=request.POST['nets'],
                            release_date=request.POST['release_date'], desc=request.POST['desc'])
        ends = Show.objects.last()
        return redirect(f'shows/{ends.id}')

# ===========================================================
# ******** TV_Show Page ********
# ===========================================================


def tvshows(request, id):
    context = {
        'datashow': Show.objects.get(id=id)
    }
    return render(request, 'TV_Show.html', context)

# ===========================================================
# ******** Edit_Show Page ********
# ===========================================================


def edit(request, id):
    context = {
        'editdata': Show.objects.get(id=id)
    }
    return render(request, 'Edit_Show.html', context)

# ...........................................................


def update(request):
    get_id_Editpage = Show.objects.get(id=request.POST['hide'])
    get_id_Editpage.title = request.POST['title']
    get_id_Editpage.nets = request.POST['nets']
    get_id_Editpage.release_date = request.POST['release_date']
    get_id_Editpage.desc = request.POST['desc']
    get_id_Editpage.save()
    return redirect(f'shows/{get_id_Editpage.id}')

# ...........................................................


def delete(request, id):
    c = Show.objects.get(id=id)
    # print('--------------')
    # print(c)
    # print('--------------')
    c.delete()
    return redirect('/shows')
