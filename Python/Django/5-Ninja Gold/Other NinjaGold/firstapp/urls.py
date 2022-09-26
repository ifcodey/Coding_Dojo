from django.urls import path
from . import views

urlpatterns = [
    path('',views.getGold),
    path('getMoney',views.getMoney),
    path('reset',views.reset),
    
]