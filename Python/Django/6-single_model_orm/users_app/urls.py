from django.urls import path 
from . import views
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('',views.delecting),
    path('result',views.show),
    path('delete',views.deletes),
]
