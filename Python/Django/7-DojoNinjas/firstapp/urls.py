
from django.urls import path, include
from . import views

urlpatterns = [
    path('dispalyerDB', views.dispalyerDB),
    path('',views.adderDB),
    path('adding',views.adderDB),
]