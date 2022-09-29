from django.urls import path
from . import views
from firstapp.models import *

urlpatterns = [
    path('', views.firstpage),

    # the url of => Book page
    path('addbooks', views.addbook),

    # the url of =>  page
    path('create', views.createbook)
    path('view_books/<int:id_book>/', views.viewbooks),

    # the url of => author
    path('addauthor', views.addauthor),
    

]
