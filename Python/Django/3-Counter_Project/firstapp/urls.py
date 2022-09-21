from django.urls import path,include
from . import views
urlpatterns = [
    # path('admin/', admin.site.urls),
    path('counter/',views.check1),
    path('',views.check2),
    path('',views.destroy_session),
    path('increment',views.increment),
    path('reset',views.reset)
]
