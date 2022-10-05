from django.shortcuts import render
from urllib import request
from django.shortcuts import render, redirect, HttpResponse
from .models import msgs, comments
from loginApp.models import loges
from django.contrib import messages
import bcrypt


# **********************************
# open a Login Page in first time
# **********************************

def MainPage(request, id):
    # userid in welcome {{name of session}}

    if 'userid' in request.session:

        # for view a massages and loges data
        context = {
            'allmasseges': msgs.objects.all(),
            'user': loges.objects.get(id=id),
            'allcomment': comments.objects.all(),
        }
        return render(request, 'wall.html', context)
    else:
        # go to login page if session is not work well
        return redirect('/')


# def MainWall(request):

#     context = {
#         'allmasseges': msgs.objects.all(),
#         'allloges': loges.objects.all(),
#         'allcomment': comments.objects.all(),
#     }
#     comments.objects.all().delete()
#     return render(request, 'wall.html', context)


def postcreate(request):
    user_id = request.POST.get('user_id')
    user = loges.objects.get(id=user_id)
    text = request.POST['textpost']

    msgs.objects.create(
        message=text,
        user_who_msg=user
    )
    # Get a last item in Data  == Login loges

    return redirect(f'/wall/{user_id}')


def createcomment(request, id):
    user_id = request.POST.get('user_id')
    print('-----------------')
    # print(user_id)
    print('-----------------')
    user = loges.objects.get(id=user_id)
    text = request.POST['textcomment']

    comments.objects.create(
        coment=text,
        user_who_commit=user,
        commit_on_message=msgs.objects.get(id=id)

        # msg_commit_id=user,
    )
    return redirect(f'/wall/{user_id}')


def deletecomment(request, id):
    user_id = request.POST.get('user_id')
    msg1 = msgs.objects.get(id=id)
    msg1.delete()
    return redirect(f'/wall/{user_id}')


def logout(request):
    del request.session['userid']
    return ('/')
