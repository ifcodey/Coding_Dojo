from django.shortcuts import render , redirect 
from time import gmtime, strftime
    
def time(request):
    context = {
        "time": strftime("%Y-%m-%d %H:%M %p", gmtime())
    }
    return render(request,'index.html', context)

def display(request):
    return redirect('/')

