from django.urls import path,include
from . import views

urlpatterns = [

    # *******************************************
    # Fav Page
    # *******************************************
    # when start a app runing after login.
    path('books', views.runPage),
    path('books/logout', views.logout_Session),

    path('books/create_book', views.create_book),

    
    path('addfavor/<int:id>', views.addfavor),
    path('deletefavor/<int:id>', views.deletefavor),
    

    path('books/<int:id>', views.runBooks),

    path('books/update/<int:id>', views.update1),
    path('books/delete/<int:id>', views.delete1),

    # *******************************************
    # Login Page
    # *******************************************

    path('', views.MainPage),
    path('register', views.register),
    # path('delete', views.delete_comments),
    path('login', views.login),
    path('logout', views.logout),
]
