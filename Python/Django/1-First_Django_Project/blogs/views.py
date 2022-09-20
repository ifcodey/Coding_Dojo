from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse

def root(request):
    return redirect('/blogs')


def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")

def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")

def create(request):
    return redirect("/")

def show(request, num):
    return HttpResponse("placeholder to display blog number:" + num)

def edit(request, num1):
    return HttpResponse("placeholder to edit blog:" + num1)

def destroy(request,num2):
    return HttpResponse("placeholder to delete blog:" + num2)

def showJsons(request):

    return JsonResponse({'title' : 'my first app','content' : 'somthing important for people'})

    