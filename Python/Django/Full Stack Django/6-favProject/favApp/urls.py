from django.urls import path,include
from . import views

urlpatterns = [

    # *******************************************
    # Fav Page
    # *******************************************
    # when start a app runing after login.
    path('fav', views.runFav),
    # path('fav/logout', views.logout_Session),

    path('fav/create_book', views.create_book),

    
    path('fav/<int:id>', views.addfavor),
    # path('deletefavor/<int:id>', views.deletefavor),
    
    # *******************************************
    # Book Page
    # *******************************************
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
