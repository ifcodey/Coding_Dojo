from urllib import request
from django.shortcuts import render, HttpResponse, redirect
import random
from django.utils.timezone import datetime


def getGold(request):
    # This for first step when we click to and button
    if 'account_money' not in request.session or 'activate' not in request.session:
        request.session['account_money'] = 0
        request.session['activate'] = []

    return render(request, 'index.html')


def getMoney(request):
    randcolor = random.randint(0, 254)
    colorX  = '#' + str(randcolor)

    # --------------------------------------------

    if request.POST['account_money'] == 'farm':
        randNum = random.randint(10, 20)
        request.session['account_money'] += randNum
        request.session['activate'].append(f'You Entered a farm and Entered {str(randNum)}. {str(datetime.now().strftime("%b-%d-%Y %H:%M-%p"))};')

        # After we print now can get a rand number for second click
        request.session['counter'] = randNum

    elif request.POST['account_money'] == 'cave':
         randNum = random.randint(10, 20)

         request.session['account_money'] += randNum
         request.session['activate'].append(f'You Entered a cave and Entered {str(randNum)}. {str(datetime.now().strftime("%b-%d-%Y %H:%M-%p"))};')
        #  request.session['counter'] = randNum

    elif request.POST['account_money'] == 'house':
         randNum = random.randint(10, 20)

         request.session['account_money'] += randNum
         request.session['activate'].append(f'You Entered a house and Entered {str(randNum)}. {str(datetime.now().strftime("%b-%d-%Y %H:%M-%p"))};')
        #  request.session['counter'] = randNum 
    
    else:
        # put it (-50) to (50) beacuse there is getting money and giving 
        # a ninja money so the range between -50 and 50
        randNum = random.randint(-50,50)
        # when earning a money
        if randNum > 0:
           request.session['activate'].append(f'You Entered a quest and Entered {str(randNum)}. {str(datetime.now().strftime("%b-%d-%Y %H:%M-%p"))};') 
        # when loosing a money
        elif randNum < 0:
            request.session['activate'].append(f'You failed a quest and Entered {str(randNum)}. {str(datetime.now().strftime("%b-%d-%Y %H:%M-%p"))};') 

        request.session['account_money'] +=randNum
    return redirect('/')
    
# reset a text box
def reset(request):
    request.session['account_money'] = 0
    request.session['activate'] = []
    return redirect('/')


