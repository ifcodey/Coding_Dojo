from django.urls import path,include
from . import views

urlpatterns = [

    # *******************************************
    # editArb Page
    # *******************************************
    path('edit', views.Runedit),
    path('edit/<int:id>', views.edit),
    path('update/<int:id>', views.update),


    # *******************************************
    # myTree Page
    # *******************************************

    path('user', views.user_runPage),
    path('delete/<int:id>', views.delete),

    # *******************************************
    # show Page
    # *******************************************
    
    path('show/<int:id>/<int:id2>', views.show_runPage),

    # *******************************************
    # addArb Page
    # *******************************************
    path('new/tree', views.addArb_runPage),
    path('new/addArb_create', views.addArb_create),

    # *******************************************
    # Dashbord Page
    # *******************************************
    path('dashbord', views.dashbord),
    path('dashbord/<int:id>', views.Maindashbord),

    # *******************************************
    # Login Page
    # *******************************************

    path('', views.MainPage),
    path('register', views.register),
    # path('delete', views.delete_comments),
    path('login', views.login),
    path('logout', views.logout),
]



