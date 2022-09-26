from urllib import request
from django.shortcuts import render, HttpResponse, redirect
from django.utils.timezone import datetime
from .models import Dojo, Ninja
import random


def dispalyer(request):
    context = {
        'all_Dojo': Dojo.objects.all(),
        'all_Ninja': Dojo.objects.all(),
    }
    return render(request, 'index.html', context)


def adder(request):
    if request.POST['name'or'city'or'state' or 'desc'] :
        Dojo.objects.create(name=request.POST['name'],city=request.POST['city'],state=request.POST['state'],desc=request.POST['desc'])
    
    elif request.POST['first_name'or'last_name' and 'dojo'] :
        Ninja.objects.create(first_name=request.POST['first_name'],last_name=request.POST['last_name'],dojo=request.POST['dojo'])
    return redirect('/')

def handles():
    dojo = Dojo.objects.get(id = request.POST['dojo'])
    Ninja.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'],dojo)