from django.urls import path
from . import views
from firstapp.models import *

urlpatterns = [
    path('', views.firstpage),

    # the url of => Book page
    path('addbooks', views.addbook),
    path('deletebooks',views.deletebooks),
    # the url of =>  ResultB page
    path('view_books/<int:id_book>/', views.viewbooks),
    path('createbook', views.createbook),
    path('deletebook', views.deletebooks),
    path('DSBooks', views.DSBooks),
    path('USBooks', views.USBooks),
    
     

    # the url of => author
    path('author', views.authorRun),
    path('addauthor', views.addauthor),

    # the url of =>  ResultA page
    path('createA', views.createAuthor),
    path('view_authors/<int:id_author>/', views.viewauthor),

]
