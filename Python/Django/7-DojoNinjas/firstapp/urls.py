from django.urls import path, include
from . import views
from .models import *

urlpatterns = [
    path('', views.dispalyerDB),
    path('adding',views.adderDB),
    path('adding2',views.adderDB2),
    path('del',views.delete),

]