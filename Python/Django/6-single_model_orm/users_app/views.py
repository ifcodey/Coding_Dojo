from django.shortcuts import render,HttpResponse,redirect
from .models import User

def show(request):
    User.objects.create(firstName=request.POST["firstName"], LastName=request.POST["LastName"],emailAddress=request.POST["emailAddress"], age=request.POST["age"])
    return redirect('/')
    
    

def delecting(request):
    context ={
        "all_the_users" : User.objects.all()
    }
    return render(request,'user.html',context)
  

def deletes(request):
    c = User.objects.last()
    c.delete()
    return redirect('/')