from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.contrib import messages
import bcrypt

# **********************************
# open a Login Page in first time
# **********************************


def MainPage(request):
    return render(request, 'Login.html')


# **********************************
# open a Result in succrss Page after register function go to redirect to open a success page
# **********************************

def Success(request):
    return render(request, 'Success.html')

# **********************************
# This function to get data from form and then record a data with
# 1 - Validation
# 2 - Security
# **********************************


def register(request):
    # ---------------
    # Validator
    # ---------------
    errors = loges.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')

    # ---------------
    # Security
    # ---------------
    password = request.POST['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    print(pw_hash)

    # ---------------
    # CRUD Operation in Data
    # ---------------

    loges.objects.create(
        firstname=request.POST['fname'],
        lastname=request.POST['lname'],
        email=request.POST['email'],
        password=pw_hash,
        brithday=request.POST['birthday']
    )
    # ------------------------------------------
    # Get a last item in Data  == Login Users
    # ------------------------------------------
    GetUserReg = loges.objects.last()
    request.session['UserReg'] = GetUserReg.firstname

    return redirect('/success')


def login(request):
    # ------------------------------------------
    # Used Filter for dealing with get response.however, this if data empty with give us error or
    # if there data repeated with give us error
    # ------------------------------------------
    user = loges.objects.filter(email=request.POST['email2'])
    if user:
        logged_user = user[0]

        if bcrypt.checkpw(request.POST['password2'].encode(), logged_user.password.encode()):
            # ------------------------------------------
            # define a session and give it a initial value of id and firstname.
            # ------------------------------------------
            request.session['userid'] = logged_user.id
            request.session['UserReg'] = logged_user.firstname

            return redirect('/success')

    return redirect('/')


def logout(request):
    del request.session['userid']
    del request.session['UserReg']
    return redirect('/')
