from django.urls import path
from . import views

urlpatterns = [

    # login page 
    path('', views.loginRun),
    path('register', views.register),
    path('login', views.login),
    path('logout', views.logout),

    # All_Show page
    path('refresh', views.refresh_All),
    path('shows', views.allshow),

    # Add_Show page
    path('shows/new', views.refresh_Add),
    path('adddata', views.addshow),

    # TV_Show page
    path('shows/<int:id>', views.tvshows),

    # Edit_Show page
    # path('addupdate', views.addupdate),
    path('update', views.update),
    path('shows/<int:id>/edit', views.edit),
    path('shows/<int:id>/delete', views.delete),

]
