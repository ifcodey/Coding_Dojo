from django.urls import path, include
from . import views
urlpatterns = [
    path('guess_game/', views.guess_game, name='guess_game'),
    path('',views.guess_game)
]