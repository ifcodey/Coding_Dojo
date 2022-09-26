
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.dispalyer),
    path('adder',views.adder)
]