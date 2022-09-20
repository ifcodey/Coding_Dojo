#from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.root),
    path('blogs',views.index),
    path('blogs/new',views.new),
    path('blogs/<num>',views.show),
    path('blogs/<num1>/edit',views.edit),
    path('blogs/<num2>/delete',views.destroy),
    path('1/json',views.showJsons),
]