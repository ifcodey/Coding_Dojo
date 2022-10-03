from django.shortcuts import render, HttpResponse, redirect
from .models import *
from django.contrib import messages
import bcrypt


def MainPage(request):
    return render(request, 'Login.html')


def Success(request):
    return render(request, 'Success.html')


def register(request):
    # ===========
    # Validator
    # ===========
    errors = loges.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/')

    # ===========
    # Security
    # ===========
    password = request.POST['password']
    pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
    print(pw_hash)

    # ===========
    # CRUD Operation in Data
    # ===========

    loges.objects.create(
        firstname=request.POST['fname'],
        lastname=request.POST['lname'],
        email=request.POST['email'],
        password=pw_hash,
        brithday=request.POST['birthday']
    )
    GetUserReg = loges.objects.last()
    request.session['UserReg'] = GetUserReg.firstname

    return redirect('/success')


def login(request):

    user = loges.objects.filter(email=request.POST['email2'])
    if user:
        logged_user = user[0]

        if bcrypt.checkpw(request.POST['password2'].encode(), logged_user.password.encode()):
            request.session['userid'] = logged_user.id
            request.session['UserReg'] = logged_user.firstname

            return redirect('/success')

    return redirect('/')


def logout(request):
    del request.session['userid']
    del request.session['UserReg']
    return redirect('/')
