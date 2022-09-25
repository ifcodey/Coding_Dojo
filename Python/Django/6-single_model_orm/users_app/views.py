from django.shortcuts import render,HttpResponse,redirect
from .models import User

def delecting(request):
    User.objects.create(fname=request.POST["firstName"], lname=request.POST["LastName"],email=request.POST["emailAddress"], ages=request.POST["age"])
    return redirect('/')
    
    

def show(request):
    context ={
        "all_the_users" : User.objects.all()
    }
    return render(request,'user.html',context)
  

