
from django.shortcuts import render, redirect, HttpResponse
from .models import *

# ----------------------Book Page------------------
# --------------------------------------------------

# when i start a program or when go to my first page
# should i display a all of book
def firstpage(request):
    context = {
       'allbook_firstpage': Book.objects.all(),
    }
    return render(request, 'Book.html', context)

# get a book data and then create it in my Database
def addbook(request):
    Book.objects.create(title=request.POST['title'], desc=request.POST['desc'])
    return redirect('/')

# ----------------------ResultB Page----------------
# --------------------------------------------------

# get (id) from url and url getting it from Book.html 
def viewbooks(request,id_book):

   # send a data of book that i checked on view from Book.html page
   bookes = Book.objects.get(id=id_book)

   # send a data of author
   author = Author.objects.all()
  
   context = {
      "book":bookes,
      "author":author,
   }
   return render(request,'ResultB.html',context)

# ----------------------author Page------------------
# --------------------------------------------------

# get a author data and then create it in my Database
def addauthor(request):
    Author.objects.create(fname=request.POST['fname'], last_name=request.POST['lname'])
    return redirect('/')




def createbook(request):

   id=request.POST['hidden']
   auth=Author.objects.get(id=request.POST['select1'])
   book=Book.objects.get(id=id)
   book.authors.add(auth)
   # book.authors.remove(auth)
   return redirect(f'view_books/{id}')
