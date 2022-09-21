from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse


def form(request):
    return render(request, 'form.html')


def dojo_form(request):
    if request.method == 'POST':
        context = {
            'uname': request.POST['Username'],
            'loc': request.POST['Location'],
            'favlang': request.POST['fav_lang'],
            'com': request.POST['Comment'],
            'R': request.POST['rad'],
            'CH': request.POST['check'],
        }
        return render(request, 'result.html', context)
    else:
        return redirect('/')
