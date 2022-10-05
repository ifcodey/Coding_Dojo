from turtle import title
from urllib import request
from django.shortcuts import render, redirect, HttpResponse
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

# def delete_comments(request):
#     Book.objects.all().delete()
#     User.objects.all().delete()
#     return redirect('/')

# **********************************
# This function to get data from form and then record a data with
# 1 - Validation
# 2 - Security
# **********************************


def register(request):
    # ---------------
    # Validator
    # ---------------
    errors = User.objects.basic_validator(request.POST)
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

    new_user = User.objects.create(
        firstname=request.POST['fname'],
        lastname=request.POST['lname'],
        email=request.POST['email'],
        password=pw_hash,
    )
    new_user.save()
    # ------------------------------------------
    # Get a last item in Data  == Login User
    # ------------------------------------------
    GetUserReg = User.objects.last()
    request.session['UserReg'] = GetUserReg.firstname
    # ------------------------------------------
    # define a session and give it a initial value of id and firstname.
    # ------------------------------------------
    request.session['userid'] = GetUserReg.id

    return redirect('/books')


def login(request):
    # ------------------------------------------
    # Used Filter for dealing with get response.however, this if data empty with give us error or
    # if there data repeated with give us error
    # ------------------------------------------
    user = User.objects.filter(email=request.POST['email2'])
    if user:
        logged_user = user[0]

        if bcrypt.checkpw(request.POST['password2'].encode(), logged_user.password.encode()):
            # ------------------------------------------
            # define a session and give it a initial value of id and firstname.
            # ------------------------------------------
            request.session['userid'] = logged_user.id
            request.session['UserReg'] = logged_user.firstname

            return redirect('/books')

    return redirect('/')


def logout(request):
    del request.session['userid']
    del request.session['UserReg']
    return redirect('/')

# ******************************************************
# ******************************************************
# Fav Page
# ******************************************************
# ******************************************************

# def Main_fav(request):
#     return render(request, 'fav.html')


def runPage(request):
    user = User.objects.get(id=request.session['userid'])
    context = {
        'user': User.objects.get(id=request.session['userid']),
        'book': Book.objects.all(),

    }
    return render(request, 'fav.html', context)


# def MainPage_fav(request, id):
    # userid in welcome {{name of session}}

    # if 'userid' in request.session:

    # for view a massages and loges data
    # context = {
    #     'user': User.objects.get(id=id),
    #     'book': Book.objects.all(),

    # }
    # return render(request, 'fav.html', context)


def create_book(request):
    user = User.objects.get(id=request.session['userid'])
    print('-------------')
    print(user)
    print('-------------')
    new_book = Book.objects.create(
        title=request.POST['title'],
        desc=request.POST['desc'],
        uploaded_by=user,
    )

    last = Book.objects.last()
    last.users_who_like.add(user)
    return redirect('/books')


def addfavor(request, id):
    user = User.objects.get(id=request.session['userid'])
    books = Book.objects.get(id=id)

    books.users_who_like.add(user)
    return redirect('/books')


def deletefavor(request, id):
    books = Book.objects.get(id=id)
    books.delete()
    return redirect('/books')


def runBooks(request, id):
    user = User.objects.get(id=request.session['userid'])
    book = Book.objects.get(id=id)
    allbooks = Book.objects.all()
    context = {
        'book': book,
        'likebook': book.users_who_like.all(),
        'user': user,
        'allbooks': allbooks
    }
    return render(request, 'Books.html', context)


def logout_Session(request):
    del request.session['userid']
    return redirect('/')

def update1(request,id):
    description = Book.objects.get(id=id)
    description.desc = request.POST.get('desc')
    description.save()
    return redirect(f'/books/{id}')

def delete1(request,id):
    description = Book.objects.get(id=id)
    description.delete()
    return redirect(f'/books')