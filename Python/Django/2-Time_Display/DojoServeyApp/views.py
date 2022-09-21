from django.shortcuts import render, HttpResponse, redirect
from django.http import JsonResponse


def form(request):
    return render(request, 'dojoSurvey1.html')


def dojo_form(request):
    if request.method == 'POST':
        context = {
            'uname': request.POST['Username'],
            'loc': request.POST['Location'],
            'favlang': request.POST['language'],
            'com': request.POST['Comment'],
            'radio': request.POST['radio'],
            'checkbox': request.POST['checkbox'],
        }
        return render(request, 'dojoSurvey2.html', context)
    else:
        return redirect('/')
