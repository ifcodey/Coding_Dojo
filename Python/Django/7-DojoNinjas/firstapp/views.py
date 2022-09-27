from urllib import request
from django.shortcuts import render, HttpResponse, redirect
from django.utils.timezone import datetime
from .models import Dojo, Ninja
import random

def dispalyerDB(request):
    context = {
        'all_Dojo': Dojo.objects.all(),
        'all_Ninja': Dojo.objects.all(),
    }
    return render(request, 'index.html', context)


def adderDB(request):
  
    Dojo.objects.create(name=request.POST['name'],city=request.POST['city'],state=request.POST['state'])
    return redirect('/')

def adderDB2(request):
    dojo = Dojo.objects.get(id =request.POST['dojo'])
    Ninja.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],dojo = dojo)
    return redirect('/')

    # if request.POST['name'or'city'or'state' or 'desc'] :
    # if 'name'or'city'or'state' or 'desc' in request.POST :
    # elif 'first_name'or'last_name' and 'dojo' in request.POST :

def delete(request):
    c=Dojo.objects.get(id=request.POST['remove'])
    c.delete()    
    return redirect('/')

    
