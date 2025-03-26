"""
URL configuration for hello_django project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.http import HttpResponse

def area_rectangle(resquest, height,width):
    return HttpResponse(height*width)

def perimeter_rectangle(request, height, width):
    return HttpResponse(height*2 + width*2)

def area_circle(request, radius):
    return HttpResponse(radius**2 *3.14)

def perimeter_circle(request, radius):
    return HttpResponse((3.14*radius)*2)

urlpatterns = [

    path('admin/', admin.site.urls),
    path('rectangle/area/<int:height>/<int:width>',area_rectangle),
    path('rectangle/perimeter/<int:height>/<int:width>', perimeter_rectangle),
    path('circle/area/<int:radius>',area_circle),
    path('circle/perimeter/<int:radius>',perimeter_circle),


]
