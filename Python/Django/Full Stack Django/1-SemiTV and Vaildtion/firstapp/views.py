from urllib import request
from django.shortcuts import render, redirect, HttpResponse
from .models import *
from django.contrib import messages


# ===========================================================
# ******** All_Show Page ********
# ===========================================================
# go to All_Show page and run it defualt
def refresh_All(request):
    return redirect('/shows')

# ...........................................................
# go to All_Show page and give it a data from moduels


def allshow(request):
    context = {
        'allshow': Show.objects.all(),
    }
    return render(request, 'All_Show.html', context)


# ===========================================================
# ******** Add_Show Page ********
# ===========================================================

# go to All_Show page and give it a data from moduels
def refresh_Add(request):
    context2 = {
        'allshow': Show.objects.all(),
    }
    return render(request, 'Add_Show.html')

# ...........................................................
# come from Add_Show page and create a data



def addshow(request):

# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
# Validation
# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

    errors = Show.objects.basic_validator(request.POST)
    # check if the errors dictionary has anything in it
    if len(errors) > 0:
        # if the errors dictionary contains anything, loop through each key-value pair and make a flash message
        for key, value in errors.items():
            messages.error(request, value)
        # redirect the user back to the form to fix the errors
        return redirect('/shows/new')
    else:
# @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

        Show.objects.create(title=request.POST['title'], nets=request.POST['nets'],
                            release_date=request.POST['release_date'], desc=request.POST['desc'])
        ends = Show.objects.last()
        return redirect(f'shows/{ends.id}')

# ===========================================================
# ******** TV_Show Page ********
# ===========================================================


def tvshows(request, id):
    context = {
        'datashow': Show.objects.get(id=id)
    }
    return render(request, 'TV_Show.html', context)

# ===========================================================
# ******** Edit_Show Page ********
# ===========================================================


def edit(request, id):
    context = {
        'editdata': Show.objects.get(id=id)
    }
    return render(request, 'Edit_Show.html', context)

# ...........................................................


def update(request):
    get_id_Editpage = Show.objects.get(id=request.POST['hide'])
    get_id_Editpage.title = request.POST['title']
    get_id_Editpage.nets = request.POST['nets']
    get_id_Editpage.release_date = request.POST['release_date']
    get_id_Editpage.desc = request.POST['desc']
    get_id_Editpage.save()
    return redirect(f'shows/{get_id_Editpage.id}')

# ...........................................................


def delete(request, id):
    c = Show.objects.get(id=id)
    # print('--------------')
    # print(c)
    # print('--------------')
    c.delete()
    return redirect('/shows')
