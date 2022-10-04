from django.urls import path
from . import views

urlpatterns = [
    path('', views.MainPage),
    path('register', views.register),
    # path('delete', views.delete_comments),
    path('login', views.login),
    path('logout', views.logout),

]
