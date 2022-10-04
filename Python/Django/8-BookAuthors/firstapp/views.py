
from ast import Delete
from calendar import c
from django.shortcuts import render, redirect, HttpResponse
from .models import *

# ----------------------Book Page------------------
# --------------------------------------------------

# when i start a program or when go to my first page
# should i display a all of book


def firstpage(request):
    context = {
        'book1': Book.objects.all(),
    }
    return render(request, 'Book.html', context)

# get a book data and then create it in my Database


def addbook(request):
    Book.objects.create(title=request.POST['title'], desc=request.POST['desc'])
    return redirect('/')

def deletebooks(request):
    c = Book.objects.all()
    c.delete()
    return redirect('/')

def DSBooks(request):
    id = request.POST['select_delete']
    c = Book.objects.get(id = id)
    c.delete()
    return redirect('/')


def USBooks(request):
    id = request.POST['select_update']
    c = Book.objects.get(id=id)
    c.title = request.POST['title']
    c.desc =  request.POST['desc']
    c.save()
    return redirect('/')
# ----------------------ResultB Page----------------
# --------------------------------------------------

# get (id_book) from url and url getting it from Book.html


def viewbooks(request, id_book):

    # send a data of book that i checked on view from Book.html page
    book2 = Book.objects.get(id=id_book)

    # send a data of author
    author2 = Author.objects.all()

    context = {
        "book2": book2,
        "author2": author2,
    }
    return render(request, 'ResultB.html', context)


def createbook(request):
    # id => for book get it by pass in hidden input
    id = request.POST['hidden']
    # id => for author get it
    auth = Author.objects.get(id=request.POST['select_book'])

    book = Book.objects.get(id=id)
    book.authors.add(auth)
    # book.authors.remove(auth)

    return redirect(f'view_books/{id}')

# ----------------------author Page------------------
# --------------------------------------------------

# get a author data and then create it in my Database
def authorRun(request):
    context = {
        'auth1': Author.objects.all(),
    }
    return render(request,'Author.html', context)

def addauthor(request):
    Author.objects.create(first_name=request.POST['fname'], last_name=request.POST['lname'], nodes=request.POST['notes'])
    return redirect('/author')

# ----------------------ResultA Page----------------
# --------------------------------------------------


def viewauthor(request, id_author):

    # send a data of book that i checked on view from Book.html page
    auth2 = Author.objects.get(id=id_author)

    # send a data of author
    books2 = Book.objects.all()

    context = {
        "auth2": auth2,
        "books2": books2,
    }
    return render(request, 'ResultA.html', context)


def createAuthor(request):
    # id => for book get it by pass in hidden input
    id = request.POST['hidden']
    # id => for author get it 
    book3 = Book.objects.get(id=request.POST['select_author'])

    auth = Author.objects.get(id=id)
    auth.books.add(book3)
    # book.authors.remove(auth)

    return redirect(f'view_authors/{id}')
