from django.shortcuts import render, redirect


def check1(request):
    if 'count' in request.session:
        request.session['count'] = request.session['count'] + 1
    else:

        request.session['count'] = 1

    return render(request, 'counter.html')


def check2(request):
    if 'count2' in request.session:
        request.session['count2'] = request.session['count2'] + 1
    else:

        request.session['count2'] = 1

    return render(request, 'counter.html')


def destroy_session(request):
    request.session['count'].pop()
    return redirect('/counter')


def increment(request):
    request.session['count'] = int(request.session['count']) + 1
    return redirect('/counter')


def reset(request):
    request.session['count'] = -1
    return redirect('/counter')
