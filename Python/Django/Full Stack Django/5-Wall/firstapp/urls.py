from django.urls import path,include
from . import views

urlpatterns = [
    # path('login',include('loginApp.urls')),

    # *******************************************
    # when start a app runing after login.
    path('<int:id>', views.MainPage),
    # *******************************************

    # path('main', views.MainWall),

    # *******************************************
    # create a post
    path('postcreate', views.postcreate),
    # *******************************************

    # *******************************************
    # create a comment
    path('createcomment/<int:id>', views.createcomment),
    # *******************************************
    path('deletecomment/<int:id>',views.deletecomment),
    path('logout', views.logout),

]